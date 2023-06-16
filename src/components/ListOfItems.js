import React from "react";
import { items } from "../data";
import Item from "./Item";

function ListOfItems() {
  return (
    <div className="list">
      <ul>
        {items.map((item, idx) => (
          <Item key={idx} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ListOfItems;
