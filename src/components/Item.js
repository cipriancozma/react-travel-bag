import React from "react";

function Item({ item }) {
  return (
    <li>
      {" "}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.selectOptions} - {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
