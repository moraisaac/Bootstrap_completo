import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ({param1}) => {
    function onAdd (count) {
        console.log(count);
    }

    return (
        <>
            <div> {param1} </div>
            <ItemCount stock = '10' initial = '1' onAdd = {onAdd}/>
        </>

    )
}



export default ItemListContainer