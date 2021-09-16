import React from 'react'

// 使用React.createContext(需要传递的值)创建一个 react context, 赋值给一个变量
export const MyContext = React.createContext(
    //在这里可以设置一些默认值
    { test1: "我是要跨组件传递的默认值" }
);