import React from 'react'
import {useState, useMemo} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [counts, setCounts] = useState(0)


  const incrementOne = () =>{
    setCount(count + 1)
  }

  const incrementTwo = () =>{
    setCounts(counts +1)
  }

  const isEven = useMemo(() =>{
    let i=0
    while(i< 2000000000) i++
    return  count % 2 === 0
            
  }, [count])
  return (
    <>
    <div>
        <h1 className='text-white bg-black text-8xl p-3 '>useMemo</h1>
        <button
        type="button"
        onClick={incrementOne}
        className="mt-4 rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        IncrementOne: {count}
        
      </button> {isEven ? 'Even' : 'Odd'}

     
    </div>
     <button
        type="button"
        onClick={incrementTwo}
        className="mt-4 rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        IncrementTwo: {counts}
        
      </button></>
  )
}

export default Counter