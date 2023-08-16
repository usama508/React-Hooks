import React, { useEffect, useState } from 'react'
import UseDocumentTitle from './UseDocumentTitle'

function DocTitleTwo() {
    const [count, setCount] =useState(0)

    // useEffect(() =>{
    //   document.title= `You clicked ${count} times`
    // })
    UseDocumentTitle(count)
  return (
    <div>
       <button
        type="button"
        className="rounded-full mt-4 text-center bg-indigo-600 p-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={()=>setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
  )
}

export default DocTitleTwo