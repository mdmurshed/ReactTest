import React,{useContext} from 'react'
import { CountContext } from './ComponentTest'

function ComponentD() {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentD
            <button onClick={()=>countContext.dispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.dispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD
