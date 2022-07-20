import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = ({ prod }) => {
    const { name, price, id, foto } = prod;

    const { DelItem } = useContext(CartContext);

    return (
        <tr>
            <th scope="row">
                <Card.Img variant="top" src={foto} style={{ width: '100px' }} />
            </th>
            <td>
                <h4>{name}</h4>
            </td>
            <td>
                <p> $ {price}</p>
            </td>
            <td>
                <Button variant="outline-danger" onClick={() => DelItem(id)}>X</Button>
            </td>
        </tr>

    )
}

export default CartItem