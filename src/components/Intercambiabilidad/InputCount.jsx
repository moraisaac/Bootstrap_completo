import React from 'react';
import { Link } from "react-router-dom";

const InputCount = () => {
    return (
        <>
            <Link to='/cart' >
                <button
                    className="btn btn-outline-primary"
                    onClick={() => console.log('Cart')}
                >Ir al Cart o Terminar compra</button>
            </Link>
            <Link to='/' >
                <button
                    className="btn btn-outline-primary"
                    onClick={() => console.log('Home')}
                >Seguir comprando</button>
            </Link>
        </>
    )
}

export default InputCount