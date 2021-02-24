import React from 'react'

const withCounter = (WrappedComponent, increment ) =>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        increaseCounter=()=>{
            this.setState(prevState=>{
                // console.log(prevState)
                return{count: prevState.count+increment}
            })
        }
        render(){
            return <WrappedComponent count={this.state.count} increaseCounter={this.increaseCounter} {... this.props}/>
        }
    }
    return WithCounter
}
export default withCounter