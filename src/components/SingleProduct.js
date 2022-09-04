import React from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { CartState } from '../context/Context';
const SingleProduct = ({product, index}) => {
    const {image,price, oldPrice, name} = product;
    const {state:{cart}, dispatch} = CartState();
  return (
    <div className='w-full max-w-xs h-96 text-left' key={index} id='products'>
    <div className='border hover:border-accent rounded-2xl w-full max-w-xs h-full max-h-72 flex items-center justify-center mb-4 relative transition'>
      <img src={image.type} alt=''/>
      {console.log(product.id)}
      <div className='absolute bottom-4 right-6 bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition'>
        {
            cart.some(p=> p.id === product.id) ?  <HiMinus className='text-xl text-primary'
             onClick={() => {
                dispatch({type:'REMOVE_FROM_CART', payload: product})
            }}/>:<HiPlus className='text-xl text-primary'onClick={() => {
                dispatch({type:'ADD_TO_CART', payload: product})
            }} />
        }
       
      </div>
    </div>
    <div className='font-semibold lg:text-xl'>{name}</div>
    <div className='flex items-center gap-x-3'>
      <div>$ {price}</div>
      <div className='text-2 text-gray-600 line-through'>$ {oldPrice}</div>
    </div>
  </div>
  )
}

export default SingleProduct;

