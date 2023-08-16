import React from 'react'

function Button({handleClick, children}) {
    console.log(`Increment Age : ${children}`)
  return (
    
    <button onClick={handleClick}
    type="button"
    className="mt-4 rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
     {children}
  </button>
  )
}

export default React.memo(Button)