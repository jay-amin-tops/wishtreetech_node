const geocode = require('./utils/geocode.js');
const foreacast = require('./utils/foreacast.js');

geocode("ahmedabad",(error,res)=>{
    if (error) {
        console.log(error);
    } else {
        // console.log("success",res.data.geometry.lat);
        // console.log("success",res.data.geometry.lng);
        foreacast(res.data.geometry.lat,res.data.geometry.lng,(error,data)=>{
            // console.log("error",error);
            // console.log("Success res",data.data[0]);
            console.log("Success res",data.data[0].values.temperature);
        })
    }
})
