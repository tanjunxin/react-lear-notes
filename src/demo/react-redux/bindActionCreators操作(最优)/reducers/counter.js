
import { INCREMENT, DECREMENT } from '../constants/index'

const counter = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            // 测试error中间件
            // throw new Error("error reducers")
            return state + action.num
        case DECREMENT:
            return state - action.num
        default:
            return state
    }
}

export default counter
