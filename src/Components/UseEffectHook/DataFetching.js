import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]
function DataFetching() {
    const [post, setPost] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=> {
            console.log(res)
            setPost(res.data)
           
        })
        .catch((err)=>{
            console.error("Error", err)
        });
    })
    

  return (
    // <div className='mt-4'>
    //     <h1 className='mt-4 text-4xl'>Fetching data from API</h1>
    //     <ul  className='mt-4'>
    //         {
    //            post.map((items)=>(
    //             <>
    //                <li key={items.id}>{items.id}- {items.title}   </li>
                   
    //            </>)) 
    //         }
    //     </ul>

    // </div>

    <div className="px-4 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center mt-4">
      <div className="sm:flex-auto">
        <h1 className="text-4xl font-semibold leading-6 text-gray-500">Posts</h1>
        <p className="mt-4 text-2xl text-gray-500">
          Fetching Data from API!
        </p>
      </div>
     
    </div>
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="text-center py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500 sm:pl-0">
                 Id
                </th>
                <th scope="col" className="text-center px-3 py-3.5 text-left text-sm font-semibold text-gray-500">
                  Title
                </th>
               
               
               
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {post.map((person) => (
                <tr key={person.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-0">
                    {person.id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
               
                  
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DataFetching