import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import {BiReset} from 'react-icons/bi'
import useCounter from './useCounter'

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(0,2)
  return (
    <div>
       <h1 className='mt-4 text-4xl'>useCounter Hook</h1>
        <h1 className='mt-4 text-2xl'>Count:{count}</h1>
        <button
        type="button"
        className="mt-4 rounded-full bg-green-600 p-4 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        onClick={increment}
      >
        <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="mt-4 ml-4 rounded-full bg-red-600 p-4 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        onClick={decrement}
      >
        <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="mt-4 ml-4 rounded-full bg-yellow-600 p-4 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
       onClick={reset}
      >
        <BiReset className="h-5 w-5 " aria-hidden="true" />
       
      </button>
    </div>
  )
}

export default CounterOne