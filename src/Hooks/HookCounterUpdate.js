import React, { useState } from 'react'

function HookCounterUpdate() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)
    const incrementFive = ()=>{
        for(let i = 0;i<5;i++){
            setCount(preCount => preCount + 1)
        }
    }
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount(preCount => preCount+1)}>Increment</button>
            <button onClick={()=>setCount(preCount => preCount-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment Five</button>
        </div>
    )
}

export default HookCounterUpdate
