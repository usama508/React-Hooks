import React from 'react'
import ComponentB from './ComponentB'
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function ComponentA() {

  
  return (
    <div>
      <UserContext.Provider value={'Usama'}>
        <ChannelContext.Provider value={'Rasheed'}>
           <ComponentB />
        </ChannelContext.Provider>
       
        </UserContext.Provider >
    </div>
  )
}

export default ComponentA