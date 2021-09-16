import React, { Component, Fragment } from 'react'

export default class ComponentB extends Component {
    constructor() {
        super()
        this.state = {
            flag: true,
            data: [{
                title: "我是一个测试的B案例",
                subTitle: "主要测试B案例的高阶组件"
            }]
        }
    }
    handleClick = () => {
        this.setState({
            flag: !this.state.flag
        })
    }
    render() {
        return (
            <Fragment>
                {
                    this.state.data.map((value, index) => {
                        return (
                            <h2 key={index} style={{ display: this.state.flag ? "block" : "none" }}>
                                <span>{value.title}</span>
                                <br />
                                <span>{value.subTitle}</span>
                            </h2>
                        )
                    })
                }
                <button onClick={() => this.handleClick()}>点击显示用户信息</button>
            </Fragment >
        )
    }
}
