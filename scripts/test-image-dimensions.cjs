const assert=require('node:assert/strict'),{dimensions}=require('./image-dimensions.cjs');
assert.equal(dimensions('desktop',2928,1200).multiplier,2);
assert.equal(dimensions('mobile',1200,900).multiplier,2);
for(const [w,h] of [[2929,1200],[2928,1201],[3000,1200],[1464,600],[4392,1800],[2928,1800]])assert.throws(()=>dimensions('desktop',w,h));
assert.equal(dimensions('desktop',4392,1800,{multiplier:3}).multiplier,3);
assert.throws(()=>dimensions('unknown',1200,900));
assert.equal(dimensions('other',1940,600,{minimum:[970,300],evidence:'Observed other module'}).multiplier,2);
console.log('A+ integer multiple and default-2 tests passed');
