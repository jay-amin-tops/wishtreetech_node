const axios = require("axios");

const getGeoData = (city)=>{
    return new Promise((resolve,reject)=>{
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;
        axios.get(url).then(result=>{
            // console.log(result.data);
            // console.log(result.data.results[0]);
            const data = result.data.results[0];
            console.log(data.geometry);
            const lat = data.geometry.lat;
            const lng = data.geometry.lng;
            resolve({lng:lng,lat:lat})
        }).catch(err=>{
            reject(err)
        })
    })
} 

// function one(x) {
//     console.log(x);
// }
// function two(clbk) {
//     let ab = "ab"
//     clbk(ab)
// }
// two(one)
module.exports = {getGeoData}