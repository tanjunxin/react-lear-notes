import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Child extends Component {
    // 设置默认值
    static defaultProps = {
        title: "默认标题",
        text: "默认标题"
    }
    // 添加类型验证(方法一)
    // 要验证的属性名： PropTypes.期望的类型
    // static propTypes = {
    //     title: PropTypes.string,
    //     text: PropTypes.string
    // }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h2>{this.props.text}</h2>
            </div>
        )
    }
}
// 添加类型验证(方法二)
Child.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}