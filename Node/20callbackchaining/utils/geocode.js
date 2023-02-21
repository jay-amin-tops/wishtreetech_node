const request = require("request");


const geocode = (city,callback) =>{
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;

    request({url:url,json:true},(error,response)=>{
        if (error) {
            callback("error while fetching data from API ",undefined)
        }else{
            // console.log(response.body.results[0]);
            callback(undefined,{ data:response.body.results[0] })
            // callback(undefined,{ data: })
        }
    })

}


module.exports = geocode