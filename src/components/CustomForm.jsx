import React from "react";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

function CustomForm({ addPackingItem }) {
  const [item, setItem] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    addPackingItem({
      id: new Date().getTime(),
      name: item,
      packed: false,
    });
    setItem("");
  };

  return (
    <form className="item" onSubmit={handleForm}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={item}
          onInput={(e) => setItem(e.target.value)}
          required
          autoFocus
          maxLength={50}
          placeholder="Add an item to pack"
        />
        <label htmlFor="task" className="label">
          Add an item to pack
        </label>
      </div>
      <button className="btn" aria-label="Add task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
}

export default CustomForm;
