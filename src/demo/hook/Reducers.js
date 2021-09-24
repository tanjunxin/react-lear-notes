import React, { Fragment, useReducer } from 'react'

// 值类型赋值改变

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

function reducer(state = 0, action) {
    console.log(state, action)
    switch (action.type) {
        case INCREMENT:
            return state + action.num
        case DECREMENT:
            return state - action.num
        default:
            return state
    }
}

// 引用类型赋值改变

const INCREMENTS = "INCREMENTS"
const DECREMENTS = "DECREMENTS"

function reducers(state = 0, action) {
    console.log(state, action)
    switch (action.type) {
        case INCREMENTS:
            return { counter: state.counter + action.num }
        case DECREMENTS:
            return { counter: state.counter - action.num }
        default:
            return state
    }
}

function App() {
    // useReducer接收两个参数, 第一个参数是处理函数reducer, 第二个参数是state的初始值
    // dispatch等同于redux的action函数, 接收参数来通知reducer用户的操作让其作出对应的改变
    const [state, dispatch] = useReducer(reducer, 0)
    const [states, dispatchs] = useReducer(reducers, { counter: 0 })
    return (
        <Fragment>
            <h2>{state}</h2>
            <button onClick={() => dispatch({ type: "INCREMENTS", num: 10 })}>increment</button>
            <button onClick={() => dispatch({ type: "DECREMENTS", num: 5 })}>decrement</button>
            <h2>---------------------------------------</h2>
            <h2>{states.counter}</h2>
            <button onClick={() => dispatchs({ type: "INCREMENTS", num: 2 })}>increments</button>
            <button onClick={() => dispatchs({ type: "DECREMENTS", num: 1 })}>decrements</button>
        </Fragment>
    )
}

export default App