import { observer } from 'mobx-react'
import React, { Component, Fragment } from 'react'

// 父子组件传递, 只要使用@observer装饰器就行, 使用值就和porps传递一样
@observer
export default class Cls extends Component {
    render() {
        return (
            <Fragment>
                <h2>{this.porps.appStore.num}</h2>
                <h2>{this.porps.appStore.number}</h2>
                <h2>{this.porps.appStore.counter}</h2>
                <button onClick={() => this.porps.appStore.increment(5)}>increment</button>
                <button onClick={() => this.porps.appStore.decrement(10)}>decrement</button>
            </Fragment>
        )
    }
}
