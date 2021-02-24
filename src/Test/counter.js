import React, { Component } from 'react'

class Greet extends Component {

    constructor() {
        super()
        this.state = {
            var: 0,
        }
    }
    count() {
        // this.setState({
        //     var : this.state.var + 1,
        // },()=>{
        //     console.log( "CallBack function :"+this.state.var);
        // })
        // ------------
        this.setState((prevState)=>({
            var : prevState.var + 1
        }),()=>{
            console.log(this.state.var)
        })
        // this.setState((prevState)=>({
        //     var : (()=>{ prevState.var}) + 1
        // }),()=>{
        //     console.log(this.state.var)
        // })
    }
    count5(){
        this.count();
        this.count();
        this.count();
        this.count();
        this.count();
    }


    render() {
        return (
            <div>
                <h1 >{this.state.var}</h1>
                <button onClick={()=>this.count5()}  > counter</button>

            </div>
        )
    }

}


export default Greet;