import React, { useEffect } from 'react'
import { useState } from 'react'
import UseDocumentTitle from './UseDocumentTitle'

function DocTitleOne() {
    const [count, setCount] = useState(0)

    // useEffect(()=>{
    //   document.title= `Document Title ${count}`
    // })
    UseDocumentTitle(count)
  return (
    <div>
      <h1 className='p-3 bg-black text-white text-8xl'>useCustom</h1>
      <h1 className='text-4xl mt-4'>useDocumentTitle Hook</h1>
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

export default DocTitleOne