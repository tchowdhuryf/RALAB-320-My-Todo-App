import React from "react";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

function EditItemForm({ editItem, packingItem}) {
    const [itemName, setItemName] = useState(packingItem.name);

  const handleForm = (e) => {
    e.preventDefault();
    editItem(itemName, packingItem.id);
  };

  return (
    <form className="todo" onSubmit={handleForm}>
      <div>
        <input
          type="text"
          id="task"
          className="input"
          value={itemName}
          onInput={(e) => setItemName(e.target.value)}
          required
          autoFocus
          maxLength={50}
          placeholder="Edit Item"
        />
      </div>
      <button className="btn" type="submit">
        <CheckIcon />
      </button>
    </form>
  );
}

export default EditItemForm;
