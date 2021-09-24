import React, { Fragment } from 'react'
import { observer, inject } from 'mobx-react'

// 跨组件传递
// 不但要给observer修饰组件还需要inject修饰组件, inject("传递下来的变量名"), 注意变量名的编写
const Child = inject("appStore")(observer(({ appStore }) => {
    return (
        <Fragment>
            <h2>{appStore.num.get()}</h2>
            <h2>{appStore.number.get()}</h2>
            <h2>{appStore.counter.get()}</h2>
            <button onClick={() => appStore.increment(5)}>increment</button>
            <button onClick={() => appStore.decrement(10)}>decrement</button>
        </Fragment>
    )
}))

export default Child
