const random = require('./random');
const quick = require('./quick');
const merge = require('./merge');
const shell = require('./shell');

const arr = random(10);



console.log('--------');
console.log(arr);
console.log('quick:');
console.log(quick(arr));
console.log('merge:');
console.log(merge(arr));
console.log('shell:');
console.log(shell(arr));
