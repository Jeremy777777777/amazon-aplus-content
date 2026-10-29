const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const hash=(b,a='sha256')=>crypto.createHash(a).update(b).digest('hex');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const inside=(p,r)=>p===r||p.startsWith(r+path.sep);
function safe(root,rel){if(path.isAbsolute(rel)||rel.split(/[\\/]/).includes('..'))throw Error('Unsafe relative path');const p=path.resolve(root,rel);if(!inside(p,root))throw Error('Path escapes root');return p;}
function route(rel){
 if(/^shared\/assets\//.test(rel))return{role:'images',path:'DESKTOP/'+rel.slice('shared/assets/'.length)};
 if(/^premium\/assets\/mobile\//.test(rel))return{role:'images',path:'MOBILE/'+rel.slice('premium/assets/mobile/'.length)};
 if(/^(basic|premium)\/assets\//.test(rel))return{role:'images',path:'DESKTOP/'+rel};
 if(/^review\//.test(rel)||(/^delivery\//.test(rel)&&/\.json$/.test(rel)))return{role:'qa',path:rel};
 if(rel==='reference-analysis.md'||/^source\//.test(rel))return{role:'research',path:rel};
 if(/^shared\/source\//.test(rel)||/^mobile\/(design|brand-context)\.json$/.test(rel))return{role:'source',path:rel};
 if(/^(basic|premium|mobile|video|delivery)\//.test(rel)||['project.md','design-plan.md'].includes(rel))return{role:'listing',path:rel};
 throw Error('Classify new file role explicitly: '+rel);
}
const mime=rel=>({'.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.md':'text/markdown','.json':'application/json','.txt':'text/plain','.srt':'text/plain','.cjs':'text/javascript','.py':'text/x-python'})[path.extname(rel).toLowerCase()]||'application/octet-stream';
function privacy(bytes,rel,known){
 if(/\.(png|jpe?g|webp|pdf|xlsx)$/i.test(rel))return;
 const text=bytes.toString('utf8');
 if(/(?:[?&](?:sig|signature|access_token|token|X-Amz-Signature|X-Goog-Signature)=)|(?:Bearer\s+[A-Za-z0-9._-]{16,})|(?:-----BEGIN [A-Z ]*PRIVATE KEY-----)/i.test(text))throw Error('Sensitive/signed content in '+rel);
 for(const v of known)if(v&&text.toLowerCase().includes(v.toLowerCase()))throw Error('Known private serial in '+rel);
}
function plan(root,productId,marketplace,runId,known=[]){
 root=path.resolve(root);if(!/^[A-Z][A-Z0-9]*-[0-9]+$/.test(productId)||!/^RUN-[A-Z0-9-]+$/.test(runId)||!/^[A-Z]{2}$/.test(marketplace))throw Error('Invalid identity');
 const files=[];function visit(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isSymbolicLink())throw Error('Symlink in delivery');if(e.isDirectory())visit(p);else{const rel=path.relative(root,p).split(path.sep).join('/');if(/(?:^|\/)(?:node_modules|\.git|__pycache__)(?:\/|$)|\.(?:zip|pyc|env)$/i.test(rel))throw Error('Excluded cache/private archive in delivery');const b=fs.readFileSync(p),dest=route(rel);privacy(b,rel,known);files.push({relativePath:rel,name:path.posix.basename(rel),...dest,mimeType:mime(rel),bytes:b.length,sha256:hash(b),md5:hash(b,'md5')});}}}visit(root);files.sort((a,b)=>a.relativePath.localeCompare(b.relativePath));
 return{schemaVersion:1,productId,marketplace,runId,scope:'STORAGE_MIGRATION_OR_DELIVERY_ONLY_NO_NEW_FACTUAL_OR_STYLE_APPROVAL',privacy:{knownSerialInventoryProvided:known.length>0,noRawSerialUsedWhenEmpty:'Caller must verify this assertion; this task reused sanitized A+ inputs without serials.'},files};
}
function verify(p,r,folders){
 const policy=read(path.join(__dirname,'../assets/delivery-storage.json')),rows=r.files||r,byId=new Map(folders.map(f=>[f.id,f])),used=new Set(),verified=[];
 if(rows.length!==p.files.length)throw Error('Missing/extra readbacks');
 for(const f of p.files){const a=rows.find(x=>x.relativePath===f.relativePath);if(!a||used.has(a.id))throw Error('Missing/duplicate file '+f.relativePath);used.add(a.id);
 if(a.name!==f.name||a.mimeType!==f.mimeType||Number(a.size)!==f.bytes||a.sha256!==f.sha256||a.originalBytesDownloaded!==true||!a.readBackAtUtc)throw Error('Byte/name/type mismatch '+f.relativePath);
 let id=a.parents?.[0],hops=0,chain=[];if(a.parents.length!==1)throw Error('Ambiguous parent');while(id!==policy.projectRootId){const n=byId.get(id);if(!n||n.parents?.length!==1||++hops>30)throw Error('Unverified parent chain');chain.push(n.name);id=n.parents[0];}if(!chain.includes(p.productId)||!chain.includes('20_PRODUCTS')||!chain.includes(policy.roles[f.role].split('/')[0]))throw Error('Wrong product/role');
 const below=chain.slice(0,chain.indexOf(p.productId)).reverse(),expected=(f.role==='research'?['03_RESEARCH','FINAL']: [policy.roles[f.role].split('/')[0]]).concat(['APLUS',p.marketplace],path.posix.dirname(f.path)==='.'?[]:path.posix.dirname(f.path).split('/'));
 if(JSON.stringify(below)!==JSON.stringify(expected))throw Error('Wrong role path '+f.relativePath);
 verified.push({relativePath:f.relativePath,id:a.id,name:a.name,parents:a.parents,mimeType:a.mimeType,bytes:f.bytes,sha256:a.sha256,url:a.url,readBackAtUtc:a.readBackAtUtc,method:'AUTHENTICATED_ORIGINAL_DOWNLOAD_SHA256'});
 }
 return{schemaVersion:1,productId:p.productId,marketplace:p.marketplace,runId:p.runId,state:'DRIVE_DELIVERY_VERIFIED',fileCount:verified.length,totalBytes:p.files.reduce((n,f)=>n+f.bytes,0),files:verified,factualReview:'UNCHANGED_EXISTING_LIMITATIONS',styleApproval:'UNCHANGED_PRODUCT_SCOPE',amazonPublication:'NOT_PERFORMED',receiptSelfUpload:'VERIFY_SEPARATELY'};
}
function restore(p,ledger,downloadDir,root){root=path.resolve(root);downloadDir=path.resolve(downloadDir);for(const f of p.files){const row=ledger.files.find(a=>a.relativePath===f.relativePath);if(!row)throw Error('Missing ledger row');const b=fs.readFileSync(safe(downloadDir,row.id));if(hash(b)!==f.sha256)throw Error('Downloaded hash mismatch');const out=safe(root,f.relativePath);fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,b);}return{restored:p.files.length};}
module.exports={plan,verify,restore,route,privacy};
if(require.main===module){const [cmd,...a]=process.argv.slice(2);let result;if(cmd==='plan')result=plan(a[0],a[1],a[2],a[3],a[5]?read(a[5]):[]);else if(cmd==='verify')result=verify(read(a[0]),read(a[1]),read(a[2]));else if(cmd==='restore')result=restore(read(a[0]),read(a[1]),a[2],a[3]);else throw Error('Use plan, verify or restore; see references/google-drive-delivery.md');const out=cmd==='plan'?a[4]:cmd==='verify'?a[3]:null;if(out)fs.writeFileSync(out,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(out?{state:result.state||'PLAN_CREATED',fileCount:result.files.length}:result));}
