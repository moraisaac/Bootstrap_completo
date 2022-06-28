import React from 'react';
import {createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    
    const AddToCart = (prod, count) => {
        if (IsInCart(prod.id)){
            alert("El producto ya esta en el carrito");
        }else{
            setCartList([...cartList, {prod, count}]);
            alert("Se agrego al carrito");
        }
    };

    const DelItem = (id) =>{
        const items = cartList.filter((i) => i.prod.id !== id)
        setCartList(items)
        return
    }

    const IconCart = () => {
        return cartList.reduce((acum, i)=> acum + i.count, 0)
    }

    const PriceTotal = () => {
        return cartList.reduce((acum, i) => acum + i.count * i.prod.precio, 0)
    }

    const EmptyCart =() =>{
        setCartList([])
    }

    const IsInCart = (id) =>{
        return cartList && cartList.some((i)=> i.prod.id === id); 
    }

    return(
        <CartContext.Provider value={{AddToCart, cartList, EmptyCart, PriceTotal, DelItem, IconCart}}>
            {children}
        </CartContext.Provider>)
}

export default CartContextProvider;