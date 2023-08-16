import React from 'react'
import {UserContext, ChannelContext} from './ComponentA'
function ComponentC() {
  return (
    <div>
        <UserContext.Consumer>
            {(user)=>{
                console.log(user)
                return( 
                <ChannelContext.Consumer>
                    {channel =>{
                        console.log(channel)
                        return(
                            <p> User Context Value is {user}, Channel Context Value is {channel}</p>
                            
                        )
                    }

                    }
                </ChannelContext.Consumer>
               )
              
            }}
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC