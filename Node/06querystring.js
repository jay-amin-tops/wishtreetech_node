var querystring = require('querystring');
var q = querystring.parse('year=2023&month=february');
console.log(q.year);