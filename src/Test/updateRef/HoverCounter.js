import React, { Component } from 'react'
import withCounter from './UpdateRef'
class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // increaseCounter=()=>{
    //     this.setState(prevState=>{
    //         console.log(prevState)
    //         return{count: prevState.count+1}
    //     })
    // }
    render() {
        console.log("hover:")
        console.log(this.props.count)
        return (
            <div>
                <h1 onMouseOver={this.props.increaseCounter}>{this.props.name} Hover {this.props.count} counter</h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter,5)
