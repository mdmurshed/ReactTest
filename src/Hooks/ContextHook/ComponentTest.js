import React from 'react'
import ComponentA from './ComponentA'

export const UserContext = React.createContext("")
export const ChannelContext = React.createContext("")

function ComponentTest() {
    return (
        <div>
            <UserContext.Provider value={"murshed"}>
                <ChannelContext.Provider value={"TextCode"}>
                <ComponentA/>
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentTest
