import React from "react";

export default function Item({ item, quantity, category, onSelect }) {
  return (
    <div
      className="bg-slate-300 dark:bg-neutral-900 rounded-xl p-4 m-2 hover:bg-blue-500 hover:text-white transition duration-300"
      onClick={() => onSelect(item)}
    >
      <h3 className="text-lg font-bold">{item}</h3>
      <p>Qty: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
}