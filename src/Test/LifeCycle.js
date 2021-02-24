 import React, { Component } from 'react'
 import LifeCycleB from "./LifeCycleB"

class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"murshed"
        }
        console.log("LifeCycle A -constuctor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle A -getDerivedStateFromProps")
        return null
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("LifeCycle A -shouldComponentUpdate");
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycle A -getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifeCycle A -componentDidUpdate")
    }

    changeValue = ()=>{
        this.setState({
            name:"code evalution"
        })
    }

    render() {
        console.log("lifeCycle A -render")
         return (
             <div>
                 <div><h1>Life cycle A</h1></div>
                 <button  onClick={this.changeValue}>change</button>
                 <LifeCycleB></LifeCycleB>
             </div>
         )
     }
    componentDidMount(){
        console.log("LifeCyle A -componentDidMount")
    }
 }
 
 export default LifeCycle
 