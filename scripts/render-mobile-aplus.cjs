/* Data-driven Mobile A+ compositor: exact source art + deterministic text/brand layers. */
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const sharp=require('sharp');
const {createCanvas,loadImage,GlobalFonts}=require('@napi-rs/canvas');
const repo=path.resolve(__dirname,'..');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
function within(p,r){return p===r||p.startsWith(r+path.sep);}
function readJSON(p){return JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));}
function xmpSynthetic(){return '<?xpacket begin="\uFEFF" id="W5M0MpCehiHzreSzNTczkc9d"?>\n<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:subject><rdf:Bag><rdf:li>contains-synthetic-performer</rdf:li></rdf:Bag></dc:subject></rdf:Description></rdf:RDF></x:xmpmeta>\n<?xpacket end="w"?>';}
async function render(specPath,qaPath){
 specPath=path.resolve(specPath);const spec=readJSON(specPath);if(spec.template)throw new Error('Fill and verify the mobile template before rendering.');const root=path.resolve(path.dirname(specPath),spec.productRoot||'..');
 if(!within(root,repo))throw new Error('Product root must be inside repository');
 const resolve=rel=>{rel=spec.sourceOverrides?.[rel]||rel;const r=rel.startsWith('@repo/')?repo:root,p=path.resolve(r,rel.replace(/^@repo\//,''));if(!within(p,r))throw new Error('Escaping source path');return p;};
 const profile=readJSON(resolve(spec.profile));if(spec.designId!==profile.id)throw new Error('Design/profile mismatch');
 const [W,H]=profile.canvas,output=resolve(spec.outputDir);require('./image-dimensions.cjs').dimensions('mobile',W,H);fs.mkdirSync(output,{recursive:true});
 const fontDir=process.env.APLUS_FONT_DIR||'C:/Windows/Fonts',fonts=[];
 for(const [name,family] of [['arial.ttf','MobileAplus'],['arialbd.ttf','MobileAplus Bold']]){const p=path.join(fontDir,name);if(!GlobalFonts.registerFromPath(p,family))throw new Error('Missing licensed Arial font; set APLUS_FONT_DIR');fonts.push({file:name,sha256:sha(fs.readFileSync(p))});}
 const sources=new Map(),cache=new Map(),records=[];
 async function input(rel){const b=fs.readFileSync(resolve(rel));sources.set(rel,{file:rel,sha256:sha(b),bytes:b.length});return b;}
 async function image(layer){
  const key=JSON.stringify(layer);if(cache.has(key))return cache.get(key);
  let b=await input(layer.file);
  if(layer.patches?.length){const patches=[];for(const p of layer.patches)patches.push({input:await input(p.file),left:p.left,top:p.top});b=await sharp(b).composite(patches).png().toBuffer();}
  if(layer.removeNeutralBackdrop){const raw=await sharp(b).ensureAlpha().raw().toBuffer({resolveWithObject:true});for(let i=0;i<raw.data.length;i+=4)if(raw.data[i+2]-raw.data[i]<25||raw.data[i+1]-raw.data[i]<12)raw.data[i+3]=0;b=await sharp(raw.data,{raw:raw.info}).png().toBuffer();}
  let s=sharp(b);if(layer.crop)s=s.extract({left:layer.crop[0],top:layer.crop[1],width:layer.crop[2],height:layer.crop[3]});if(layer.trimAlpha)s=s.trim({background:'#00000000',threshold:5});
  const im=await loadImage(await s.png().toBuffer());cache.set(key,im);return im;
 }
 for(const asset of spec.assets){
  if(!asset.altText||asset.altText.length>100)throw new Error('Alt text must contain 1–100 characters: '+asset.id);
  if(typeof asset.containsSyntheticPerson!=='boolean')throw new Error('Explicit AI-person classification required: '+asset.id);
  if(!asset.layers.some(l=>l.type==='image')||!asset.layers.some(l=>l.type==='text'))throw new Error('Each mobile asset needs actual artwork and text: '+asset.id);
  if(!asset.claimEvidence?.length)throw new Error('Missing claim evidence: '+asset.id);
  for(const e of asset.claimEvidence)if(!fs.existsSync(resolve(e)))throw new Error('Missing evidence reference: '+e);
  const c=createCanvas(W,H),g=c.getContext('2d'),textLayers=[],imageLayers=[];
  const gr=g.createLinearGradient(0,H,W,80);gr.addColorStop(0,profile.palette.tint);gr.addColorStop(.6,profile.palette.white);gr.addColorStop(1,profile.palette.topTint);g.fillStyle=gr;g.fillRect(0,0,W,H);
  g.fillStyle=profile.palette.wave;g.beginPath();g.moveTo(0,830);g.bezierCurveTo(400,900,900,660,1200,600);g.lineTo(W,H);g.lineTo(0,H);g.fill();
  for(const l of asset.layers){
   if(l.type==='box'){g.fillStyle=l.color||profile.palette.card;g.beginPath();g.roundRect(l.x,l.y,l.w,l.h,l.radius??24);g.fill();continue;}
   if(l.type==='text'){
    if(l.size<profile.typography.minimumEmbeddedPx)throw new Error('Mobile text below design minimum: '+asset.id);
    g.font=`${l.size}px "${l.bold?'MobileAplus Bold':'MobileAplus'}"`;g.fillStyle=profile.palette[l.color]||l.color||profile.palette.navy;g.textBaseline='top';g.textAlign=l.align||'left';
    const width=g.measureText(l.text).width,left=(l.align==='center'?l.x-width/2:l.x);
    if(width>l.maxWidth+.1||left<0||left+width>W||l.y<0||l.y+l.size>H-profile.safeBottomPx)throw new Error('Text out of bounds: '+asset.id+' / '+l.text);
    g.fillText(l.text,l.x,l.y);textLayers.push({...l,width,displayPxAt360:l.size*360/W});continue;
   }
   if(l.type==='image'){
    const im=await image(l);let w=l.w,h=l.h;if(w&&!h)h=w*im.height/im.width;else if(h&&!w)w=h*im.width/im.height;else if(w&&h){const r=Math.min(w/im.width,h/im.height);w=im.width*r;h=im.height*r;}else throw new Error('Missing image size');
    if(l.x<0||l.y<0||l.x+w>W+.1||l.y+h>H+.1)throw new Error('Image out of bounds: '+asset.id);
    g.save();if(l.radius){g.beginPath();g.roundRect(l.x,l.y,w,h,l.radius);g.clip();}if(l.shadow){g.shadowColor='#0D264B35';g.shadowBlur=20;g.shadowOffsetY=12;}g.drawImage(im,l.x,l.y,w,h);g.restore();imageLayers.push({...l,actualWidth:w,actualHeight:h,proportionPreserved:true});continue;
   }
   throw new Error('Unknown layer type: '+l.type);
  }
  let encoded=sharp(c.toBuffer('image/png')).flatten({background:'#FFFFFF'}).toColourspace('srgb').withMetadata({density:72});
  if(asset.containsSyntheticPerson)encoded=encoded.withXmp(xmpSynthetic());
  const b=await encoded.png({compressionLevel:9,adaptiveFiltering:true}).toBuffer(),meta=await sharp(b).metadata();
  if(b.length>=profile.maxBytesExclusive||meta.width!==W||meta.height!==H||meta.hasAlpha)throw new Error('Technical export gate failed');
  fs.writeFileSync(path.join(output,asset.filename),b);
  if(qaPath){fs.mkdirSync(qaPath,{recursive:true});for(const width of profile.previewWidths)await sharp(b).resize(width).png().toFile(path.join(qaPath,asset.id+'-'+width+'.png'));}
  const desktop=await input(asset.sourceDesktop);
  records.push({id:asset.id,file:path.posix.join(spec.outputDir,asset.filename),sourceDesktop:asset.sourceDesktop,sourceDesktopSha256:sha(desktop),sha256:sha(b),bytes:b.length,width:W,height:H,format:'PNG',colorSpace:'sRGB',density:72,hasAlpha:false,altText:asset.altText,nativeBody:asset.nativeBody,claimEvidence:asset.claimEvidence,containsSyntheticPerson:!!asset.containsSyntheticPerson,xmpSyntheticPerformer:!!meta.xmp?.toString().includes('contains-synthetic-performer'),standaloneBrandMarks:imageLayers.filter(l=>l.role==='standalone-brand').length,textLayers,sourceLayers:imageLayers,status:'EXPORTED_TECHNICAL_CHECKED_VISUAL_REVIEW_SEPARATE'});
 }
 const manifest={schemaVersion:2,designId:spec.designId,productId:spec.productId,marketplace:spec.marketplace,asin:spec.asin,date:spec.date,baselineCommit:spec.baselineCommit,recipe:path.relative(root,specPath).split(path.sep).join('/'),renderer:'scripts/render-mobile-aplus.cjs',profile:spec.profile,target:{observedMobileMinimum:[600,450],export:[W,H],maxBytesExclusive:profile.maxBytesExclusive},typography:profile.typography,fontSources:fonts,assets:records,sources:[...sources.values()],scope:'Independent Mobile design refinement; desktop masters unchanged.',amazonUpload:'NOT_PERFORMED',amazonPublication:'NOT_PERFORMED',style:'User requested mobile-specific refinement of the existing white/blue direction; no claim of separate post-render user approval.',limitations:['Official image rules and final per-module controls govern applicability.','Nine assets do not imply nine modules; choose allowed modules/carousels.','Illustrative scenes are not physical scale calibration or current-unit inspection.','AI-person metadata is embedded for the three generated hand scenes; no Amazon upload receipt claimed.']};
 fs.writeFileSync(resolve(spec.manifest),JSON.stringify(manifest,null,2)+'\n');
 if(qaPath)for(const width of [360,200]){const tiles=[];for(let i=0;i<records.length;i++)tiles.push({input:await sharp(path.join(output,spec.assets[i].filename)).resize(width).png().toBuffer(),left:(i%3)*width,top:Math.floor(i/3)*width*3/4});await sharp({create:{width:width*3,height:Math.ceil(records.length/3)*width*3/4,channels:3,background:'white'}}).composite(tiles).png().toFile(path.join(qaPath,'contact-'+width+'.png'));}
 return manifest;
}
module.exports={render};
if(require.main===module){if(!process.argv[2])throw new Error('Usage: node scripts/render-mobile-aplus.cjs <design.json> [temporary QA directory]');render(process.argv[2],process.argv[3]&&path.resolve(process.argv[3])).then(m=>console.log(JSON.stringify({images:m.assets.length,design:m.designId,largestBytes:Math.max(...m.assets.map(a=>a.bytes)),smallestEmbeddedPx:Math.min(...m.assets.flatMap(a=>a.textLayers.map(t=>t.size))),taggedHandScenes:m.assets.filter(a=>a.xmpSyntheticPerformer).map(a=>a.id)},null,2))).catch(e=>{console.error(e);process.exitCode=1;});}
