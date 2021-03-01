import React, { Component } from 'react'
import UpdateComponent from './UpdateComponent'
class ClickCounter extends Component {
    

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>{this.props.name}  Click {this.state.count} time</button>
            </div>
        )
    }
}

export default UpdateComponent(ClickCounter)
