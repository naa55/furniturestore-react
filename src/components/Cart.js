import React from 'react'
import { CartState } from '../context/Context'
import CartList from './CartList';
import SubTotal from './SubTotal';

const Cart = () => {
    const {state: {cart}} = CartState();

  return (
    <div>
        <div className='container'>
       <div>
       <h1 className='text-4xl m-8 font-medium'>Cart</h1>
        <hr/>
      {
      cart.length <= 0 ? <p className='text-3xl text-center mt-24'>Nothing In Cart</p>
      : cart.map((item) => (
        <CartList item={item}/>
      ))
      }
       </div>
       <SubTotal/>
    </div>

    </div>
  )
}

export default Cart