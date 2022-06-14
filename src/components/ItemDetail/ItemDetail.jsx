import { Image, Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto, param1 }) => {
    function onAdd(count) {
        console.log(count);
    }

    return (

        <div className="d-flex flex-row aling-items-center mx-5">
            <div className="p-1">
                <Image src={producto.foto} alt="" className="w-50" />
            </div>
            <div className='p-1'>
                <Card className="text-center">
                    <Card.Header className='text-capitalize'>Categoria: {producto.categoria}</Card.Header>
                    <Card.Body>
                        <Card.Title>{producto.name}</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Optio modi nostrum accusamus illum nobis explicabo similique excepturi
                        </Card.Text>
                        <Card.Text> $ {producto.price}</Card.Text>
                        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
                    </Card.Body>
                    <Card.Footer className="text-muted">...</Card.Footer>
                </Card>
            </div>
        </div>


    )
}

export default ItemDetail
