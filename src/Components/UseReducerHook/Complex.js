/* eslint-disable default-case */
import React, { useReducer } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import {BiReset} from 'react-icons/bi'

const initialState ={
    firstCounter : 0,
    secondCounter : 20
}

const reducer = (state, action) =>{
    switch(action.type){
        case "increment":
            return {...state ,firstCounter:state.firstCounter + action.value}
            case "decrement":
                return {...state ,firstCounter: state.firstCounter - action.value}
                case "increment2":
                    return {...state ,secondCounter:state.secondCounter + action.value}
                    case "decrement2":
                        return {...state ,secondCounter: state.secondCounter - action.value}
                case "reset":
                    return initialState
                    default:
                        return state
    }
}

function Complex() {
    const [count, dispatch] =useReducer(reducer,initialState)
  return (
    <div>
        
        <h1 className='text-4xl mt-4'>Complex useReducer with Object</h1>
        <h1 className='text-2xl mt-4'>FirstCount: {count.firstCounter}</h1>
        <h1 className='text-2xl mt-4'>SecondCount: {count.secondCounter}</h1>
        <button
        type="button"
        onClick={()=>dispatch({type:'increment', value:1})}
        className="mt-4 rounded-full bg-green-600 p-2 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={()=>dispatch({type:'decrement', value:1})}
        className="ml-3 mt-4 rounded-full bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={()=>dispatch({type:'increment2', value:5})}
        className="mt-4 ml-3 rounded-full bg-green-600 p-2 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        increment 5
      </button>
      <button
        type="button"
        onClick={()=>dispatch({type:'decrement2', value:5})}
        className="ml-3 mt-4 rounded-full bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
    decrement 5
      </button>
      <button
        type="button"
        onClick={()=>dispatch({type:'reset'})}
        className="ml-3 rounded-full bg-yellow-600 p-2 text-white shadow-sm hover:bg-yellow-500 mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
      >
        <BiReset className="h-5 w-5" aria-hidden="true" />
      </button>

    </div>
  )
}

export default Complex



