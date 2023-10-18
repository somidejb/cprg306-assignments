"use client"
import {useState} from 'react'
import React from 'react'

const newItem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, quantity, category);

    const item = {name, quantity, category};

    console.log(item);

    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");

  }
  return (
    <div>
      <form onSubmit = {handleSubmit} className='w-full max-w-sm'>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type= "text" value={name} onChange={e => setName(e.target.value)} required/>
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type= "number" min="1" max="99" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} required />
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">Category:</label>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default newItem