import React, { Component, Fragment } from 'react'
import { MyContext } from './Context'


export default class Son extends Component {
    // 接收跨组件传递的context(方法一)
    static contextType = MyContext
    render() {
        let sonValue = this.context
        // console.log(sonValue);
        return (
            <Fragment>
                {sonValue.value ? <h2>{sonValue.value}</h2> : <h2>{sonValue.test1}</h2>}
                <h2>{sonValue.text}</h2>
            </Fragment>
        )
    }
}

// 接收跨组件传递的context(方法二)
// Son.contextType = MyContext