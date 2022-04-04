import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer() {

  const handleOnAdd = (quantity) => {
    console.log(`se agrego ${quantity}`)
    alert(`${quantity} productos agregados al carrito`)

  }

    return (
      <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>
    );
  }