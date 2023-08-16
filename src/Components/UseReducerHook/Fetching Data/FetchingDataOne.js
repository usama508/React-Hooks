import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function FetchingDataOne() {
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState('')
    const [post , setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/100')
        .then(res=> {
            setLoading(false)
            setPost(res.data)
            setError('')
        }
            ).catch(error=>{
                setLoading(false)
                setError(error,'Something Wrong!')
            })
      
    })
    
  return (
    <div>
        <h1 className='text-4xl mt-4 mb-4'>Fetching data with useState</h1>
        { loading ? 'loading...' : post.title}
        { error ? ' Something Wrong!': null}
    </div>
  )
}

export default FetchingDataOne