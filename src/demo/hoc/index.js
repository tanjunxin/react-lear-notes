import React, { Fragment } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import withComponent from './withComponent'

/**
 * 高阶组件(等同于Vue中的minxi)
 * 总体概况就是参数为组件, 返回值为新组件的函数, 目的是把组件中相同的业务逻辑抽离出来进行复用
 * 
 */
const dataC = {
    info: [{
        title: "我是一个测试的C案例",
        subTitle: "主要测试C案例的高阶组件"
    }]
}

const ComponentC = withComponent(dataC)(props => {
    return (
        <Fragment>
            {
                props.data.info.map((value, index) => {
                    return (
                        <h2 key={index} style={{ display: props.flag ? "block" : "none" }}>
                            <span>{value.title}</span>
                            <br />
                            <span>{value.subTitle}</span>
                        </h2>
                    )
                })
            }
        </Fragment >
    )
})

const dataD = {
    info: [{
        title: "我是一个测试的D案例",
        subTitle: "主要测试D案例的高阶组件"
    }]
}

const ComponentD = withComponent(dataD)(props => {
    console.log(props)
    return (
        <Fragment>
            {
                props.data.info.map((value, index) => {
                    return (
                        <h2 key={index} style={{ display: props.flag ? "block" : "none" }}>
                            <span>{value.title}</span>
                            <br />
                            <span>{value.subTitle}</span>
                        </h2>
                    )
                })
            }
        </Fragment >
    )
})

function index() {
    return (
        <Fragment>
            <ComponentA />
            <h2>-------------------------------------------</h2>
            <ComponentB />
            <h2>-------------------------------------------</h2>
            <ComponentC />
            <h2>-------------------------------------------</h2>
            <ComponentD />
        </Fragment>
    )
}

export default index
