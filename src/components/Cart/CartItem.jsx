import React from 'react';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = ({prod}) => {
    const{DelItem} = useContext(CartContext);

    return(
        <div>
            <h4>{prod.name}</h4>
            <button onClick={()=> DelItem(prod.id)}>Borrar Producto</button>
        </div>
    )
}

export default CartItem