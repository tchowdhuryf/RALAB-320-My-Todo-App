import { useState } from "react";
//components
import CustomForm from "./components/CustomForm";
import ItemList from "./components/ItemList";
import EditItemForm from "./components/EditItemForm";

function App() {
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const addPackingItem = (packingItem) => {
    setItems((previous) => [...previous, packingItem]);
  };

  const deletePackingItem = (id) => {
    setItems((previous) => previous.filter((item) => item.id !== id));
  };

  const updatePackedStatus = (id) => {
    setItems((previous) =>
      previous.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            packed: !item.packed,
          };
        }
        return item;
      })
    );
  };

  const editItem = (updatedName, id) => {
    setItems((previous) =>
      previous.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name: updatedName,
          };
        }
        return item;
      })
    );
    setIsEditing(false);
    setCurrentItem(null);
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  return (
    <div className="container">
      <header>
        <h1>My Packing List</h1>
      </header>
      <CustomForm addPackingItem={addPackingItem} />
      {items && (
        <ItemList
          items={items}
          deletePackingItem={deletePackingItem}
          updatePackedStatus={updatePackedStatus}
          onEdit={handleEdit}
          isEditing={isEditing}
          currentItem={currentItem}
          editItem={editItem}
        />
      )}
    </div>
  );
}

export default App;
