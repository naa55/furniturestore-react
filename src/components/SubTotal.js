import React from 'react'
import { CartState } from '../context/Context'

const getSubTotal = () => {
    const {state: {cart}} = CartState();
    if(cart.length <= 0) return;
   const total =  cart.map((a) => a.price).reduce((a,b) => a + b);
   return total;
}

const SubTotal = () => {
  return (
   <div>
     <div className='my-24 text-2xl'>SubTotal : $ {getSubTotal()}.00</div>
    <hr/>
   </div>
  )
}

export default SubTotal