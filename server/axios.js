var axios = require('axios');
var data = JSON.stringify({
  "amount": "50",
  "name": "hi"
});

var config = {
  method: 'post',
  url: 'https://google.com',
  headers: { 
    'Authorization': 'Bearer jhfsjhdkfsfhjkh', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
