import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    
    componentDidMount(){
        // axios is the promace based library
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log("post responce:")
            console.log(response)
            this.setState({posts :response.data})
        }).catch(error=>{
            console.log(error)
        }) 
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                list of post
                {
                    posts.length? posts.map(post=><div key={post.id}>{post.title}</div>):null
                }
            </div>
        )
    }
}

export default PostList
