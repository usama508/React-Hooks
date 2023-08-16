import React from 'react'
import { useState, useEffect } from 'react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

function UseEffects() {
    const [count, setCount] = useState(0)
    useEffect(() => {
     document.title=`Your Click ${count} times`
    }, )
    
  return (
    <div>
        <div className='bg-black'>
            <h1 className='p-3 text-8xl text-white'>useEffect</h1>
            </div>
            <h1 className='text-4xl mt-4'>useEffect after render</h1>
            <button
        type="button"
        className="mt-4 inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={()=>setCount(count + 1)}
      >
        <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Click {count} times
      </button>
            
    </div>
  )
}

export default UseEffects