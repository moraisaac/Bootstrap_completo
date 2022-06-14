let productos = [
    { id: '1', categoria: 'globo', name: "Globo de Luz", price: 37, stock:10, foto: 'https://m.media-amazon.com/images/I/71DSD64LdNL._AC_SL1500_.jpg' },
    { id: '2', categoria: 'globo', name: "Globo Neon", price: 27, stock:10, foto: 'https://www.nilaballoons.com/wp-content/uploads/2018/06/neon-897x1095.jpg' },
    { id: '3', categoria: 'globo', name: "Globo", price: 40, stock:10, foto: 'https://www.fiestafacil.com/content/images/thumbs/0033973_globos-de-latex-lisos-sempertex_370.jpeg' },
    { id: '4', categoria: 'decoracion', name: "Letreros", price: 55, stock:10, foto: 'https://www.blunia.net/359/359_prod_359-c0cca5114c3d80b8280322656913ca672016-05-28.jpg' },
    { id: '5', categoria: 'decoracion', name: "Fomi", price: 11, stock:10, foto: 'http://grupocomercialzambrano.com/wp-content/uploads/2019/11/FOMY-DIAMANTADO-CARTA.jpg' },
    { id: '6', categoria: 'decoracion', name: "Payaso", price: 19, stock:10, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHvZAnovjJUcBizkOOh-L8xpWIlGrCCNYlw&usqp=CAU' },
];

export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (id) {
                resolve(productos.find(prod => prod.id === id))
            } else {
                resolve(productos)
            }
        }, 3000)
    })
}


let producto = { id: '1', categoria: 'globo', name: "Globo Neon", stock:10, price: 27, foto: 'https://www.nilaballoons.com/wp-content/uploads/2018/06/neon-897x1095.jpg' }


export const getFetchOne = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(producto)
        }, 3000) 
    })
}  
