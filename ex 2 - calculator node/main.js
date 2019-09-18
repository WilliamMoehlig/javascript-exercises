//import common js file
const calc = require('./calc.cjs.js');

//retrieve arguments (skip first two arguments in array)
const val1 = process.argv[2];
const val2 = process.argv[3];

const result = calc.sum(val1, val2);

console.log(result);
