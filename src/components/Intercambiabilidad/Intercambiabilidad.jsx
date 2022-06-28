
import { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import React from 'react';
import { useState } from "react";
import InputCount from './InputCount';
import ItemCount from '../ItemCount/ItemCount';



// const ButtonCount = ({ handleInter}) => {

//     return <Button
//         className="mx-2"
//         onClick={handleInter}
//     >
//         Agregar Al carrito
//     </Button>

// }

const Intercambiabilidad = ({prod}) => {
    const [inputType, setInputType] = useState('button')

    const handleInter = () => {// onAdd
        setInputType('input')
    }

    const {AddToCart} = useContext(CartContext);
    
    const onAdd = (count) => {
        AddToCart(prod, count);
        console.log(count);
    }  

    return (
        <div>
            {
                inputType === 'button' ?
                    <ItemCount handleInter={handleInter} initial={1} stock={prod.stock} onAdd={onAdd}/>
                    :
                    <InputCount />
            }
        </div>
    )
}

export default Intercambiabilidad
