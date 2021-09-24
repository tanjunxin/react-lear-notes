import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/counter'

// 引入第三方中间件logger(打印redux过程)
import logger from 'redux-logger'
// 引入第三方中间件thunk(处理异步)
import thunk from 'redux-thunk'

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
// const store = createStore(rootReducer, {}, applyMiddleware(logger, error))
const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk))

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
