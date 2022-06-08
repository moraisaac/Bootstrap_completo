import React, { useState, useEffect } from 'react';


function ItemCount() {
    const stock = 10;
    const initial = 1;

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

    useEffect(() => {
        document.title = `Compraste ${count} productos`;
    });

    return (
        <div>
            <button onClick={restarContador}> - </button>
            <h4> {count} Productos</h4>
            <button onClick={sumarContador}> + </button>
            <button onClick={console.log(`Compraste ${count} productos`)}>
                Comprar
            </button>
        </div>
    );
}

export default ItemCount

