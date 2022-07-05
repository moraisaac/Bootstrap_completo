import React from 'react';
import { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { addDoc, collection, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"

const Cart = () => {
    const { cartList, EmptyCart, PriceTotal, IconCart } = useContext(CartContext)

    function generarOrden(e) {
        e.preventDefault()
        let orden = {}

        orden.buyer = { name: 'isaac', email: 'i@gmail.com', phone: '123456789' }
        orden.total = PriceTotal()

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.name 
            const precio = cartItem.price * cartItem.count
            // const cantidad = cartItem.cantidad

            return { id, nombre, precio }
        })
        // insertar
        console.log(orden)

    }



    return (
        <>
            {cartList.length < 1 ? (
                <div className='d-flex flex-column align-items-center'>
                    <h1>Carrito vacio</h1>
                    <Image src="https://letrasrecortadas.com/carritoVacio.png" alt="" className='w-25 ' />
                    <NavLink to='/'>
                        <Button variant="outline-warning" className='px-5' size='lg'> Seguir Comprando </Button>
                    </NavLink>

                </div>
            ) : (
                <>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartList.map((i) => <CartItem key={i.prod.id} prod={i.prod} />)}
                        </tbody>
                    </table>
                    <div className='mx-5 my-5'>
                        <button onClick={EmptyCart}>Vaciar Carrito</button>
                        <button onClick={generarOrden}>Terminar Compra</button>
                        <p>La cantidad de productos es {IconCart()}</p>
                        <p>El precio total es $ {PriceTotal()}</p>
                    </div>
                </>
            )
            }
        </>

    )
}


export default Cart