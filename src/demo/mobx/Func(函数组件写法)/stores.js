import { observable, action, autorun, computed } from 'mobx'

let num = observable.box(5)
let number = observable.box(10)

const counter = computed(() => {
    return num.get() * number.get()
})

const increment = action((val) => {
    num.set(num.get() + val)
})

const decrement = action((val) => {
    number.set(number.get() + val)
})

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