function getGitHub() {

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return body;
      console.log(body)
    }
  })
};

var options = {
  url: "https://api.github.com/users/harrywynnwill",
  headers: {
    'User-Agent': 'request'
  }
};



var request = require('request');



function _handleResponseFromApi (response) {
  return response.data;
}
