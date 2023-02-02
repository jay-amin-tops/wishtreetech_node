const yargs = require('yargs')

yargs.command('hello', '', (yargs) => {
        // yargs.positional('fname', {
        //     type: 'string',
        //     default: 'Cambi',
        //     describe: 'the name to say hello to'
        // })
        // console.log(yargs);
    }, function (argv) {
        console.log(argv);
        if (argv.fname == undefined || argv.lname == undefined ) {
            console.log("please enter ");
            
        } else {
            console.log("inside try");
            console.log('hello user input if ', argv.fname, 'welcome to yargs!')
        }
        // try {
        //     argv.fname
        // } catch (error) {
        //     console.log("called catch");
        // }
        // console.log('hello default value of name is ', argv.default, 'welcome to yargs!')
        // console.log('hello description', argv.describe)
    })
    .argv

    // console.log(yargs);