import React from 'react'

// const Greet =({name,heroName})=>{
const Greet =props=>{
    const {name,heroName} = props
    const names = ["murshed","alamin","tanvir"]
const temp = names.map((x,index)=><h1 key={index}>{x} and index {index}</h1>)
    return(
        <div>
            <h1>{name} and {heroName}</h1>
            {temp}
        </div>
    )
}

export default Greet;