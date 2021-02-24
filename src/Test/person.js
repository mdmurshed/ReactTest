import React from 'react'
 
 function person(props) {
     let {name,age,skill} = props.person;
    return (
        
        <div>
            <h1> Hii, i am {name}.I am {age} years old. i Know {skill}</h1>
        </div>
    )
}
export default person
