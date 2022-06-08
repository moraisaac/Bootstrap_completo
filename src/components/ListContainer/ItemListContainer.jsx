import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ({param1}) => {
    const estock = 5;
    const inicial = 1;
    return (
        <>
            <div> {param1} </div>
            <ItemCount/>
        </>

    )
}



export default ItemListContainer