import React from 'react'

function Columns() {
    const item = ["Name","Age","info"]
    return (
       <React.Fragment>
           {
               item.map((item,index)=>(
                   <React.Fragment key={index}>
                       {/* <h1>{index}</h1> */}
                       <td>{item}</td>
                    </React.Fragment>
               ))
           }
       </React.Fragment>
    )
}

export default Columns
