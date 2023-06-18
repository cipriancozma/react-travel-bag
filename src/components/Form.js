import React, { useState } from "react";

function Form({ setItems }) {
  const [description, setDescription] = useState("");
  const [selectOptions, setSelectOptions] = useState(1);

  function handleAddItems(item) {
    setItems((currentState) => [...currentState, item]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      description,
      selectOptions,
      packed: false,
      id: Date.now(),
    };
    handleAddItems(newItem);
    setDescription("");
    setSelectOptions(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do we need for our trip? 🤩</h3>
      <select
        value={selectOptions}
        onChange={(e) => setSelectOptions(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
