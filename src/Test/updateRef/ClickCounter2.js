import React, { Component } from 'react'

class ClickCounter2 extends Component {
    
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}> {this.props.name} Click {count} times</button>
            </div>
        )
    }
}

export default ClickCounter2