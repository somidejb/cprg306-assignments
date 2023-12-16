"use client"
import React from 'react'
import {useState} from 'react'
import Item from './item'

const itemList = ({items}) => {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    }
    );

    const handleSortByName = () => {
        setSortBy("name");
    };

    const handleSortByCategory = () => {
        setSortBy("category");
    };
    
  return (
    <div>
        <div className="mb-4">
            <button onClick={handleSortByName}
            className={`py-2 px-4 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
            Sort by Name
            </button>

            <button onClick={handleSortByCategory}
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