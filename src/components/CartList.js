import React from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { CartState } from '../context/Context'
import CheckOut from './CheckOut'
import Shipping from './Shipping'

const CartList = ({item}) => {
  const {dispatch} = CartState();

  return (
    <div className='mt-16 grid grid-col-1 lg:grid-cols-2'>
            <div className="mt-4 border border-gray-500 p-4 rounded-lg shadow-md hover:border-accent-500">
                <div className="flow-root">
                  <ul  className="-my-6 divide-y divide-gray-200">
                    <li className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={item.image.type} alt="" className="h-full w-full object-cover object-center"/>
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="/">{item.name}</a>
                            </h3>
                            <p className="ml-4">$ {item.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">Salmon</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty 1</p>

                          <div className="flex">
                            <button type="button" className="font-medium text-accent hover:text-green-500" onClick={() => {dispatch({type:'REMOVE_FROM_CART', payload: item})}} >Remove</button>
                          </div>
                        </div>
                        <div class="flex justify-between text-base font-medium text-gray-900 mt-8">
                                <p>Subtotal</p>
                                <p>$ {item.price}</p>
                        </div>
                      </div>
                    </li>
                    <Shipping/>
                  </ul>
                </div>
              </div>
     </div>
  )
}

export default CartList