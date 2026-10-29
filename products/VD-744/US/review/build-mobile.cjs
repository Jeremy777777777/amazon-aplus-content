/* Compatibility entry point. Independent mobile design: ../mobile/design.json. */
const path=require('node:path');
const {render}=require('../../../../scripts/render-mobile-aplus.cjs');
render(path.resolve(__dirname,'../mobile/design.json'),process.argv[2]&&path.resolve(process.argv[2]))
 .then(m=>console.log(JSON.stringify({images:m.assets.length,design:m.designId,largestBytes:Math.max(...m.assets.map(a=>a.bytes))},null,2)))
 .catch(e=>{console.error(e);process.exitCode=1;});
