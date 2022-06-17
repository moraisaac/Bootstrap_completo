import React from "react";
import { useState, useEffect } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetch } from "../../helpers/getFetch"
import { Spinner } from 'react-bootstrap';
import '../ListContainer/ItemListContainer.css';
import { useParams } from "react-router-dom";

const ItemDetailConatainer = () => {
    const [productos, setProductos] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        getFetch()
            .then((resp) =>{
                setProductos(resp.find(prod => prod.id === id))
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
                    < ItemDetail prod = { productos } />
                </div>
            }
        </div>

    ) 
}
export default ItemDetailConatainer
