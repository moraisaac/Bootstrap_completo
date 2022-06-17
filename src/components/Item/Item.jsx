import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
    return (
        <Card className='my-2' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.foto} style={{ width: '200px' }} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>
                    Disponible: {prod.stock} pz
                </Card.Text>
                <Link to={`/detalle/${prod.id}`}>
                    <Button variant="primary">Ver mas</Button>
                </Link>
            </Card.Body>
        </Card>

    )
}

export default Item
