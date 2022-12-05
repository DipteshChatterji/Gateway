const express = require("express");
var mysql = require("mysql2");
var app = express();
app.use(express.json());


const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "February@99",
  database: "ShopingStore",
});


con.connect(function(err){
    if(err) throw err;
    console.log("Connected !");
    var sql = "INSERT INTO items(id, product, price,quantity) VALUES (4, 'earphone', 100,4)";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("1 record inserted !")
    });
});


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

module.exports = con;

app.listen(5001,()=>{
    console.log("Express app is running on port 5001");
})
