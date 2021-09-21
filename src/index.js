import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './demo/react-redux/reducers/index'

// 引入第三方中间件logger(打印redux过程)
import logger from 'redux-logger'
// 引入第三方中间件thunk(处理异步)
import thunk from 'redux-thunk'

// 根据redux的执行流程图, 在执行的过程中我们可以通过中间件来控制或者监测状态(通过react-redux提供的applyMiddleware()来注册中间件, 通过, 可以注册多个中间件, 按顺序执行)

// 自定义log中间件
// const logger = store => next => action => {
//   console.log("dispatch->", action);
//   let result = next(action);//加载下一个中间件
//   console.log("next state->", store.getState());
//   return result
// }

// 自定义错误中间件
// const error = store => next => action => {
//   try {
//     next(action)
//   } catch (e) {
//     console.log("error->", e);
//   }
// }

// 创建仓库
// const store = createStore(rootReducer)
// const store = createStore(rootReducer, {}, applyMiddleware(logger, error))
const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk))

// 使用react-redux提供的Provider向下注入
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
