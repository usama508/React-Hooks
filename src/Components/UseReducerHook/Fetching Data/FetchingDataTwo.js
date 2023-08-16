import axios from 'axios'
import React from 'react'
import { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    post: {},
    error: ''
}

const reducer = (state , action) =>{
    switch (action.type) {
        case 'Fetching_Success':
            
            return {
                loading: false,
                post: action.payload,
                error: ""
            }

            case 'Error_Success':
            
            return {
                loading: false,
              error: 'Something went Wrong!'
            }
        
            
    
        default:
        return  state
    }
}



function FetchingDataTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res =>{
        dispatch({type:'Fetching_Success', payload: res.data})
    }).catch(error =>{
        dispatch({type:'Error_Success'})
    })
})
  return (
    <div>
        <h1 className='text-4xl mt-4 mb-4'>Fetching Data with useReducer</h1>
        {state.loading ? 'loading...' : state.post.title}
        {state.error ? state.error : null}
        
        </div>
  )
}

export default FetchingDataTwo