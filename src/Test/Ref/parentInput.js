import React, { Component } from 'react'
import FRinput from './FRinput'

 class parentInput extends Component {
     constructor(props) {
         super(props)
         this.inputRef = React.createRef()
     }
    click=()=>{
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <FRinput ref={this.inputRef}/>
                <button onClick={this.click}> Focus button </button>
            </div>
        )
    }
}

export default parentInput
