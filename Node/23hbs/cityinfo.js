const axios = require("axios");

function getCityInfo(city) {
  return new Promise(async (resolve, reject) => {
    // console.log("city data",`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`);
    // return false;
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`);
    const CityInfo = response.data;
    resolve(CityInfo);
  });
}



module.exports = getCityInfo;