/* eslint-disable default-case */
import React from 'react'
import { useReducer } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import {BiReset} from 'react-icons/bi'

const initialState = 0

const reducer = (state , action) =>{
    console.log()

    switch(action){
        case "increment":
            return state + 2
            case "decrement":
                return state - 2;
                 case "reset":
                    return initialState
                  
                    default:
                        throw new Error("Invalid Action");
                        





    }

}

function Simple() {
    const [count, dispatch] = useReducer(reducer , initialState)
  return (
    <div>
        <h1 className="text-8xl  bg-black text-white p-3">useReducer</h1>

        <h1 className='text-4xl mt-4'>Simple useReducer</h1>
        <h1 className='text-2xl mt-4'>Count: {count}</h1>
        <button
        type="button"
        onClick={()=>dispatch('increment')}
        className="mt-4 rounded-full bg-green-600 p-2 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={()=>dispatch('decrement')}
        className="ml-3 mt-4 rounded-full bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={()=>dispatch('reset')}
        className="ml-3 rounded-full bg-yellow-600 p-2 text-white shadow-sm hover:bg-yellow-500 mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
      >
        <BiReset className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}

export default Simple