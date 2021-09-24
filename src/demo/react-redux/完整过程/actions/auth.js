// 添加一个添加user的action

import { ADDUSER } from '../constants/index'

export function addUser(user) {
    return {
        type: ADDUSER,
        user
    }
}