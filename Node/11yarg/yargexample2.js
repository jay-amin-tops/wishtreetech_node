const yargs = require('yargs')
   
// Customize yargs version
yargs.version('1.1.0')
   
// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds two number',
    builder: {
        firstNumber: {
            describe: 'First Number',
            demandOption: true,  // Required
            type: 'number', 
            default:10
        },
        secondNumber: {  
            describe: 'Second Number',
            demandOption: true,
            type: 'number',
            default:10
        }
    },
  
    // Function for your command
    handler(argv) {
        console.log(argv);
        // console.log("output");
        console.log("Result:", 
            (argv.firstNumber+argv.secondNumber))
    }
})
// .help()
// .argv
// console.log(yargs);  

yargs.parse() // To set above changes