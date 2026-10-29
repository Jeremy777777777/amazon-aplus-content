const fs=require('node:fs'),path=require('node:path');
if(!process.argv[2])throw Error('Usage: node scripts/write-mobile-delivery.cjs <design.json> [verified-drive-ledger.json]');
const specPath=path.resolve(process.argv[2]),s=JSON.parse(fs.readFileSync(specPath,'utf8')),root=path.resolve(path.dirname(specPath),s.productRoot||'..');
const m=JSON.parse(fs.readFileSync(path.join(root,s.manifest),'utf8')),ledger=process.argv[3]?JSON.parse(fs.readFileSync(process.argv[3],'utf8')):null;
if(ledger&&(ledger.state!=='DRIVE_DELIVERY_VERIFIED'||ledger.productId!==s.productId))throw Error('Use the matching verified product ledger');
function url(file){const a=ledger?.files.find(x=>x.relativePath===file);if(ledger&&!a?.url)throw Error('Missing verified Drive URL: '+file);return a?.url||'../'+file;}
let copy='# '+s.productId+' · Mobile A+ 原生文字与上传字段\n\n设计：'+s.designId+'。按当前模块字段填写，制作说明不进入买家正文。\n\n';
for(const a of m.assets)copy+='## '+a.id+'\n\n图片：['+path.basename(a.file)+']('+url(a.file)+')\n\n**Body:** '+a.nativeBody+'\n\n**Alt text ('+a.altText.length+'/100):** '+a.altText+'\n\n上传处理：'+(a.containsSyntheticPerson?'含写实AI人物/手部；原PNG已嵌入contains-synthetic-performer，上传前复查保留。':'无人物，不添加AI-generated people人物标记。')+'\n\n';
fs.mkdirSync(path.join(root,'mobile'),{recursive:true});fs.writeFileSync(path.join(root,'mobile/copy.md'),copy.trimEnd()+'\n');
const min=Math.min(...m.assets.flatMap(a=>a.textLayers.map(t=>t.size)));
let gallery='# '+s.productId+' · Mobile A+ 图片\n\n设计：'+s.designId+'；版本日期：'+s.date+'。'+m.target.export.join('×')+'，sRGB PNG，单张<'+m.target.maxBytesExclusive+' bytes；最小嵌入字号'+min+'px（内部设计值）。\n\n'+(ledger?'图片链接指向已核对的Drive原文件。':'这是临时制作预览；正式交付必须上传Drive，并用核对后的Drive账本再次生成链接。')+'\n\n实际后台上传、整页手机预览和Amazon发布状态见当前产品记录；文件检查不代表后台审核通过。九张素材不承诺九个模块。\n\n| 图 | 手机原文件 | 大小 | AI人物标签 |\n|---|---|---|---|\n';
for(const a of m.assets)gallery+='| '+a.id+' | ['+path.basename(a.file)+']('+url(a.file)+') | '+(a.bytes/1000000).toFixed(2)+' MB | '+(a.xmpSyntheticPerformer?'已嵌入':'不适用')+' |\n';
gallery+='\n';for(const a of m.assets)gallery+='## '+a.id+'\n\n![图'+a.id+']('+url(a.file)+')\n\n'+a.nativeBody+'\n\n';
fs.writeFileSync(path.join(root,'delivery/mobile.md'),gallery.trimEnd()+'\n');console.log('Temporary mobile copy/gallery written; upload to Drive and verify new bytes before marking current.');
