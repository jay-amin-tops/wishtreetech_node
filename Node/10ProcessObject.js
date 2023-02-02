// console.log(process);

process.stdout.write('Hello World!' + '\n');
console.log(process.argv);

process.argv.forEach(function(val, index, array) {
	console.log(index + ': ' + val);
});