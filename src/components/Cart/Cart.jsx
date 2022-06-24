import React from 'react';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const { cartList, EmptyCart, PriceTotal, IconCart } = useContext(CartContext)

    return (
        <div>
            Carrito
            {cartList.map((i) => <CartItem key={i.prod.id} prod={i.prod} />)}
            <button onClick={EmptyCart}>Vaciar Carrito</button>

        </div>
    )
}

// const Cart = () => {
//     const { cartList, EmptyCart, PriceTotal, IconCart } = useContext(CartContext)

//     return (
//         <>
//             <div>
//                 {cartList.length < 1 ? (
//                     <p>Carrito vacio</p>
//                 ) : (
//                     cartList.map((i) => <CartItem key={i.prod.id} prod={i.prod} />)
//                 )}
//             </div>
//             <button onClick={EmptyCart}>Vaciar Carrito</button>
//             <p>El precio total es {PriceTotal()}</p>
//             <p>La cantidad de productos es {IconCart()}</p>
//         </>
//     )
// }

export default Cart