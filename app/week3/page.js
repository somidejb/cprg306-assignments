import React from 'react'
import ItemList from './itemList'
const page = () => {
  return (
    <div>
        <main className='bg-blue-700'>
            <h1 className='text-xl'>Shopping List</h1>
            <ItemList/>
        </main>
    </div>
  )
}

export default page