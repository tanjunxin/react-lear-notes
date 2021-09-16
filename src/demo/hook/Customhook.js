import { useEffect, useRef, useCallback } from 'react'

/**
 * 自定义Hook是一个函数, 其名称以use开头, 函数内部可以调用其他的Hook
 * 自定义Hook的state是独立的
 * 多个组件使用共一个Hook不会共享state, 是完全独立和隔离的
 */

// 防抖: 触发高频事件后n秒内函数只会执行一次, 如果n秒内高频事件再次被触发, 则重新计算时间
export default function useDebounce(fn, delay, dep = []) {
    const { current } = useRef({ fn, timer: null })
    useEffect(function () {
        current.fn = fn
    }, [fn])

    return useCallback(function f(...args) {
        if (current.timer) {
            clearTimeout(current.timer)
        }
        current.timer = setTimeout(() => {
            current.fn.call(this, ...args)
        }, delay)
    }, dep)
}

// 节流: 高频事件触发, 但在n秒内只会执行一次, 所以节流会稀释函数的执行频率
export default function useThrottle(fn, delay, dep = []) {
    const { current } = useRef({ fn, timer: null });
    useEffect(function () {
        current.fn = fn
    }, [fn])

    return useCallback(function f(...args) {
        if (!current.timer) {
            current.timer = setTimeout(() => {
                delete current.timer
            }, delay)
            current.fn.call(this, ...args)
        }
    }, dep)
}
