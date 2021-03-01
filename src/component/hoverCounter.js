import React, { Component } from 'react'
import UpdateComponent from './UpdateComponent'

class hoverCounter extends Component {
    render() {
        return (
            <div>
                <h2 onMouseOver={this.incrementCount}>{this.props.name}  Hover {this.state.count} time</h2>
            </div>
        )
    }
}

export default UpdateComponent(hoverCounter)
