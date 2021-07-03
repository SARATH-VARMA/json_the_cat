const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  let newSearch = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(newSearch, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length !== 0) {
        callback(null, data[0]['description']);

      } else {
        callback("The requested breed is not found",null);
      }
    }
  });
};
module.exports = { fetchBreedDescription }; 