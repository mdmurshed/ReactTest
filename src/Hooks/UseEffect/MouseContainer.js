import React, { useState } from 'react'
import Hookmouse from './Hookmouse'

function MouseContainer() {
    const [display,setDisplay] = useState(true)

    return (
        <div>
            <button onClick = {()=>setDisplay(!display)}>Toggle display</button>
            {display && <Hookmouse/>}
        </div>
    )
}

export default MouseContainer
