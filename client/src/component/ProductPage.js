import React from 'react'


function ProductPage  ()  {
  return (
    <>
    <div>Shopping Store
    <br />
    <br />
    <form action="http://localhost:4242/create-checkout-session" method="POST">
      <button type='submit'>pay</button>
    </form>
    </div>
    </>
  )
}

export default ProductPage