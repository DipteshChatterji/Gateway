const express = require("express");
var mysql = require("mysql2");
var app = express();
app.use(express.json());
const { Sequelize } = require('sequelize');
var axios = require('axios');
var data = JSON.stringify({
  "amount": "50",
  "name": "hi"
});

const sequelize = new Sequelize('ShopingStore', 'root', 'February@99', {
    host: 'localhost',
    dialect: 'mysql'
});

const dummy = sequelize.define("dummy", {
    hi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hello: {
      type: DataTypes.STRING,
      allowNull: true
    }
 });

try {
    sequelize.authenticate();

    console.log('Connection has been established successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);

}
res.redirect('https://www.geeksforgeeks.org');

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

  

sequelize.sync().then(() => {

    dummy.findAll().then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});




// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "February@99",
//   database: "ShopingStore",
// });

// con.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Connected to database");
  
//   }
// });

// con.query("INSERT INTO dummy (1,2)", (err,res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("posted");
//     }
//   });



// app.post("/post", (req, res) => {
 
//   const username = "Ram";
//   const password = "abhi";

//   con.query("INSERT INTO user_data(?,?)", [username, password], (err,res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("posted");
//     }
//   });
// });

// module.exports = con;

app.listen(5001,()=>{
    console.log("Express app is running on port 5001");
})
