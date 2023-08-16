import React from 'react'
import { useState } from 'react'

function UseStatefive() {
    const [items, setItem] = useState([])

    const addItem = ()=>{
        setItem([...items , {
            id:items.length,
            value:Math.floor(Math.random()* 100) + 1
        }])
    }
  return (
    <div>
        <h1 className='mt-4 text-4xl'>useState with an Array</h1>
        <button
        type="button"
        className="mt-4 rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        onClick={addItem}
      >
        Add the Items

      </button>
        <ul>
            {
                items.map((item)=>(
                    <li key={item.id}>{item.value}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default UseStatefive