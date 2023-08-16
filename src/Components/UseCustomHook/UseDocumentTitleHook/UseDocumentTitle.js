import React, { useEffect } from 'react'

function UseDocumentTitle(count) {
  useEffect(()=>{
    document.title = `Count: ${count}`

  })
}

export default UseDocumentTitle