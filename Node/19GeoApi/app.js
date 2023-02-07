const getallusers = require('./getallusers')


getallusers.getUsers("Ahmedabad,gujarat").then(result=>{
    // console.log("called res");
    console.log(result);
})


// const getLatlng = async()=>{
//     const result = await  
// }
