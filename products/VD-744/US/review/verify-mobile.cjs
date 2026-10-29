const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process'),crypto=require('node:crypto');
const {validate}=require('../../../../scripts/validate-mobile-aplus.cjs');
const root=path.resolve(__dirname,'..'),repo=path.resolve(root,'../../..'),sha=b=>crypto.createHash('sha256').update(b).digest('hex');
async function main(){
 const result=await validate(path.join(root,'mobile/design.json'));
 if(process.argv.includes('--remote')){
  const m=JSON.parse(fs.readFileSync(path.join(root,'delivery/mobile-manifest.json')));
  for(const a of m.assets){const b=cp.execFileSync('git',['show','origin/main:products/VD-744/US/'+a.file],{cwd:repo,maxBuffer:10000000});if(sha(b)!==a.sha256)throw new Error('Remote image mismatch '+a.id);}
  for(const file of ['delivery/mobile-manifest.json','mobile/design.json']){
   const b=cp.execFileSync('git',['show','origin/main:products/VD-744/US/'+file],{cwd:repo,maxBuffer:10000000});
   if(JSON.stringify(JSON.parse(b))!==JSON.stringify(JSON.parse(fs.readFileSync(path.join(root,file)))))throw new Error('Remote recipe/manifest mismatch');
  }
  result.remoteBytes='MATCH';
 }else result.remoteBytes='NOT_CHECKED';
 console.log(JSON.stringify(result,null,2));
}
main().catch(e=>{console.error(e);process.exitCode=1;});
