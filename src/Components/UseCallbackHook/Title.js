/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'

function Title() {
  return (
    <div>
        <h1 className="text-8xl p-3 bg-black text-white">useCallback</h1>
    </div>
  )
}

export default  React.memo(Title)