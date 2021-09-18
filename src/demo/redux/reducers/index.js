// reducer是一个纯函数, 接收两个参数: 
// state   初始状态, 是不可变的, 并且不能改变他们 
// action   作用是通知reducer什么时候产生下一个状态
// 如何改变状态
// 改变的状态的唯一方法是发送信号给store, action就是这个信号, 派发action就是一个发送信号的过程
// state根据第三大原则是不可改变的, 为什么值会变
// 新产生的state是当前state添加了新数据的副本, state根本没有改变
// 三大原则
// 单一真相来源(整个应用中的state, 都存放在单一的store(存储)之中的一个对象树状结构里)
// 状态是唯读的(唯一能改变状态的是发送一个action(动作), action是一个描述"发生了什么事"的纯对象)
// 更动只能由纯函数来进行(要指示状态树要如何依actions(动作)来作改变，你需要撰写纯粹的归纳函数(reducers)) 

import { INCREMENT, DECREMENT } from '../constants/index'

const counter = (state = 0, action) => {
    // console.log(state = 0, action)
    switch (action.type) {
        case INCREMENT:
            return state + action.num
        case DECREMENT:
            return state - action.num
        default:
            return state
    }
}

export default counter
