import React, { Component } from 'react'
import withCounter from './UpdateRef'
class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         count:0 
    //     }
    // }
    // increaseCounter=()=>{
    //     this.setState(prevState=>{
    //         console.log(prevState)
    //         return{count: prevState.count+1}
    //     })
    // }
    render() {
        return (
            <div>
                <button onClick={this.props.increaseCounter}>{this.props.name} {this.props.age} Click {this.props.count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter,10)
