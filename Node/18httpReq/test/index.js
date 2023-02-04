
// const axios = require('axios');


// axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res => { console.log(res); })


// const superagent = require('superagent');
// (async () => {
//     try {
//         // const body = await superagent.get( //with header without destructure
//         const {body} = await superagent.get( //with destructure get server response
//             'https://jsonplaceholder.typicode.com/posts')
//         console.log(body)
//     } catch (err) {
//         console.log(err);
//     }
// })();



// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'fun',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// }).then((response) => response.json()).then((json) => console.log(json))
// .catch(err => console.log(err))


const http = require('http');
  
// Setting the configuration for
// the request
const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'GET'
};
    
// Sending the request
const req = http.request(options, (res) => {
    let data = ''
     
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    // Ending the response 
    res.on('end', () => {
        console.log('Body:', JSON.parse(data))
    });
       
}).on("error", (err) => {
    console.log("Error: ", err)
}).end()
