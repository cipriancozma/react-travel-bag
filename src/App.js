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

  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (!items.length) return;
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <ListOfItems
        items={items}
        handleDelete={handleDelete}
        handleChecked={handleChecked}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
