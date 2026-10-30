const fs=require('node:fs');
const policy=require('../assets/image-dimensions-policy.json');
function dimensions(kind,width,height,options={}){
 const target=policy.targets[kind];
 const minimum=options.minimum||target?.minimum;
 const evidence=options.evidence||target?.evidence;
 if(!minimum||!evidence||minimum.length!==2||!minimum.every(n=>Number.isInteger(n)&&n>0))throw Error('Applicable observed minimum and evidence required');
 const [mw,mh]=minimum,k=width/mw;
 if(!Number.isInteger(width)||!Number.isInteger(height)||!Number.isInteger(k)||k<1||height!==mh*k)throw Error('A+ dimensions must equal the same positive integer times both minimum axes');
 const expected=options.multiplier??policy.defaultMultiplier;
 if(!Number.isInteger(expected)||expected<1||k!==expected)throw Error('A+ export differs from requested multiplier (default 2)');
 return{minimum,multiplier:k,width,height,evidence};
}
function pngDimensions(bytes){if(bytes.length<24||bytes.subarray(0,8).toString('hex')!=='89504e470d0a1a0a')throw Error('Expected PNG');return[bytes.readUInt32BE(16),bytes.readUInt32BE(20)];}
module.exports={dimensions,pngDimensions};
if(require.main===module){const [kind,file,k]=process.argv.slice(2);console.log(JSON.stringify(dimensions(kind,...pngDimensions(fs.readFileSync(file)),k?{multiplier:Number(k)}:{})));}
