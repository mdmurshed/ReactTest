import React, { useState } from 'react'

function HookCounter4() {
    const [items,setItem] = useState([])
    const addItem = ()=>{
        setItem([...items,{
            id:items.length,
            value: "any"
        }])
    }

    // const addItem = ()=>{
    //     setItem([...items,{
    //         id:items.length,
    //         value: 10
    //     }])
    // }
    return (
        <div>
            <button onClick = {addItem}>Add a number</button>
            <ul>
                {
                   items.map(item=>(
                   <li key = {item.id}>{item.value}</li>))
                }
            </ul>
        </div>
    )
}

export default HookCounter4
