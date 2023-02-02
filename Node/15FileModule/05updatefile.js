var fs = require('fs');

fs.appendFile('mynewfile2.txt', ' data.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
