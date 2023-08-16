import React from 'react'
import { useState, useEffect, useRef } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(()=>{
         intervalRef.current = setInterval(()=>{
            console.log('useEffect')
            setTimer(prevState=> prevState+1);
            }, 2500 );
            // eslint-disable-next-line react-hooks/exhaustive-deps
            return () => {
                clearInterval(intervalRef.current);
            }



            }, [])
           
                  
        return (
    <div>
        <h3 className='mt-4 text-4xl'>Timer- {timer}</h3>
        <button
        type="button"
        className="rounded-full mt-4 text-center bg-indigo-600 p-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={()=> clearInterval(intervalRef.current)}
      >
        Clear Timer
      </button>
      
    </div>
  )
}

export default HookTimer