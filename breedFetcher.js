const request = require('request');
const arr = process.argv.slice(2);
let newSearch = 'https://api.thecatapi.com/v1/breeds/search?q=' + arr[0];
request(newSearch, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (data.length !== 0) {
    console.log(data[0]['description']);

  } else {
    console.log("The requested breed is not found");
  }
});