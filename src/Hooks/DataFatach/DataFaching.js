import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFaching() {
    const [posts,setPost] = useState({})
    const [id,setId] = useState(1)
    const [btn,setBtn] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
             console.log(err)
        })
    },[btn])
    const handleClick = ()=>{
        setBtn(id)
    }

    return (
        <div>
            <input type="text" value = {id} onChange={e =>  setId(e.target.value)}/>
            <button type = "button" onClick={handleClick}>Fatch Post</button>
            <p>{posts.title}</p>
            {/* <ul>
                {
                    posts.map(post=>(<li key = {post.id}> {post.title}</li>))
                }
            </ul> */}
        </div>
    )
}

export default DataFaching
