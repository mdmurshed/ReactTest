import {useState} from 'react'

function useCounterTest(count) {
    const [counter,setCouter] = useState(count)

    const increment = (value)=>{
        setCouter(preVal => preVal + value)
    }
    const decrement = (value)=>{
        setCouter(preVal => preVal - value)
    }
    const reset = ()=>{
        setCouter(count)
    }
    return [counter,increment,decrement,reset]
}

export default useCounterTest
