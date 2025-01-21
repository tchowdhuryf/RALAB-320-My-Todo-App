import { useState } from "react";
//components
import CustomForm from "./components/CustomForm";

function App() {
  const [count, setCount] = useState(0);

  const addPackingItem = (packingItem) => {
    console.log(packingItem);
  }

  return (
    <div className="container">
      <header>
        <h1>My Packing List</h1>
      </header>
      <CustomForm addPackingItem={addPackingItem}/>
    </div>
  );
}

export default App;
