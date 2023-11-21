"use client";

// setup item list component
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  // initialize state variable
  const [sortBy, setSortBy] = useState("name");

  // sort the items (using the copiedItems)
  if (sortBy === "name") {
    items.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else if (sortBy === "category") {
    items.sort((a, b) => {
      return a.category.localeCompare(b.category);
    });
  }

  return (
    // create sort button
    <div>
      <div className="flex items-center gap-4">
        {" "}
        <h1 className="text-xl">Sort by:</h1>
        <button
          onClick={() => setSortBy("name")}
          className={`p-5 rounded-3xl m-2 w-36 text-center ${
            sortBy === "name"
              ? "bg-blue-500 text-white"
              : "bg-slate-300 dark:bg-neutral-900"
          }
        `}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-5 rounded-3xl m-2 w-36 text-center ${
            sortBy === "category"
              ? "bg-blue-500 text-white"
              : "bg-slate-300 dark:bg-neutral-900"
          }
        `}
        >
          Category
        </button>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect}
          />
        ))}
      </ul>
    </div>
  );
}
