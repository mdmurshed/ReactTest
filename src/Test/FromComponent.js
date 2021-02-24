import React, { Component } from 'react'

class FromComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            comments: "",
            topic: ""
        }
    }
    nameChange = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(this.state.username)
    }
    commentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
        console.log(this.state.comments)
    }
    topicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
        console.log(this.state.topic)
    }
    subMIT = (event) => {
        alert(`${this.state.username} ,${this.state.comments} and ${this.state.topic}`)
    }

    render() {
        return (
                <form onSubmit={this.subMIT}>
                    <div>
                        <h1>From Component</h1>
                        <input type="text" value={this.state.username} onChange={this.nameChange} /><br></br>
                        <input type="text" value={this.state.comments} onChange={this.commentsChange} />
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.topicChange} >
                            <option value="react"> react</option>
                            <option value="anguler"> anguler</option>
                            <option value="veu"> veu</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
        )
    }
}

export default FromComponent
