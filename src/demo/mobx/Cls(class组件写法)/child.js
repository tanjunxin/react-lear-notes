import { inject, observer } from 'mobx-react'
import React, { Component, Fragment } from 'react'

// 跨组件传递需要使用@inject("传递下来的变量名")装饰器及@observer一起, 然后通过解构this.props使用
@inject("clsStore")
@observer
export default class Child extends Component {
    render() {
        const { store } = this.props
        return (
            <Fragment>
                <h2>{store.num}</h2>
                <h2>{store.number}</h2>
                <h2>{store.counter}</h2>
                <button onClick={() => store.increment(5)}>increment</button>
                <button onClick={() => store.decrement(10)}>decrement</button>
            </Fragment>
        )
    }
}
