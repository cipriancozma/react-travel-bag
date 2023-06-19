import React from "react";

function Stats({ items }) {
  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentage = (totalPacked / totalItems) * 100;

  return (
    <footer className="stats">
      You have {totalItems} {totalItems === 1 ? "item" : "items"} on your list
      and you already packed {totalPacked} ({percentage}%)
    </footer>
  );
}

export default Stats;
