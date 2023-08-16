import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function ButtonClickDataFetching() {
    const [post, setPost] = useState([])
    const [id, setId] = useState('')
    const [button, setButton] = useState('')

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${button}`)
      .then(res=>{
        console.log(res)
        setPost(res.data)
    })
    },[button])

    const handlebtn = () =>{
        setButton(id)
    }
  return (
    <>
        <div className="sm:flex sm:items-center mt-4">
    <div className="sm:flex-auto">
      <h1 className="text-4xl font-semibold leading-6 text-gray-500">Posts</h1>
      <p className="mt-4 text-2xl text-gray-500">
        Fetching Data on Button Click!
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
         <button
        type="button"
        onClick={handlebtn}
        className="rounded-full ml-2 bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
       Fetch data
      </button>
        <div className='mt-4'>{post.title}</div>

      </div>
    </>
  )
}

export default ButtonClickDataFetching