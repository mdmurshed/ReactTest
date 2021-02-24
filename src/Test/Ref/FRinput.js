import React from 'react'
import reactDom from 'react-dom'

// function FRinput() {
//     return (
//         <div>
//             <input type="text"></input> 
//         </div>
//     )
// }


const FRInput =React.forwardRef ((props,ref)=>{
    console.log("props")
    console.log(props)
    console.log("ref")
    console.log(ref)
    return (
        <div>
            <input text="type" ref={ref}></input>
        </div>
    )
})

export default FRInput
