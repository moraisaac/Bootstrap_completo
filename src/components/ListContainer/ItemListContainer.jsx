// import ItemCount from "../ItemCount/ItemCount"


// const ItemListContainer = ({param1}) => {
//     function onAdd (count) {
//         console.log(count);
//     }

//     return (
//         <>
//             <div> {param1} </div>
//             <ItemCount stock = '10' initial = '1' onAdd = {onAdd}/>
//         </>

//     )
// }

// export default ItemListContainer

import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { getFetch } from "../../helpers/getFetch";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch()// llamada a la api
            .then((resp) => {
                setProductos(resp)
                setLoading(false)
            })
            .catch(err => console.log(err))
        // .finally(()=> )
    }, [])



    return (
        <div>
            {loading ?
                <h1>Cargando...</h1>
                :
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <ItemList productos={productos} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer



