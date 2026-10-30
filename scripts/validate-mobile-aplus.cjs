const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),sharp=require('sharp');
const repo=path.resolve(__dirname,'..'),sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const J=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
async function validate(specPath){
 const spec=J(specPath),root=path.resolve(path.dirname(path.resolve(specPath)),spec.productRoot||'..');
 const resolve=p=>{p=spec.sourceOverrides?.[p]||p;return path.resolve(p.startsWith('@repo/')?repo:root,p.replace(/^@repo\//,''));};
 const profile=J(resolve(spec.profile)),m=J(resolve(spec.manifest)),desktop=J(path.join(root,'delivery/manifest.json'));
 if(m.assets.length!==spec.assets.length||new Set(m.assets.map(a=>a.id)).size!==m.assets.length)throw new Error('Missing/duplicate mobile assets');
 let brandMarks=0,tagged=0;
 for(const [i,a] of m.assets.entries()){
  const b=fs.readFileSync(resolve(a.file)),meta=await sharp(b).metadata(),s=spec.assets[i];
  require('./image-dimensions.cjs').dimensions('mobile',meta.width,meta.height);
  if(sha(b)!==a.sha256||b.length!==a.bytes||b.length>=profile.maxBytesExclusive||meta.width!==1200||meta.height!==900||meta.format!=='png'||meta.space!=='srgb'||meta.hasAlpha||meta.density!==72)throw new Error('Image technical mismatch: '+a.id);
  const xml=meta.xmp?.toString()||'',validTag=/<dc:subject>\s*<rdf:Bag>\s*<rdf:li>contains-synthetic-performer<\/rdf:li>\s*<\/rdf:Bag>\s*<\/dc:subject>/.test(xml);
  if(validTag!==!!s.containsSyntheticPerson||validTag!==a.xmpSyntheticPerformer)throw new Error('AI-person metadata mismatch: '+a.id);if(validTag)tagged++;
  if(a.altText!==s.altText||a.altText.length<1||a.altText.length>100)throw new Error('Alt-text mismatch: '+a.id);
  for(const t of a.textLayers)if(t.size<profile.typography.minimumEmbeddedPx||t.displayPxAt360<12.6||t.width>t.maxWidth+.1)throw new Error('Mobile typography mismatch: '+a.id);
  const old=desktop.assets.find(d=>d.file===a.sourceDesktop),raw=fs.readFileSync(resolve(a.sourceDesktop));
  const expected=spec.sourceOverrides?.[a.sourceDesktop]?old?.previousSha256:old?.sha256;
  if(!old||!expected||sha(raw)!==expected||a.sourceDesktopSha256!==expected)throw new Error('Desktop original changed: '+a.id);
  brandMarks+=a.standaloneBrandMarks;
 }
 if(brandMarks!==1)throw new Error('Expected one standalone brand-logo layer in this set');
 for(const s of m.sources)if(sha(fs.readFileSync(resolve(s.file)))!==s.sha256)throw new Error('Source hash mismatch: '+s.file);
 const canonical=JSON.stringify(m.assets.map(a=>({id:a.id,file:a.file,sha256:a.sha256,altText:a.altText})));
 const rawPixelHashes=[];for(const a of m.assets)rawPixelHashes.push({id:a.id,sha256:sha(await sharp(fs.readFileSync(resolve(a.file))).removeAlpha().raw().toBuffer())});
 return {state:'FILE_AND_METADATA_CHECKS_PASSED',images:m.assets.length,canvas:[1200,900],largestBytes:Math.max(...m.assets.map(a=>a.bytes)),minimumEmbeddedFontPx:Math.min(...m.assets.flatMap(a=>a.textLayers.map(t=>t.size))),standaloneBrandMarks:brandMarks,taggedHandScenes:tagged,altTextCharacters:m.assets.map(a=>({id:a.id,length:a.altText.length})),desktopOriginalsUnchanged:m.assets.length,manifestAssetDigest:sha(Buffer.from(canonical)),rawPixelHashes,visualReview:'SEPARATE',amazonUpload:'NOT_PERFORMED',amazonPublication:'NOT_PERFORMED'};
}
module.exports={validate};
if(require.main===module){validate(path.resolve(process.argv[2])).then(r=>{if(process.argv[3])fs.writeFileSync(path.resolve(process.argv[3]),JSON.stringify(r,null,2)+'\n');console.log(JSON.stringify(r,null,2));}).catch(e=>{console.error(e);process.exitCode=1;});}
