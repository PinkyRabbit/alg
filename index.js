const random = require('./sort/random');
const quick = require('./sort/quick');
const merge = require('./sort/merge');
const shell = require('./sort/shell');

const arr = random(10);



console.log('--------');
console.log(arr);
console.log('quick:');
console.log(quick(arr));
console.log('merge:');
console.log(merge(arr));
console.log('shell:');
console.log(shell(arr));
