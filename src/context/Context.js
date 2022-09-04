import React, {createContext} from 'react'
import { useContext } from 'react';
import { useReducer } from 'react';
import { products } from '../data';
import { cartReducer } from './Reducers';
const Cart = createContext();

const Context = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, {
        products:products,
        cart:[]
    })
  return <Cart.Provider value={{state, dispatch}}>
        {children}
  </Cart.Provider>
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}