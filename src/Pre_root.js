import React from 'react'
import ReactDom from 'react-dom'

function PreRoot() {
    return ReactDom.createPortal(
     <h1>Portals demo</h1>,
    document.getElementById('preRoot')
    )
}

export default PreRoot
