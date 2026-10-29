const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),cp=require('node:child_process'),sharp=require('sharp');
const root=path.resolve(__dirname,'..'),repo=path.resolve(root,'../../..');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
async function main(){
 const m=JSON.parse(fs.readFileSync(path.join(root,'delivery/mobile-manifest.json')));
 const desktop=JSON.parse(fs.readFileSync(path.join(root,'delivery/manifest.json')));
 if(m.assets.length!==9||new Set(m.assets.map(a=>a.file)).size!==9)throw new Error('Expected exactly nine unique mobile files');
 const remote=process.argv.includes('--remote');
 for(const a of m.assets){
  const b=fs.readFileSync(path.join(root,a.file)),im=await sharp(b).metadata();
  if(sha(b)!==a.sha256||b.length!==a.bytes||b.length>=2000000||im.format!=='png'||im.width!==1200||im.height!==900||im.space!=='srgb'||im.hasAlpha||im.density!==72)throw new Error('Mobile bytes/metadata mismatch '+a.file);
  const old=desktop.assets.find(v=>v.file===a.sourceDesktop),oldBytes=fs.readFileSync(path.join(root,a.sourceDesktop));
  if(!old||sha(oldBytes)!==old.sha256||old.sha256!==a.sourceDesktopSha256)throw new Error('Desktop baseline changed '+a.sourceDesktop);
  for(const t of a.textLayers)if(t.width>t.maxWidth+.1||t.y<0||t.y+t.fontPx>900||t.x<0)throw new Error('Text bounds issue '+a.file);
  if(remote){
   const r=cp.execFileSync('git',['show','origin/main:products/VD-744/US/'+a.file],{cwd:repo,maxBuffer:10000000});
   if(sha(r)!==a.sha256)throw new Error('Fetched remote image mismatch '+a.file);
  }
 }
 for(const s of m.sources)if(sha(fs.readFileSync(path.join(root,s.file)))!==s.sha256)throw new Error('Source changed '+s.file);
 for(const f of ['mobile-manifest.json','mobile.md']){
  if(remote){const rel='products/VD-744/US/delivery/'+f,b=cp.execFileSync('git',['show','origin/main:'+rel],{cwd:repo,maxBuffer:10000000});if(!b.equals(fs.readFileSync(path.join(root,'delivery',f))))throw new Error('Remote delivery mismatch '+f);}
 }
 console.log(JSON.stringify({images:9,dimensions:[1200,900],maxBytes:Math.max(...m.assets.map(a=>a.bytes)),desktopMastersUnchanged:9,sourceHashes:'MATCH',remoteBytes:remote?'MATCH':'NOT_CHECKED',visualAndAmazonReview:'Separate from this structural verification'},null,2));
}
main().catch(e=>{console.error(e);process.exitCode=1;});
