import React from 'react'

const Item = ({name, quantity, category}) => {
  return (
    <div>
        <li>
            <ul className='bg-purple-500 p-4 ml-5 mr-60 mb-5'>
                <h2>{name}</h2>
                <p>Buy {quantity} in {category}</p>
            </ul>
        </li>
    </div>
  )
}

export default Item;