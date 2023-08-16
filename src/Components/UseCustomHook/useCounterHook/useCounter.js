import {useState} from 'react'

function useCounter(initialValue,value) {
    const [count, setCount] = useState(initialValue)

    const increment = () =>{
        setCount((c) => c + value)
    }

    const decrement = () =>{
        setCount((c) => c - value)
    }

    const reset = () =>{
        setCount(initialValue)
    }
  return (
    [count, increment, decrement, reset]
  )
}

export default useCounter