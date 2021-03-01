import React, { useState,useEffect } from 'react'

function HookEffectCounter() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    // useEffect runs after every render
    // useEffect(()=>{
    //     console.log("useEffect -Updateing document title")
    //     document.title = `You Clicked ${count}`
    // })
    // condition for the second peramiter as a array
    useEffect(()=>{
        console.log("useEffect -Updateing document title")
        document.title = `You Clicked ${count}`
    },[count])

    
    // useEffect(()=>{
    //     console.log("useEffect -Updateing document title")
    //     document.title = `You Clicked ${count}`
    // },[count,name])

    
    

    return (
        <div>
            <input type='text' value={name} onChange={e=>
            setName(e.target.value)    
        }/>
            <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookEffectCounter
