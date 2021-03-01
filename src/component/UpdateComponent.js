import React from 'react'

const UpdateComponent = OrigialComponent=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        
        incrementCount = ()=>{
            this.setState(prevState=>{
                return{count : prevState.count+1}
            })
        }
        render(){
            return <OrigialComponent name="murshed"></OrigialComponent>
        }
    }
    return NewComponent
}

export default UpdateComponent