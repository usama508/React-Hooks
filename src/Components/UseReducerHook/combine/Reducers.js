import React, { useReducer } from 'react'
import ComponentA from '../ComponentA'
import ComponentB from '../ComponentB'
import ComponentC from '../ComponentC'

export const CountContext = React.createContext()

const initialState = 0

const reducer = (state, action) =>{

    switch (action) {
        case 'increment':
            return state + 2
            case 'decrement':
                return state - 2
                case 'reset':
                    return initialState
            
            
            
    
        default:
         return  state
    }

}

function Reducers() {
   const [count , dispatch ]= useReducer(reducer,initialState)
  return (
<>
    <h1 className='text-4xl mt-4'>useReducer with useContext</h1>
    
 <CountContext.Provider value={{countContext: count , dispatchContext: dispatch }}>
     <div>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
    </div>
 </CountContext.Provider>
   </>
  )
}

export default Reducers