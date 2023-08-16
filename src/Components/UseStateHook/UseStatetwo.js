import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import {BiReset} from 'react-icons/bi'

function UseStatetwo() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1 className='text-4xl mt-4'>Increment,Decrement&Reset</h1>
        <h1 className='mt-4 text-2xl'>Count: { count }</h1>
        <div className='mt-4'>
  <button
        type="button"
        className="rounded-full bg-green-600 p-4 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        onClick={()=> setCount((c)=> c + 1)}
      >
        <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="ml-4 rounded-full bg-red-600 p-4 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        onClick={()=> setCount((c)=> c - 1)}
      >
        <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="ml-4 rounded-full bg-yellow-600 p-4 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
       onClick={()=> setCount(0)}
      >
        <BiReset className="h-5 w-5 " aria-hidden="true" />
       
      </button>
        </div>
      
       
      
        
    </div>
  )
}

export default UseStatetwo