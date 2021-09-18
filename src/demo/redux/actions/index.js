// 通知reducer需要产生下一个状态
// 每一个action都需要一个type属性来描述状态应该如何变化

import { INCREMENT, DECREMENT } from '../constants/index'

export function increment(num) {
    return {
        type: INCREMENT,
        num
    }
}

export function decrement(num) {
    return {
        type: DECREMENT,
        num
    }
}