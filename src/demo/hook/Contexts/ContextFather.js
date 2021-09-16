import React, { Fragment } from 'react'
import ContextChild from './ContextChild'
import { ThemeContext } from './index'

function Contexts() {
    const themes = {
        title2: {
            text1: "如何使用",
            text2: "才是正确用法"
        }
    }
    return (
        <Fragment>
            <ContextChild />
            <ThemeContext.Provider value={themes.title2}>
                <ContextChild />
            </ThemeContext.Provider>
        </Fragment>
    )
}

export default Contexts
