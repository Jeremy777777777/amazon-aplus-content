/* Portable source-preserving export. Run with Node, sharp and @napi-rs/canvas. */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const sharp = require('sharp');
const { createCanvas, loadImage, GlobalFonts } = require('@napi-rs/canvas');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'premium/assets/mobile');
const qa = path.resolve(process.argv[2] || path.join(root, 'review/mobile-preview-cache'));
const fontDir = process.env.APLUS_FONT_DIR || 'C:/Windows/Fonts';
for (const [file, family] of [['arial.ttf', 'Aplus'], ['arialbd.ttf', 'Aplus Bold']]) {
  if (!GlobalFonts.registerFromPath(path.join(fontDir, file), family)) throw new Error('Required Arial font unavailable; set APLUS_FONT_DIR.');
}
const W=1200,H=900,NAVY='#09244A',BLUE='#0876DD';
const hash = b => crypto.createHash('sha256').update(b).digest('hex');
const records=[], sources=new Map();
let c,g,texts,photos;
async function input(rel) {
  const b=fs.readFileSync(path.join(root,rel)); sources.set(rel,{file:rel,bytes:b.length,sha256:hash(b)}); return b;
}
async function image(rel, box=null) {
  let s=sharp(await input(rel)); if(box) s=s.extract({left:box[0],top:box[1],width:box[2],height:box[3]});
  return loadImage(await s.png().toBuffer());
}
function text(s,x,y,size,max=1100,color=NAVY,bold=false,align='left') {
  g.font=`${size}px "${bold?'Aplus Bold':'Aplus'}"`; g.fillStyle=color; g.textAlign=align; g.textBaseline='top';
  const width=g.measureText(s).width;
  if(width>max+0.1) throw new Error(`Text overflow ${s}: ${width} > ${max}`);
  g.fillText(s,x,y); texts.push({text:s,x,y,fontPx:size,width,maxWidth:max,bold,color,align});
}
function lines(a,x,y,size,gap,max,color=NAVY,bold=false){a.forEach((s,i)=>text(s,x,y+i*gap,size,max,color,bold));}
function box(x,y,w,h,color='#EDF6FE',r=24){g.fillStyle=color;g.beginPath();g.roundRect(x,y,w,h,r);g.fill();}
function base(){
  c=createCanvas(W,H);g=c.getContext('2d');texts=[];photos=[];
  g.fillStyle='white';g.fillRect(0,0,W,H);
  let gr=g.createLinearGradient(0,900,1200,80);gr.addColorStop(0,'#E5F3FF');gr.addColorStop(.6,'#FFFFFF');gr.addColorStop(1,'#F2F8FF');g.fillStyle=gr;g.fillRect(0,0,W,H);
  g.fillStyle='#DBEEFF';g.beginPath();g.moveTo(0,830);g.bezierCurveTo(400,900,900,660,1200,600);g.lineTo(1200,900);g.lineTo(0,900);g.fill();
}
let logo,angle,front,rear;
async function init(){
  // Remove only the neutral backdrop of the existing approved Dell source, retaining original blue pixels.
  const raw=await sharp(await input('shared/source/dell-logo.png')).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  for(let i=0;i<raw.data.length;i+=4){const r=raw.data[i],b=raw.data[i+2],v=raw.data[i+1]; if(b-r<25||v-r<12)raw.data[i+3]=0;}
  logo=await loadImage(await sharp(raw.data,{raw:raw.info}).png().toBuffer());
  // Existing transparent original product references: crop alpha bounds only; never redraw hardware.
  angle=await loadImage(await sharp(await input('shared/source/dell-qcm1250-angle.png')).trim({background:'#00000000',threshold:5}).png().toBuffer());
  front=await loadImage(await sharp(await input('shared/source/dell-qcm1250-front.png')).trim({background:'#00000000',threshold:5}).png().toBuffer());
  rear=await loadImage(await sharp(await input('shared/source/dell-qcm1250-rear.png')).trim({background:'#00000000',threshold:5}).png().toBuffer());
}
function header(){g.drawImage(logo,48,30,100,100);text('DELL PRO MICRO QCM1250',175,66,30,960,NAVY,true);}
function product(im,x,y,h){let w=h*im.width/im.height;g.save();g.shadowColor='#0D264B35';g.shadowBlur=20;g.shadowOffsetY=12;g.drawImage(im,x,y,w,h);g.restore();photos.push({source:'shared/source/original-product',x,y,width:w,height:h,proportionPreserved:true});return w;}
async function photo(file,crop,x,y,w){const im=await image('shared/assets/'+file,crop),h=w*im.height/im.width;g.save();g.beginPath();g.roundRect(x,y,w,h,20);g.clip();g.drawImage(im,x,y,w,h);g.restore();photos.push({source:'shared/assets/'+file,crop,x,y,width:w,height:h,proportionPreserved:true});}
async function save(file,source,description){
  const desktopBytes=await input('shared/assets/'+source);
  const b=await sharp(c.toBuffer('image/png')).flatten({background:'#FFFFFF'}).toColourspace('srgb').withMetadata({density:72}).png({compressionLevel:9,adaptiveFiltering:true}).toBuffer();
  const meta=await sharp(b).metadata();if(meta.width!==W||meta.height!==H||b.length>=2000000||meta.hasAlpha)throw new Error('Upload technical gate failed: '+file);
  fs.writeFileSync(path.join(out,file),b);
  const small=await sharp(b).resize(400,300).png().toBuffer();fs.writeFileSync(path.join(qa,file),small);
  records.push({id:file.split('-')[0],file:'premium/assets/mobile/'+file,sourceDesktop:'shared/assets/'+source,sourceDesktopSha256:hash(desktopBytes),width:W,height:H,bytes:b.length,sha256:hash(b),format:'PNG',colorSpace:'sRGB',density:72,hasAlpha:false,role:description,textLayers:texts,sourceLayers:photos,status:'TECHNICAL_CHECK_PASSED_VISUAL_REVIEW_RECORDED_SEPARATELY'});
}
async function main(){
fs.mkdirSync(out,{recursive:true});fs.mkdirSync(qa,{recursive:true});await init();
// 01. Same main message, original product and original OEM mark.
base();header();text('Make Room for',48,190,72,785,NAVY,true);text('What Matters.',48,280,72,785,BLUE,true);
lines(['Compact design.','Focused workspace.'],52,420,37,49,680);product(angle,835,180,650);
await save('01-hero-mobile.png','01-hero-v1.png','Product hero');
// 02. Preserve the approved practical-access photograph as a frozen crop.
base();header();text('Connections Within Reach.',48,151,66,1110,NAVY,true);text('Front-panel access for everyday devices.',50,237,34,1100);
await photo('02-workday-v1.png',[830,0,1340,725],180,290,840);
text('USB-A',170,754,34,220,BLUE,true);text('USB-C',535,754,34,220,BLUE,true);text('Headset jack',850,754,34,300,BLUE,true);
lines(['Illustrative use. USB drive and','accessories not included.'],48,808,34,40,1110);
await save('02-workday-mobile.png','02-workday-v1.png','Front-panel access');
// 03. Exact facts and qualifiers are deterministic text, not generated lettering.
base();header();lines(['20-Core','Processing.'],48,160,74,88,740,NAVY,true);text('Intel Core Ultra 7 265T',50,356,39,750);
for(const [x,val,label] of [[50,'20','TOTAL CORES'],[290,'8P + 12E','CORE DESIGN'],[610,'5.3 GHz','MAX TURBO']]){
  if(x===610)text('Up to',x,453,34,230);text(val,x,495,x===50?80:53,290,BLUE,true);text(label,x,577,30,290,NAVY,true);
}
product(angle,902,185,600);
lines(['For everyday office applications','and multitasking.'],50,687,35,46,1080);
lines(['Maximum single-core turbo frequency.','Actual performance varies.'],48,803,34,40,1110);
await save('03-business-mobile.png','03-business-v1.png','Processor specifications');
// 04. Seven cards retain all existing content; Windows visual is an exact original source crop.
base();header();text('Your PC, at a Glance.',48,151,73,1110,NAVY,true);
box(48,265,538,145);text('Intel Core Ultra 7',72,287,35,490,NAVY,true);text('265T',72,335,54,490,BLUE,true);
box(610,265,542,145);text('USB-A + USB-C',638,308,43,490,NAVY,true);
box(48,430,1104,130);const win=await image('shared/assets/04-home-office-v1.png',[1270,200,872,215]);g.drawImage(win,338,434,520,128);photos.push({source:'shared/assets/04-home-office-v1.png',crop:[1270,200,872,215],purpose:'Original Windows visual and edition lockup'});
box(48,580,538,160);text('Up to 64GB',72,599,46,490,BLUE,true);text('DDR5 RAM OPTIONS',72,664,31,490,NAVY,true);
box(610,580,542,160);text('Up to 4TB',638,599,46,490,BLUE,true);text('SSD STORAGE OPTIONS',638,664,31,490,NAVY,true);
text('Wi-Fi',65,755,35,500,BLUE,true);text('Bluetooth',625,755,35,500,BLUE,true);
lines(['RAM and SSD options vary by selection.','Confirm your configuration before ordering.'],48,815,34,39,1110);
await save('04-home-office-mobile.png','04-home-office-v1.png','Complete specification overview');
// 05. Native front/rear reference pixels; wireless remains an explanatory list item.
base();header();lines(['Connections','You Can See.'],48,160,73,85,1110,NAVY,true);product(front,105,375,420);product(rear,285,375,420);
text('Front',100,811,30,180,NAVY,true);text('Rear',310,811,30,180,NAVY,true);
lines(['USB-A + USB-C','HDMI + DisplayPort','Ethernet','Wi-Fi + Bluetooth'],530,398,35,75,625,NAVY,true);text('Everyday desk workflows',530,739,31,625);
await save('05-connections-mobile.png','05-connections-v1.png','Front and rear connectivity');
// 06. The two groups are independent choices, not paired bundles.
base();header();lines(['Customize Your','Configuration'],48,151,70,82,1110,NAVY,true);
product(angle,1020,148,175);
text('Choose the RAM and SSD options for your needs.',50,342,32,1100);
for(const [y,label,values] of [[424,'DDR5 RAM OPTIONS',['8GB','16GB','32GB','64GB']],[605,'SSD STORAGE OPTIONS',['0.5TB','1TB','2TB','4TB']]]){
  text(label,50,y,30,1100,BLUE,true);
  values.forEach((v,i)=>{box(48+i*280,y+48,264,95,'#E6F2FE',14);text(v,180+i*280,y+73,43,250,NAVY,true,'center');});
}
lines(['Seller-configurable options. Confirm your selected','RAM and SSD combination before ordering.'],48,807,34,40,1110);
await save('06-configuration-mobile.png','06-configuration-v1.png','Seller RAM and SSD choices');
// 07. New labels use inches; original mm values stay in source evidence.
base();header();text('Small Size.',48,151,65,1110,NAVY,true);text('More Desk Space.',48,226,65,1110,BLUE,true);
await photo('pt07.png',[820,0,1351,724],220,310,760);
for(const [x,label,val] of [[85,'HEIGHT','7.17 in'],[475,'WIDTH','1.42 in'],[865,'DEPTH','7.01 in']]){text(label,x,736,30,280,NAVY,true);text(val,x,775,40,280,BLUE,true);}
lines(['Monitor, keyboard and mouse shown for scale.','Not included.'],48,829,32,36,1110);
await save('pt07-mobile.png','pt07.png','Office scale and inch dimensions');
// 08. Crop preserves exact existing hand/product pose and avoids generated hardware.
base();header();text('Compact by Design.',48,151,74,1110,NAVY,true);text('See the Micro Form Up Close.',50,248,37,1100);
await photo('pt08.png',[930,80,1240,645],70,330,1060);
await save('pt08-mobile.png','pt08.png','Compact form in hand');
// 09. Preserve the approved task photograph, without adding software entitlements.
base();header();text('Ready for Your Workday.',48,151,68,1110,NAVY,true);
text('Documents',50,244,36,350,BLUE,true);text('Spreadsheets',437,244,36,380,BLUE,true);text('Web browsing',839,244,36,330,BLUE,true);
await photo('pt09.png',[760,0,1412,724],110,304,980);
lines(['Illustrative workspace. Monitor, keyboard and','mouse not included.'],48,821,32,38,1110);
await save('pt09-mobile.png','pt09.png','Everyday office tasks');
const manifest={schemaVersion:1,productId:'VD-744',asin:'B0HMY74CHD',marketplace:'US',date:'2026-10-29',baselineCommit:'706c3f64f4c004e66fe593549a3f2edc3875c59c',scope:'Nine mobile derivatives; existing desktop masters and buyer copy preserved.',target:{observedMobileMinimum:[600,450],observedDesktopMinimum:[1464,600],evidence:'User-supplied Seller Central screenshot 2026-10-29; no account-side upload/preview claimed.',export:[1200,900],maxBytesExclusive:2000000},production:'Original source hardware and frozen approved scene crops, original Dell source mark, deterministic text and layout. Imagegen mobile candidates were explored but not promoted as product/text layers.',font:'Arial regular/bold; supply local Arial TTFs via APLUS_FONT_DIR for rebuild.',assets:records,sources:[...sources.values()],knownLimitations:['Technical conformance is not Amazon moderation approval.','Screenshot establishes the shown image field only, not every module or account entitlement.','Nine assets do not establish nine available A+ modules.','Scene photographs retain existing illustrative/accessory/scale limitations.','No new current-unit configuration research or physical inspection.'],amazonUpload:'NOT_PERFORMED',amazonPublication:'NOT_PERFORMED',style:'Existing approved direction reused at user request; mobile derivatives are not described as separately user-reviewed.'};
fs.writeFileSync(path.join(root,'delivery/mobile-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
let grid=createCanvas(1200,900),gg=grid.getContext('2d');gg.fillStyle='white';gg.fillRect(0,0,1200,900);
for(let i=0;i<records.length;i++)gg.drawImage(await loadImage(path.join(qa,path.basename(records[i].file))),(i%3)*400,Math.floor(i/3)*300,400,300);
fs.writeFileSync(path.join(qa,'contact-sheet.png'),grid.toBuffer('image/png'));
console.log(JSON.stringify({count:records.length,dimensions:[W,H],largestBytes:Math.max(...records.map(r=>r.bytes)),manifest:'delivery/mobile-manifest.json',qa},null,2));
}
main().catch(e=>{console.error(e);process.exitCode=1;});
