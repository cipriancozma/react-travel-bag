import { useState } from "react";
import Form from "./components/Form";
import ListOfItems from "./components/ListOfItems";
import Logo from "./components/Logo";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <ListOfItems items={items} handleDelete={handleDelete} />
      <Stats />
    </div>
  );
}

export default App;
