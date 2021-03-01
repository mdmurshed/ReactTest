import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import {UserContext,ChannelContext} from './ComponentTest'


function ComponentB() {
    const user = useContext(UserContext)
    const channal = useContext(ChannelContext)
    
    return (
        <div>
            component B
            <br></br>
            {user} - {channal}
            <ComponentC/>
        </div>
    )
}

export default ComponentB
