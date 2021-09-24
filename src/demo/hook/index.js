import React, { Fragment } from 'react'
// import States from './States'
// import Effects from './Effects'
// import ContextFather from './Contexts/ContextFather'
// import Refs from './Refs'
// import Memos from './Memos'
// import Callbacks from './Callbacks'
import Reducers from './Reducers'
// import Test from './test'

export default function index() {
    return (
        <Fragment>
            {/* <States />
            <h2>------------------</h2>
            <Effects />
            <h2>------------------</h2>
            <ContextFather />
            <h2>------------------</h2>
            <Refs />
            <h2>------------------</h2> */}
            {/* 
            useMemo和useCallback应用场景 
            useMemo更多的用于优化针对当前组件高开销的计算, 当你存在一个变量需要大量计算才能得出结果但是又不想每发生时间就触发的时候就可以使用useMemo, 等同于计算属性
            useCallback更多的配合memo优化于子组件渲染次数, 当向子组件传递props里面带有函数时, 父组件更新了也会导致子组件重新渲染, 这时候我们就可以通过useCallback对这个传递的事件进行优化, 来控制子组件的渲染次数
            两者不同点:  useMemo缓存的是函数的返回的结果, useCallback缓存的是函数
            我们可以将useMemo的返回值定义为返回一个函数这样就可以转换成useCallback
            useCallback(fn, deps)相当于useMemo(() => fn, deps)
            */}
            {/* <Memos /> */}
            <h2>------------------</h2>
            {/* <Callbacks /> */}
            <h2>------------------</h2>
            <Reducers />
        </Fragment>
    )
}
