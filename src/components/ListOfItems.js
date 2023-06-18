import React from "react";
// import { items } from "../data";
import Item from "./Item";

function ListOfItems({ items, handleDelete, handleChecked }) {
  return (
    <div className="list">
      <ul>
        {items.map((item, idx) => (
          <Item
            key={idx}
            item={item}
            handleDelete={handleDelete}
            handleChecked={handleChecked}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListOfItems;
