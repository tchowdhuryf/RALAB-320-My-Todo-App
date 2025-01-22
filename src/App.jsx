import { useState } from "react";
//components
import CustomForm from "./components/CustomForm";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);

  const addPackingItem = (packingItem) => {
    setItems((previous) => [...previous, packingItem]);
  };

  const deletePackingItem = (id) => {
    setItems(previous => previous.filter(item => item.id !== id));
  }

  return (
    <div className="container">
      <header>
        <h1>My Packing List</h1>
      </header>
      <CustomForm addPackingItem={addPackingItem} />
      {items && (<ItemList items={items} deletePackingItem={deletePackingItem}/>)}
    </div>
  );
}

export default App;
