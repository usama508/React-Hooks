import React from 'react'
import { useContext } from 'react'
import { CountContext } from './combine/Reducers'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import {BiReset} from 'react-icons/bi'

function ComponentF() {
    const countContext = useContext(CountContext)
  return (
    <div>
         <button
        type="button"
        onClick={()=>countContext.dispatchContext('increment')}
        className="mt-4 rounded-full bg-green-600 p-2 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={()=>countContext.dispatchContext('decrement')}
        className="ml-3 mt-4 rounded-full bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={()=>countContext.dispatchContext('reset')}
        className="ml-3 rounded-full bg-yellow-600 p-2 text-white shadow-sm hover:bg-yellow-500 mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
      >
        <BiReset className="h-5 w-5" aria-hidden="true" />
      </button>
        
    </div>
  )
}

export default ComponentF