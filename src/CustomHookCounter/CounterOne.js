import React, { useState } from 'react'
import useCounter from './useCounter'

function CounterOne() {
    const [counter,increment,decrement,reset] = useCounter(0,5)
    

    return (
        <div>
            <div>{counter}</div>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
            <button onClick = {reset}>Rese</button>
        </div>
    )
}

export default CounterOne
