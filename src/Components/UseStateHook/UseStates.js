import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

function UseState() {
    const [count , setCount] = useState(0)
   

    const btn_handler = () =>{
        setCount((c)=> c+1)
    }

   
  return (
    <div>
<div className='bg-black'>
  <h1 className='p-3 text-8xl  text-white'>useState</h1>
</div>


    
      <h1 className='text-4xl mt-4'>Counting</h1>
        <h1 className='mt-4 text-center text-2xl'>{count}</h1>
        <button
        type="button"
        className="rounded-full mt-4 text-center bg-indigo-600 p-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={btn_handler}
      >
        <AiOutlinePlus className="h-5 w-5 " aria-hidden="true" />
      </button>
    </div>
  )
}

export default UseState