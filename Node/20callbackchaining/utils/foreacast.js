const request = require("request");


const geocode = (lat,longi,callback) =>{
    const url = `https://api.tomorrow.io/v4/timelines?location=${lat},${longi}&fields=temperature&timesteps=1h&units=metric&apikey=Tz0AZeecn0m5Wp8qH2fHX9CuDBfH0PCT`;

    request({url:url,json:true},(error,response)=>{
        if (error) {
            callback("error while fetching data from API ",undefined)
        }else{
            // console.log(response.body.data.timelines[0].intervals);
            callback(undefined,{ data:response.body.data.timelines[0].intervals })
            // callback(undefined,{ data: })
        }
    })

}


module.exports = geocode