// 通知reducer需要产生下一个状态
// 每一个action都需要一个type属性来描述状态应该如何变化

import { INCREMENT, DECREMENT } from '../constants/index'

// export function increment(num) {
//     return {
//         type: INCREMENT,
//         num
//     }
// }

// 异步化(定时器, 网络请求)
export function increment(num) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: INCREMENT,
                num
            })
        }, 3000)
    }
}

export function decrement(num) {
    return {
        type: DECREMENT,
        num
    }
}