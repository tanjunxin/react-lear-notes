import React, { Fragment, useState, useEffect } from 'react'

function Effects() {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    // 当数组为空时, 这个时候effect hook等同于componentDidMount
    useEffect(() => {
        console.log("我只会在组件初次挂载完成后执行")
    }, [])
    // 当只有一个参数时, 这个时候effect hook等同于componentDidUpdate
    useEffect(() => {
        console.log("我会在初次组件挂载完成后以及重新渲染时执行")
    })
    // 当第一个参数返回一个函数时, 这个时候effect hook等同于componentWillUnmount
    useEffect(() => {
        let timer = setInterval(() => {
            console.log('已经订阅')
        }, 1000)
        // 返回一个函数，组件销毁时执行，取消某些订阅
        return () => {
            clearInterval(timer)
        }
    }, [])
    // 当数组中填入变量时, 会自动监控这个变量的改变, 变量改变了就会触发(可以放多个变量)
    useEffect(() => {
        console.log("我只会在count变化时执行")
    }, [count])
    useEffect(() => {
        console.log("我只会在count或num变化时执行")
    }, [count, num])
    // 不支持async await, 通过自执行来实现
    // useEffect(() => {
    //     (async function getDatas() {
    //         await getData()
    //     })()
    // }, [])
    return (
        <Fragment>
            <h2>{count}</h2>
            <button onClick={setCount(count + 1)}>点击+1</button>
            <h2>{num}</h2>
            <button onClick={setNum(num + 1)}>点击+1</button>
        </Fragment>
    )
}

export default Effects
