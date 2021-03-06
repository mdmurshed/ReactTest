import React from 'react'
import useCounter from './useCounter'
import useCounterTest from './useCounterTest'
function CounterTwo() {
    // const [counter,increment,decrement,reset] = useCounter(5,1)
    const [counter,increment,decrement,reset] = useCounterTest(0)

    return (
        <div>
            <div>{counter}</div>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
            <button onClick = {reset}>Reset</button>
        </div>
    )
}

export default CounterTwo
