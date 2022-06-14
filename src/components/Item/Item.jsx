import { Card, Button } from 'react-bootstrap';

const Item = ({ prod }) => {
    return (
        <Card className='my-2' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.foto} style={{width: '200px'}} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>
                    Disponible: {prod.stock} pz
                </Card.Text>
                <Button variant="primary">Ver mas</Button>
            </Card.Body>
        </Card>

    )
}

export default Item
