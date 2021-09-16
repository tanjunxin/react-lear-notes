import React, { Component, Fragment } from 'react'
import Child from './Child'
import Childs from './Childs'
import Childss from './Childss'
import { MyContext } from './Context'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            title: "我是父组件传递过来的值",
            value: "我是要给修改的值",
            test1: "我是要跨组件传递的值(类方法)",
            num1: 60,
            test2: "我是要跨组件传递的值(函数方法)",
            flag: true
        }
        // 使用React.createRef()创建一个react ref, 赋值给一个变量
        this.ref = React.createRef()
    }
    fatherChange = (item) => {
        this.setState({
            value: item,
        })
    }
    colorChange() {
        if (this.state.flag) {
            this.ref.current.style.color = "red"
        } else {
            this.ref.current.style.color = "blue"
        }
        let flog = !this.state.flag
        this.setState({
            flag: flog
        })
    }
    // componentDidMount() {
    //     this.ref.current.style.color = "red"
    // }
    render() {
        return (
            <Fragment>
                <h1>{this.state.value}</h1>
                <Child title={this.state.title} text="我也是父组件传递过来的值" />
                <MyContext.Provider value={{ text: this.state.test1, value: this.state.num1 }}><Childs fatherChange={(item) => { this.fatherChange(item) }}></Childs></MyContext.Provider>
                <button onClick={() => { this.setState({ num1: this.state.num1 - 1 }) }}>点击num1减1</button>
                <Childs fatherChange={(item) => { this.fatherChange(item) }}></Childs>
                <MyContext.Provider value={this.state.test2}><Childss /></MyContext.Provider>
                {/* 绑定ref */}
                <h2 ref={this.ref}>refs</h2>
                <button onClick={() => { this.colorChange() }}>通过ref修改颜色</button>
            </Fragment>
        )
    }
}
