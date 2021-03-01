import React, { useState } from 'react'

function HookCount3() {
    const [name,setName] = useState({firstName:"",lastName:''})
    const changeFirst = e=>setName({...name,firstName: e.target.value})
    const changeLast = e=>setName({...name,lastName: e.target.value})
    
    return (
        <form>
            <input type="text" value = {name.firstName} onChange={changeFirst}/>
            <input 
            type="text" 
            value = {name.lastName} 
            onChange={changeLast}
            />
            
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HookCount3
