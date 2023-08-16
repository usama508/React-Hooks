import React from 'react'
import { useContext } from 'react'
import { UserContext, ChannelContext } from './ComponentA'

function ComponentB() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div className='mt-4 text-2xl'>
        {user} {channel}
    </div>
  )
}

export default ComponentB