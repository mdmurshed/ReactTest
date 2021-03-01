import React, { Component } from 'react'

export class eventBinding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            massage: "hello"
        }
        // binding with the constuctor is the best option right now
        // this.clickFunction = this.clickFunction.bind(this)
    }
    // clickFunction(){
    //     this.setState({
    //         massage: "goodBye"
    //     })
    //     console.log(this)
    // }

    clickFunction = () => {
        this.setState({
            massage: "goodBye"
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <h1>{this.state.massage}</h1>
                {/* <button onClick={this.clickFunction.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.clickFunction()}>Click</button> */}
                {/* <button onClick={this.clickFunction}>Click</button> */}
                <button onClick={this.clickFunction}>Click</button>
            </div>
        )
    }
}

export default eventBinding
