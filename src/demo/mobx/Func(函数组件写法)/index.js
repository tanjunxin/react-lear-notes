import React, { Fragment } from 'react'
import { observer } from 'mobx-react'

// 父子传递
// observer(观察者), 组件要知道observable修饰的state的变化的情况同时做出变化, 就要通过observer修饰组件, 才能同步渲染
const Func = (observer((porps) => {
    return (
        <Fragment>
            <h2>{porps.funcStore.num.get()}</h2>
            <h2>{porps.funcStore.number.get()}</h2>
            <h2>{porps.funcStore.counter.get()}</h2>
            <button onClick={() => porps.funcStore.increment(5)}>increment</button>
            <button onClick={() => porps.funcStore.decrement(10)}>decrement</button>
        </Fragment>
    )
}))

export default Func
