import React, { useEffect, useState } from 'react'
// import TestProps from './demo/props/index'
// import TestHook from './demo/hook/index'
// import TestHoc from './demo/hoc/index'
import TestRedux from './demo/redux/index'

// 引入redux
import { createStore } from 'redux'
import rootReducer from './demo/redux/reducers/index'

// 创建仓库(第一个参数是reducer{state的处理函数}, store的数据全部来源于reducer, reducer产生应用的状态)
const store = createStore(rootReducer)

export default function App() {
  const [unscribe, SetUnscribe] = useState(store.getState())
  // 状态改变但是不会马上渲染到视图中, 要通过componentDidUpdate来重新渲染到视图中
  useEffect(() => {
    let unscribe = store.subscribe(() => {
      console.log("store.subscribe监听状态改变的情况", store.getState())
      SetUnscribe(store.getState())
    })
    return () => {
      // 一定要取消订阅, 否则会重复执行
      unscribe()
    }
  })
  return (
    // <TestProps />
    // <TestHook />
    // <TestHoc />
    <TestRedux
      onIncrement={() => { store.dispatch({ type: "INCREMENT", num: 10 }) }}
      onDecrement={() => { store.dispatch({ type: "DECREMENT", num: 5 }) }}
      value={unscribe}
    />
  )
}
