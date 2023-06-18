import React from "react";
// import { items } from "../data";
import Item from "./Item";

function ListOfItems({ items, handleDelete }) {
  return (
    <div className="list">
      <ul>
        {items.map((item, idx) => (
          <Item key={idx} item={item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default ListOfItems;
