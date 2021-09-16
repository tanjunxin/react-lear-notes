import React, { useContext } from 'react'
import { ThemeContext } from './index'

function ContextSon() {
    const theme = useContext(ThemeContext)
    console.log(theme)
    const text = theme === "useContext" ? theme : `${theme.text1}${theme.text2}`
    return (
        <h2>{text}</h2>
    )
}

export default ContextSon
