import React from 'react';
import { Card } from 'react-bootstrap';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = ({product}) => {
    const{name, price, id, foto} = product
    const{DelItem} = useContext(CartContext);

    return(
        <div>
            <Card.Img variant="top" src={foto} style={{ width: '100px' }} />
            <h4>{name}</h4>
            <p>{price}</p>
            <button onClick={()=> DelItem(id)}>Borrar Producto</button>
        </div>
    )
}

export default CartItem