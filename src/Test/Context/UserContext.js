import React from 'react'

// const UserContext = React.createContext()
// default provider is for the peramitar  
const UserContext = React.createContext("Not define")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}
export default UserContext