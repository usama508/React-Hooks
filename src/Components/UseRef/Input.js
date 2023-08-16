import React from 'react'
import { useEffect, useRef } from 'react'

function Input() {
   const inputRef =useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })
  return (
    <div>
        <h1 className='bg-black text-white p-3 lg:text-8xl md:text-8xl sm:text-4xl '>useRef</h1>
          <input
          type="email"
          name="email"
          id="email"
         ref={inputRef}
          className=" mt-4  block-sm md:w-80 lg:w-96  sm:w-32 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="  Muhammad Ali"
        />
    </div>
  )
}

export default Input