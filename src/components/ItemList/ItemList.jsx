import {CardGroup} from 'react-bootstrap';
import Item from "../Item/Item"

const ItemList = ({ productos }) => {
    return (
        productos.map(prod => 
        <CardGroup>
            <Item key={prod.id} prod={prod} />
        </CardGroup>)
    )
}

export default ItemList
