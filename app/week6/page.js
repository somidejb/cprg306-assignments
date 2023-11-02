"use client"
import React from 'react'
import {useState} from 'react'
import ItemList from './itemList'
import NewItem from './newItem'
import itemsData from './items.json'

const page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <div>
        <main className='bg-blue-700'>
            <h1 className='text-xl'>Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    </div>
  )
}

export default page