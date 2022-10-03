import React from 'react'
import { useState } from 'react'

const Cart = () => {
  const [data, SetData] = useState({
    amount: "", currency: "", reciept: ""
  });

  let name, value
  const handle = (e) => {
    name = e.target.name;
    value = e.target.value;
    SetData({ ...data, [name]: value })
  }

  const checkout = (e) => {
    // e.preventDefault;
    console.log(data);
    // let res = data
  }

  return (
    <div>
      <input type="text" placeholder='amount' value={data.amount} name="amount" onChange={handle} />
      <input type="text" placeholder='currency' value={data.currency} name="currency" onChange={handle} />
      <input type="text" placeholder='reciept' value={data.reciept} name="reciept" onChange={handle} />
      <button onClick={() => checkout()}>Checkout</button>
    </div>
  )
}

export default Cart
