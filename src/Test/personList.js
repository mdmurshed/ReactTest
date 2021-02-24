import React from 'react'
import Person from "./person";
 function personList() {
    
    const persons =[
        {
            id:1 ,
            name:'Bruce',
            age :'30',
            skill: 'React'
        },
        {
            id:2 ,
            name:'Diana',
            age :'27',
            skill: 'Anguler'
        },
        {
            id:3 ,
            name:'Clark',
            age :'33',
            skill: 'Vue'
        }
    ]
    
    const personList = persons.map(person => <Person person = {person}/>)
    console.log(personList)
    return (
        <div>
            {personList}
        </div>
    )
}
export default personList
