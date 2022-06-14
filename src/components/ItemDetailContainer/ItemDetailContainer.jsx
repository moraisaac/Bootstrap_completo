import { useState, useEffect } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetchOne } from "../../helpers/getFetch"
import { Spinner } from 'react-bootstrap';
import '../ListContainer/ItemListContainer.css';

const ItemDetailConatainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetchOne()
            .then((resp) =>{
                setProducto(resp)
                setLoading(false)
            } )
            .catch(err => console.log(err))
    }, [])



    return (
        <div>
            {loading ?
                <div className="mx-5 my-5 cargando d-flex justify-content-center align-items-center">
                    <Spinner animation="border" variant="primary" className="mx-5" />
                </div>
                :
                <div className="my-5 mx-5 d-flex flex-wrap justify-content-around">
                    < ItemDetail producto = { producto } />
                </div>
            }
        </div>

    ) 
}
export default ItemDetailConatainer
