import React, { useState } from "react";

function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity("1");
    setCategory("Produce");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <section>
      <div className="grid place-content-left m-7">
        <form onSubmit={handleSubmit} className="flex flex-row gap-3">
          <input
            required
            onChange={handleNameChange}
            value={name}
            placeholder="Product Name"
            className="bg-slate-300 dark:bg-neutral-900 rounded-xl p-3 flex-auto sm:w-2/5 md:w-1/2 lg:w-1/3 xl:w-1/4"
          />
          <input
            required
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="99"
            onChange={handleQuantityChange}
            value={quantity}
            className="bg-slate-300 dark:bg-neutral-900 rounded-xl p-3 w-16 flex-auto"
          />
          <select
            required
            onChange={handleCategoryChange}
            value={category}
            className="bg-slate-300 dark:bg-neutral-900 rounded-xl p-3 w-56 flex-auto"
          >
            <option value disabled>
              Category
            </option>
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

          <button
            type="submit"
            className="bg-slate-400 dark:bg-neutral-600 rounded-full p-3 w-10"
          >
            +
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewItem;