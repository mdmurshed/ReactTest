import React,{useState} from 'react'

function HookCounter() {

    const [count,setCount] = useState(5)

    return (
        <div>
            <button onClick={()=>setCount(0)}>Count {count}</button>
        </div>
    )
}

export default HookCounter