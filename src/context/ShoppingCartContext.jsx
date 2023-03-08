import React, { Children } from 'react';
import { useState } from 'react';
import { createContext } from './counterContext';

export const CartContext = createContext();

const ShoppingCartContext = ({children}) => {
    const [counter, setCounter] = useState(5);

    const increment = () =>{
        setCounter(counter + 1);
    }

    const decrement = () =>{
        setCounter(counter - 1);
    }

    const reset = () =>{
        setCounter(0);
    }
    
  return (
    <CounterContext.Provider value={{
        cart, setCart}}>
        {children}
    </CounterContext.Provider>
  )
}

export default ShoppingCartContext