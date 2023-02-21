const axios = require("axios");

function getProducts() {
  return new Promise(async (resolve, reject) => {
    const response = await axios.get("https://dummyjson.com/products");
    const products = response.data;
    resolve(products);
  });
}



module.exports = getProducts;