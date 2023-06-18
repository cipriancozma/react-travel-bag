import React from "react";

function Item({ item, handleDelete }) {
  return (
    <li>
      {" "}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.selectOptions} - {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}

export default Item;
