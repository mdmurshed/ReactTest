import React, { Component, PureComponent } from 'react'
import MenoCom from './MenoCom'
import PureCom from './PureCom'
import RegularCom from './RegularCom'

class parentCom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"alamin"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "karim"
            })
        },2000)
    }
    // shouldComponentUpdate(){
    //     return false;
    // }

    render() {
        console.log("***parent component");
        return (
            <div>
                parent component
                {/* <RegularCom name={this.state.name}></RegularCom>
                <PureCom name={this.state.name}></PureCom> */}
                <MenoCom name={this.state.name}/>
            </div>
        )
    }
}

export default parentCom
