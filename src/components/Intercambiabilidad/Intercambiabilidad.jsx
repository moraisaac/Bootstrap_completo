import { Button } from 'react-bootstrap';
import React from 'react';
import { useState } from "react";
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



const ButtonCount = ({ handleInter}) => {

    return <Button
        className="mx-2"
        onClick={handleInter}
    >
        Agregar Al carrito
    </Button>

}

const Intercambiabilidad = () => {
    const [inputType, setInputType] = useState('button')

    const handleInter = () => {// onAdd
        setInputType('input')
    }

    return (
        <div>
            {
                inputType === 'button' ?
                    <ButtonCount handleInter={handleInter}/>
                    :
                    <InputCount />
            }
        </div>
    )
}

export default Intercambiabilidad
