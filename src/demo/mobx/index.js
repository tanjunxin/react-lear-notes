import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'mobx-react'
import appStore from './Func/store'

// mobx 优点
// mobx 写法上更偏向于oop
// mobx 对一份数据直接进行修改操作, 不需要始终返回一个新的数据
// mobx 并非单一的 store, 可以多store
// redux 默认以javaScript原生对象形式存储数据, 而mobx可以用来观察对象

// store状态是驱动应用的数据
// 想要跨组件传递就必须要通过mobx-react提供的Provider向下注入
ReactDOM.render(
  <Provider appStore={appStore}>
    <React.StrictMode >
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
