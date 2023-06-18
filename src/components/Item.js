import React from "react";

function Item({ item, handleDelete, handleChecked }) {
  return (
    <li>
      {" "}
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleChecked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.selectOptions} - {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}

export default Item;
