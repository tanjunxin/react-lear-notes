import React, { Component, Fragment } from 'react'
import Son from './Son'
import { MyContext } from './Context'

export default class Childs extends Component {
    childChange = () => {
        this.props.fatherChange("通过子组件将value值给修改了")
    }
    static contextType = MyContext
    render() {
        let childValue = this.context
        // console.log(childValue);
        return (
            <Fragment>
                {childValue.value ? <button onClick={() => { this.childChange() }}>我要调用父组件事件进行通讯</button> : <h2>--------------------------------</h2>}
                <Son />
            </Fragment>
        )
    }
}
