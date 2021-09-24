// 一个项目中会存在多个状态需要共享, 这个时候我们通过redux提供的combineReducers需要将其模块化管理, 这样的话我们会更好管理

import { combineReducers } from 'redux'
import counter from './counter'
import auth from './auth'

const rootReducer = combineReducers({
    counter,
    auth
})

export default rootReducer