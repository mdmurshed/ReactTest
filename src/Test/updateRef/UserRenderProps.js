import React, { Component } from 'react'

class UserRenderProps extends Component {
    render() {
        return (
            <div>
                {this.props.render(false)}
            </div>
        )
    }
}

export default UserRenderProps
