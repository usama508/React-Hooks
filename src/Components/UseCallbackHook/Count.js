import React from 'react'

function Count({text,count}) {
    console.log(`${text}:${count}`)
  return (
    <div>
        <h1 className='mt-4'>{text}: {count}</h1>
    </div>
  )
}

export default React.memo(Count)