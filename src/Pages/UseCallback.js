import React from 'react'
import {useState, useCallback} from 'react'
import Title from '../Components/UseCallbackHook/Title'
import Count from '../Components/UseCallbackHook/Count'
import Button from '../Components/UseCallbackHook/Button'

function UseCallback() {
    const [age, setAge] = useState(14)
    const [salary, setSalary] = useState(25000)

    const incrementAge = useCallback(()=>{
        setAge(age + 1)
    },[age])

    const incrementSalary =useCallback(() =>{
        setSalary(salary + 5000)
    }, [salary]) 
  return (
    <div>
        <Title/>
        <Count text='Age' count={age}/>
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text='Salary' count={salary}/>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
        
    </div>
  )
}

export default UseCallback