import React, { Component } from 'react'
 
class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"murshed",
        }
        console.log("LifeCycle B -constuctor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle B -getDerivedStateFromProps")
        return null
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("LifeCycle B -shouldComponentUpdate");
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycle B -getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifeCycle B -componentDidUpdate")
    }
    render() {
        console.log("lifeCycle B -render")
         return (
             <div>
                 Life cycle B
             </div>
         )
     }
    componentDidMount(){
        console.log("LifeCyle B -componentDidMount")
    }
 }
 
 export default LifeCycleB
 