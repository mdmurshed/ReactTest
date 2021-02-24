import React, { Component } from 'react'

class refDemo extends Component {
    constructor(props) {
        super(props)
    
        // this.inputRef = React.createRef();
        // this.cbRef= React.createRef()
        this.cbRe = null
        this.setCbRef = (element)=>{
            this.cbRe = element
            console.log(element)
        }
    }
    componentDidMount(){
        // this.inputRef.current.focus();
        console.log("componentDidMount : ");
        // console.log(this.inputRef)
        if(this.cbRe){
            this.cbRe.focus();
        }
    }
    clickBtn = ()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        console.log("render")
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <input type='text' ref={this.setCbRef}/>
                <button onClick={this.clickBtn}>Click</button>
            </div>
        )
    }
}

export default refDemo
