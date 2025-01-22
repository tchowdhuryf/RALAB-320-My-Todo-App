import React from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";
import EditItemForm from "./EditItemForm";

function ItemList({
  items,
  deletePackingItem,
  updatePackedStatus,
  onEdit,
  isEditing,
  currentItem,
  editItem,
}) {
  return (
    <ul className={styles.tasks}>
      {items
        .sort((a, b) => b.id - a.id)
        .map((item) =>
          isEditing && currentItem && currentItem.id === item.id ? (
            <li key={item.id}>
              <EditItemForm editItem={editItem} packingItem={currentItem} />
            </li>
          ) : (
            <li key={item.id}>
              <Item
                item={item}
                deletePackingItem={deletePackingItem}
                updatePackedStatus={updatePackedStatus}
                onEdit={onEdit}
              />
            </li>
          )
        )}
    </ul>
  );
}

export default ItemList;
