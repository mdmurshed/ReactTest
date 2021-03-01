import React, { Component } from 'react'

class Greet extends Component{
    clickComponent(){
        console.log('clicked')
    }
    render(){
        const {name,heroName} = this.props
        return(
            <div>
                {name} and {heroName}
                
                 <button onClick={this.clickComponent}>Click</button>
            </div>
        )
    }
}

export default Greet;