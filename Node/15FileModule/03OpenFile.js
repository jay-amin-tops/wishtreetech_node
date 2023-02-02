const fs = require('fs');
// First I want to read the file
fs.readFile('mynewfile2.txt', function read(err, data) {
    // fs.open('<directory>', 'r+', (err, fd) =>  {
    //     // r+ is the flag that tells fd to open it in read + write mode.
    //     // list of all flags available: https://nodejs.org/api/fs.html#fs_file_system_flags
    //     // read using fd:https://nodejs.org/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback
    //     // write using fd: https://nodejs.org/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback
    //     // close the flag: fs.close(fd);
    //     });
    if (err) {
        throw err;
    }
    console.log(data);   // Put all of the code here (not the best solution)
    const content = data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
    processFile(content);   // Or put the next step in a function and invoke it
});

function processFile(content) {
    console.log(content);
}

// var fs = require('fs');
// // fs.readFile('mynewf.txt','utf8', (err, data) => {
// //     console.log(data);
// //  })
// // fs.writeFile("mynewfile2.txt","content!",{flag:'r'},function (err) {
// //     if (err) throw err;
// //     console.log("called");
// // })
// fs.open("mynewfile2.txt",'r',function (err,data) {
//     // let Data = new Buffer(data, 'ascii').toString('utf8');

//     // console.log("Code",Data);
//     console.log(processFile(data));
//     if (err) throw err;
//     // if (err) {
//     //     console.log("Error",err);
//     // }else{
//     //     console.log("called");
//     // }
// })

// var fs = require('fs');
  
// // Use fs.readFile() method to read the file
// fs.readFile('mynewfile2.txt','utf8', (err, data) => {
//     console.log(data);
//  })