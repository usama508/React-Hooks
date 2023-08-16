import React from 'react'
import ComponentD from './ComponentD'

function ComponentB() {
  return (
    <div>
        <h1 className='text-xl mt-4'>Component B</h1>
        <ComponentD/>
    </div>
  )
}

export default ComponentB