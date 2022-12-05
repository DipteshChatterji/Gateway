const stripe = require('stripe')(process.env.stripe_SecStripe_Secret_key);

let main = async()=> {
const price = await stripe.prices.create({
  unit_amount: 9000,
  currency: 'INR',
//   recurring: {interval: 'year'},
  product: 'price_1M96WXSH3pcKssZlilUSksBF',
});
console.log(price)


// const product = await stripe.products.create({
//   name: 'Gold Special',
// });

// console.log(product)
}

main()

// product_id = prod_MsrKMOWyLPUwNC
// price_id = price_1M95d6SIDC77gwyyiVfX15gE // recuring
// price = price_1M95jYSIDC77gwyyM4buWjyo