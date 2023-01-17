var util = require('util');
var txt = 'Congratulate to %s for %dth years success journey!';
var result = util.format(txt, 'TOPS', 15);

console.log(result);