import React from 'react'

const generarOrden = (e) => {
    e.preventDefault();
    let orden = {};

    orden.buyer = { name: 'isaac', email: 'i@gmail.com', phone: '72185716' }
    orden.total = precioTotal();

    return (
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.name
            const precio = cartItem.price * cartItem.cantidad
        })

    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, orden)
    .then(resp => console.log(resp))

  )
}

export default generarOrden