"use client"
import React from 'react'
import {useState} from 'react'
import ItemList from './itemList'
import NewItem from './newItem'
import itemsData from './items.json'
import MealIdeas from "./meal-ideas"

export default function Home() {
  const [items, setItems] = useState(itemsData); // Initialize items with data from items.json
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const ingredient = itemName
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/gi, "");
    setSelectedItem(ingredient);
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <h1 className="text-4xl">My Shopping List</h1>
      </div>
      <br />
      <div className="flex">
        <div className="w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItem} />
        </div>
      </div>
    </main>
  );
}