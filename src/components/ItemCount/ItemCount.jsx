
import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';


function ItemCount({ stock, initial, onAdd, handleInter }) {

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
                <Button
                    className="mx-2"
                    onClick={handleInter}
                >
                    Agregar Al carrito
                </Button>
            </div>
        </ButtonGroup>
    );
}

export default ItemCount

