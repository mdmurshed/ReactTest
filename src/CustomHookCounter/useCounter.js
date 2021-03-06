import {useState} from 'react'

function useCounter(count,value) {
    const [counter,setCouter] = useState(count)

    const increment = ()=>{
        setCouter(preVal => preVal + value)
    }
    const decrement = ()=>{
        setCouter(preVal => preVal - value)
    }
    const reset = ()=>{
        setCouter(count)
    }
    return [counter,increment,decrement,reset]
}

export default useCounter
