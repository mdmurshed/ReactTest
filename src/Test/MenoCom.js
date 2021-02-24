import React from 'react'

function MenoCom({name}) {
    console.log("rendering meno component")
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MenoCom)
