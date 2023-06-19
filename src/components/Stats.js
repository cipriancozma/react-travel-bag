import React from "react";

function Stats({ items }) {
  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  let percentage = 0;
  if (totalItems > 0) {
    percentage = Math.round((totalPacked / totalItems) * 100);
  }
  console.log(percentage);
  console.log(items);

  return (
    <footer className="stats">
      You have {totalItems} {totalItems === 1 ? "item" : "items"} on your list
      and you already packed {totalPacked} ({percentage}%)
    </footer>
  );
}

export default Stats;
