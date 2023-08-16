import React from 'react'
import { useState } from 'react'

function UseStateThree() {
    const [count , setCount] = useState(5)
  return (
    <div>
        <h1 className='text-4xl mt-4'>Increment Previous State</h1>
        <h1 className='text-2xl mt-4'>{count}</h1>

        <button
        type="button"
        className="mt-4 rounded-full bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() =>setCount((prev)=> prev+ count)}
      >
      Increment
      </button>
        <button ></button>
    </div>
  )
}

export default UseStateThree