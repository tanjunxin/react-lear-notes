import React, { Fragment, useState } from 'react'

function States() {
    // useState(0)中的0是count的初始值
    // count是接收useState(0)中0的变量
    // setCount是控制count改变的函数
    // 里面的关系是互相呼应的
    const [count, setCount] = useState(0)
    const setOne = () => {
        setCount(count + 1)
    }
    const setTen = () => {
        setCount(count + 10)
    }
    const setFive = (val) => {
        setCount(count + val)
    }
    return (
        <Fragment>
            <h2>{count}</h2>
            <button onClick={setOne()}>点击count+1</button>
            <button onClick={setTen()}>点击count+10</button>
            <button onClick={setFive(5)}>点击count+5</button>
        </Fragment>
    )
}

export default States
