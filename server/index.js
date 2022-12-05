require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors")
app.use(cors())
app.use(express.static('public'));
const YOUR_DOMAIN = 'http://localhost:4242';

const endpointSecret = "whsec_fe6ef56bccceb5275997d2b967953a6746092de9fcb03333eef4afe704bb0d2f";


//connected to database//
const bodyParser=require("body-parser");
// const cors = require("cors");
const db = require("./database/models");
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
db.sequelize.sync();
require("./database/routes/transaction.route")(app)






app.post('/webhook',async(req, res)=>{

  let name = req.body.data.object.id
  let statusComplete = req.body.data.object.payment_status==="paid"?1:0
  var data= {
    statusComplete: statusComplete
  }
  db.transaction.update( data,{
    where: { name: name }
  })
  // res.send({message: "success"}, 200)





  res.send({message:"success"},200)
})



app.post('/create-checkout-session', async (req, res) => {
  //checkout session created

  const stripe = require('stripe')('sk_test_51M7cPGSH3pcKssZlBjd13h9GfLi7khREAR9npSf2plTyFhEvOKQMgvAe9UaqzLgjGJBmQ1RKo6xUiDFn1yCCuRjk00FQ5QvxgB');
  const session = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
    line_items: [
      { price: 'price_1M96i7SH3pcKssZlTXVLKQaE', quantity: 1 },
    ],
    mode: 'payment',
  });
  db.transaction.create({
    
    name: session.id,
    email: "VBJKKJ",
    country: "IND",
    price: session.amount_total,
    statusComplete: session.payment_status==="unpaid"?0:1,
    
  })
  res.redirect(303, session.url);
});





app.get('/', (req,res)=>{
  res.json({message: 'Welcome to our Applictaion'})
})

app.listen(4242, () => console.log('Running on port 4242'));







































// const express = require('express');
// const app = express();
// const index=require("./database/models/index")
// app.use(express.static('public'));
// // app.use(express.json())


// //from database.js

// const bodyParser=require("body-parser");
// const cors = require("cors");
// const db = require("./database/models");
// const { STRING } = require('sequelize');

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// db.sequelize.sync();

// require("./database/routes/transaction.route")(app)


// //webhook endpoint
// app.post("/webhook", async (req,res)=>{
//   // console.log("PRINING REQUEST OBJECT",req.body);
//   console.log("--------------------------------------------------------------------");
  
//   console.log("Customer Name: ",req.body.data.object.customer_details.name);
//   console.log("Email Address: ", req.body.data.object.customer_details.email);
//   console.log("Country: ",req.body.data.object.customer_details.address.country);
//   console.log("Price: ", req.body.data.object.amount_total/100);
//   console.log("Payment Status: ", req.body.data.object.payment_status);
//   console.log("--------------------------------------------------------------------");

//   db.transactions2.create({
//     name:req.body.data.object.customer_details.name,
//     email:req.body.data.object.customer_details.email,
//     country:req.body.data.object.customer_details.address.country=="IN"?"INDIA":"FOREIGN",
//     price: req.body.data.object.amount_total/100,
//     statusComplete: req.body.data.object.payment_status=="paid"? 1 : 0
//   })

//   res.json("this endpoint is for webhook",200);
// })


// app.post('/create-checkout-session', async (req, res) => {
//   // require("dotenv").config();
//   // const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
//   const stripe = require('stripe')('sk_test_51M7cPGSH3pcKssZlBjd13h9GfLi7khREAR9npSf2plTyFhEvOKQMgvAe9UaqzLgjGJBmQ1RKo6xUiDFn1yCCuRjk00FQ5QvxgB');

//   const session = await stripe.checkout.sessions.create({
//     success_url: 'http://localhost:3000/success',
//     cancel_url: 'http://localhost:3000/failure',
//     line_items: [
//       {price: 'price_1M96T8SIDC77gwyyRlRIz5CR', quantity: 1},
//     ],
//     mode: 'payment',
//   });
//     res.redirect(301, session.url);

// });

// app.get('/', (req,res)=>{
//   res.json({message: 'Welcome to our Applictaion'})
// })

// app.listen(4245, () => console.log('Running on port 4242'));
