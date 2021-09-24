// 添加一个添加user的action

import { ADDUSER } from '../constants/index'

const user = (state = "", action) => {
    // console.log(state, action)
    switch (action.type) {
        case ADDUSER:
            return action.user
        default:
            return state
    }
}

export default user