import React from 'react'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useContext } from "react";
import { CartContext } from '../Cart/CartContext';



const generarOrden = () => {
    const { cartList, EmptyCart, PriceTotal } = useContext(CartContext)

    async function generarOrd(e) {
        e.preventDefault()
        let orden = {}

        orden.buyer = { name: 'isaac', email: 'i@gmail.com', phone: '123456789' }
        orden.total = PriceTotal()

        orden.items = cartList.map(cartItem => {
            const id = cartItem.prod.id;
            const nombre = cartItem.prod.name;
            const count = cartItem.count;
            const precio = cartItem.prod.price * cartItem.count;


            return { id, nombre, precio, count }
        })
        // insertar
        console.log(orden)
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, orden)
            .then(resp => console.log(resp.id))

    //     const queryCollectionStock = collection(db, 'productos')

    //     const queryActulizarStock = query(
    //         queryCollectionStock,
    //         where(documentId(), 'in', cartList.map(it => it.id))
    //     )

    //     const batch = writeBatch(db)

    //     await getDocs(queryActulizarStock)
    //         .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
    //             stock: res.data().stock - cartList.find(prod => prod.id === res.id).count
    //         })))
    //         .finally(() => EmptyCart())

    //     batch.commit()

    }

    return (
        <button onClick={generarOrd}>Terminar Compra</button>
    )
}

export default generarOrden
