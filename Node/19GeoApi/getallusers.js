const axios = require("axios");

const getUsers = (city)=>{
    return new Promise((resolve,reject)=>{
        const url = `http://localhost/api/allusers`;
        axios.get(url).then(result=>{
            // console.log(result);
            // console.log(result.data);
            console.log(result.data.Data);
            // resolve({lng:lng,lat:lat})
        }).catch(err=>{
            reject(err)
        })
    })
} 


module.exports = {getUsers}