import React, { createContext, useState } from 'react';
import {message} from 'antd';

export const CartContext = createContext(null);

export function CartProvider({children}) {
    const [items, setItems] = useState([])
    
 function addToCart (item) {
        const key = 'updatable';
  message.loading({ content: 'Adding...', key });
  setTimeout(() => {
    message.success({ content: 'Added to Cart!', key, duration: 2 });
  }, 1000);

        setItems(prevState =>[...prevState, item])
    }

    function itemWithQuantity(items) {
        return items.reduce((acc, item) => {
            const found = acc.find(_item => _item.Handle === item.Handle)
        if(found){
            found.quantity = found.quantity + 1
        }else{
            acc.push({
                quantity:1,
                ...item
            })
        }
        return acc
        }, [])
    }

    return(
        <CartContext.Provider
            value={{
                items: itemWithQuantity(items),
                addToCart
                
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
