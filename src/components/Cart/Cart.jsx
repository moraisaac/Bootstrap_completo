import React from 'react';
import logocarrito from '../../Imagenes/carrito.svg';

const Cart = () => {
    return (
            <img
                src={logocarrito}
                width="30"
                height="30"
                className="align-top mx-5 justify-content-between"
                alt=""
            />
    )
}

export default Cart