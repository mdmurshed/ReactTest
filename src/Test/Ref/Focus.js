import React, { Component } from 'react'
import Input from './Input'


class Focus extends Component {
    constructor(props) {
        super(props)
        this.componentDidRef = React.createRef()
    }
    clickHandler = ()=>{
        this.componentDidRef.current.focusInput();
    }
    
    render() {
        return (
            <div>
            <Input ref = {this.componentDidRef}></Input>
            <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default Focus
