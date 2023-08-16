/* eslint-disable default-case */
import React, { useReducer } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import {BiReset} from 'react-icons/bi'

const initialState = 4

const reducer = (state, action) =>{
    switch(action){
        case "INCREMENT":
           return state + 1
           case "DECREMENT" :
            return state - 1
            case "RESET" :
            return initialState
            default:
                return state
    }
}

function Multiple() {
   const [count , dispatch] = useReducer(reducer, initialState)
   
   const [count2 , dispatch2] = useReducer(reducer, initialState)
  return (
    <div>
          <h1 className='text-4xl mt-4'>Multiple useReducer</h1>
        <h1 className='text-2xl mt-4'>Count: {count}</h1>
        <h1 className='text-2xl mt-4'>Count2: {count2}</h1>
        <button
        type="button"
        onClick={()=>dispatch('INCREMENT')}
        className="mt-4 rounded-full bg-green-600 p-2 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={()=>dispatch('DECREMENT')}
        className="ml-3 mt-4 rounded-full bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={()=>dispatch2('INCREMENT')}
        className="mt-4 ml-3 rounded-full bg-green-600 p-2 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={()=>dispatch2('DECREMENT')}
        className="ml-3 mt-4 rounded-full bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={()=>dispatch2('RESET')}
        className="ml-3 rounded-full bg-yellow-600 p-2 text-white shadow-sm hover:bg-yellow-500 mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
      >
        <BiReset className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}

export default Multiple