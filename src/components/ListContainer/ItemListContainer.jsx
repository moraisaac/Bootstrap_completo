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
import { Spinner } from 'react-bootstrap';
import '../ListContainer/ItemListContainer.css';


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
    }, [])



    return (
        <div>
            {loading ?
                <div className="mx-5 my-5 cargando d-flex justify-content-center align-items-center">
                    <Spinner animation="border" variant="primary" className="mx-5"/>
                    <Spinner animation="border" variant="secondary" className="mx-5"/>
                    <Spinner animation="border" variant="success" className="mx-5"/>
                    <Spinner animation="border" variant="danger" className="mx-5"/>
                    <Spinner animation="border" variant="warning" className="mx-5"/>
                </div>
                :
                <div className="my-5 mx-5 d-flex flex-wrap justify-content-around">
                    <ItemList productos={productos} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer



