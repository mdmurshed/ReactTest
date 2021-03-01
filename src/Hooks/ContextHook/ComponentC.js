import React from 'react'

import {UserContext,ChannelContext} from './ComponentTest'

function ComponentC() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user=>{
                    return(
                        <ChannelContext.Consumer>
                            {
                                channel=>{
                                    return <div>User context name: {user} and channal name :{channel} </div>
                                }
                            }
                        </ChannelContext.Consumer>
                    ) 
                   
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentC
