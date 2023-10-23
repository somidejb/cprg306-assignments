"use client"
import React from 'react'
import {useState} from 'react'
import Item from './item'
import items from './items.json'

const itemList = () => {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    }
    );
  return (
    <div>
        <div className="mb-4">
            <button onClick={() => setSortBy("name")}
            className={`py-2 px-4 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
            Sort by Name
            </button>

            <button onClick={() => setSortBy("category")}
            className={`py-2 px-4 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
            Sort by Category
            </button>
        </div>

        <ul>
            {sortedItems.map((item) => (
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
            ))}
        </ul>
    </div>
  )
}

export default itemList