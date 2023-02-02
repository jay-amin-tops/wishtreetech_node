function info(data) {
    console.log("info called",data);
}
function info1(data) {
    console.log("info called",data);
}
var log = {

    info:function (info){
        console.log("info called",info);
    },
    warning:function (warning){
        console.log("warning called",warning);
    },
    error:function (error){
        console.log("error called",error);
    }
    // info: (info)=>console.log("info called",info)
    // info: (info)=>{console.log("info called",info); return "test"}
}
// console.log(log);
// module.exports =  log.info 
module.exports =  log.info 
// module.exports =  {info,info1}
// var log = {
//     key:value
// }

// In the above example of logging module, we have created an object with three functions - info(), warning() and error(). At the end, we have assigned this object to module.exports. The module.exports in the above example exposes a log object as a module.