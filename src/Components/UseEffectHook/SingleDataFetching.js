import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

function SingleDataFetching() {
    const [ id, setId] = useState('')
    const [posts , setPosts] =useState({})

    useEffect(()=>{
     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then(res=>{console.log(res)
        setPosts(res.data)
     }
     )
     .catch(err =>console.log(err))
    },[id])
  return (
    <>
    <div className="sm:flex sm:items-center mt-4">
    <div className="sm:flex-auto">
      <h1 className="text-4xl font-semibold leading-6 text-gray-500">Posts</h1>
      <p className="mt-4 text-2xl text-gray-500">
        Fetching Single Data from API!
      </p>
    </div>
   
  </div>
   
        <div className="mt-4 text-center">
        <input
          type="email"
          name="email"
          id="email"
          value={id}
          onChange={(e)=> setId(e.target.value)}
          className="block-sm w-80  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          placeholder="add id..."
        />
        <div className='mt-4'>{posts.title}</div>

      </div>
    </>
  )
}

export default SingleDataFetching