// var async = require("async")
function square(x) {
    console.log("inside square");
    // return setTimeout(()=>{
    //     console.log("inside square setTimeout");
    //     resolve(Math.pow(x,2));
    // },2000)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("inside square setTimeout");
            resolve(Math.pow(x, 2));
        }, 2000)
    })
}

async function Output(data) {
    console.log("inside Output");
    const snd = await square(data)
    // const snd = square(data)
    console.log("after square Output", snd);
    console.log("something");

}
console.log("Output", Output(10));
