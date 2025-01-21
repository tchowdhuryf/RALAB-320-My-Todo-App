import React from "react";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";

function CustomForm() {
  const [todo, setTodo] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <form className="todo" onSubmit={handleForm}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          //   value={todo}
          //   onInput={(e) => setTodo(e.target.value)}
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
