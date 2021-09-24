import { observable, action, autorun, computed } from 'mobx'

// observable可以将数据转换成观察模式, 返回一个observable类型store来供观察者使用
// 值类型数据使用observable.box()存储到box中, 使用.get()来获取值, .set()来修改值
// 引用类型使用observable(), 获取值和修改值的方式同原生
// map类型使用observable.map(), 获取值和修改值方式同原生
const num = observable.box(5)
const number = observable.box(10)

// const obj = observable({
//     name: 'redux'
// })
// obj.name = 'mobx'

// const arr = observable(['redux', 26])
// arr[0]= 'mobx'

// const map = observable.map({ key: 'redux'})
// map.set('key', 'mobx')

// computed是mobx提供的计算属性(等同vue中的计算属性), 使用.get()来获取值 
const counter = computed(() => {
    return num.get() * number.get()
})

// action(动作)是修改值的方法, 只有在action中你才能修改值
const increment = action((val) => {
    num.set(num.get() + val)
})

const decrement = action((val) => {
    number.set(number.get() + val)
})

// autorun(有点等同于useEffect, 填入变量时), 第一个参数是监测的数据, 当监测的数据改变时就会触发(可以用做打印日志等操作)
autorun(() => {
    console.log("num", num.get());
})

// eslint-disable-next-line
export default {
    num,
    number,
    counter,
    increment,
    decrement
}