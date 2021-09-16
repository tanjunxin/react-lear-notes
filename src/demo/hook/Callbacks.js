// eslint-disable-next-line
import React, { useState, memo, useCallback, Fragment } from 'react'

const Callbacks = () => {
    const [count, setCount] = useState(0);
    const handleChildren = () => {
        console.log("我是子组件事件")
        setCount(count => count + 1)
    }
    // eslint-disable-next-line
    const handleChildrenCallback = useCallback(() => {
        handleChildren()
        // eslint-disable-next-line
    }, [count === 3])

    const handleParent = () => {
        console.log("我是父组件事件")
        setCount(count => count + 1)
    }

    return (
        <Fragment>
            <h2>{count}</h2>
            <button onClick={handleParent}>父组件按钮</button>
            {/* <ChildrenComponent flag={0} handleChildren={handleChildren} /> */}
            <ChildrenComponent flag={1} handleChildren={handleChildrenCallback} />
        </Fragment>
    )
}

const ChildrenComponent = memo((methods) => {
    const { flag, handleChildren } = methods
    flag ? console.log("Callback子组件重新渲染") : console.log("子组件重新渲染")
    return (
        <Fragment>
            {flag ? <h2>我是使用了Callback子组件</h2> : <h2>我是子组件</h2>}
            <button onClick={handleChildren}>子组件按钮</button>
        </Fragment>
    )
})

export default Callbacks
