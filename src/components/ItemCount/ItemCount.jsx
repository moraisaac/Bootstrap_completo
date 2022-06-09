
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';


function ItemCount( {stock, initial, onAdd} ) {

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

    useEffect(() => {
        document.title = `Compraste ${count} productos`;
    });

    return (
        <ButtonGroup size='sm' className='mb-2'>
            <Button className='mx-2' onClick={restarContador}> - </Button>
            <h4> {count} Productos</h4>
            <Button className='mx-2' onClick={sumarContador}> + </Button>
            <Button className='mx-2' onClick={imprimirProd}>
                Comprar
            </Button>
        </ButtonGroup>
    );
}

export default ItemCount

