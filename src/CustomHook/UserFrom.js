import React from 'react'
import useInput from './useInput'

function UserFrom() {

    const [firstName, BindFirstName, resetFristName] = useInput('')
    const [lastName, BindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello  ${firstName} - ${lastName}`)
        resetFristName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        {...BindFirstName}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        {...BindLastName}
                    />
                </div>
                <div>
                    <button> Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UserFrom
