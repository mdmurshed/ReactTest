import React, { Component } from 'react'
import "./myStyle.css"
import styles from './app.module.css'
const heading={
    fontSize:'72px',
    color:'blue'
}

function style(props) {
    let className = props.primary?'primary':'';
    return (
        <div>
                <h1 className={`${className} font-xl`}>Stylesheets</h1>
                <h2 style={heading}>Helloo</h2>
                <h2 className={styles.success}>Success</h2>

        </div>
    )
}
export default style
