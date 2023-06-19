import React, { useState } from "react";
// import { items } from "../data";
import Item from "./Item";

function ListOfItems({ items, handleDelete, handleChecked, handleClearList }) {
  const [sorted, setSorted] = useState("input");

  let sortedItems;
  if (sorted === "input") {
    sortedItems = items.toSorted();
  }

  if (sorted === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sorted === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item, idx) => (
          <Item
            key={idx}
            item={item}
            handleDelete={handleDelete}
            handleChecked={handleChecked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sorted} onChange={(e) => setSorted(e.target.value)}>
          <option value={"input"}>Sort by input order</option>
          <option value={"description"}>Sort by description</option>
          <option value={"packed"}>Sort by packed status</option>
        </select>
        <button onClick={() => handleClearList()} disabled={!items.length}>
          Clear items
        </button>
      </div>
    </div>
  );
}

export default ListOfItems;
