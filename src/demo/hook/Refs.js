import React, { Fragment, useRef, useState, useEffect } from 'react'

function Refs() {
    const [count, setCount] = useState(0)
    const divRef = useRef()
    const numRef = useRef(count)
    useEffect(() => {
        numRef.current = count
    }, [count])
    const getDom = () => {
        // 获取整个div
        console.log("整个div", divRef.current);
        // 获取div的class
        console.log("div的class", divRef.current.className)
        // 获取div的内容
        console.log("div的内容", divRef.current.innerText)
    }
    return (
        <Fragment>
            <div className="refdiv" ref={divRef}>
                如何通过useRef获取DOM
            </div>
            <button onClick={getDom}>点击通过useref获取dom</button>
            {/* 也可以用来缓存数据, ref对象内容发生变化时, useRef hook不会立即通知你变更, .current属性不会引入组件的重新渲染, 如果我们想要悄悄的保存数据, 而又不想触发函数的更新, 就可以使用ref.current缓存数据 */}
            <h2>count上一次的值: {numRef.current}</h2>
            <h2>count这一次的值: {count}</h2>
            <button onClick={setCount(count + 10)}>+10</button>
        </Fragment>
    )
}

export default Refs
