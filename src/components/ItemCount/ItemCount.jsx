
import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad';


function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(parseInt(initial));

    function sumarContador() {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    function restarContador() {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    function imprimirProd() {
        onAdd(count);
    }

    return (
        <ButtonGroup size='sm' className='mb-2'>
            <Button className='mx-2' onClick={restarContador}> - </Button>
            <h4> {count} Productos</h4>
            <Button className='mx-2' onClick={sumarContador}> + </Button>
            <div className='mx-2' onClick={imprimirProd}>
                <Intercambiabilidad />
            </div>
        </ButtonGroup>
    );
}

export default ItemCount

