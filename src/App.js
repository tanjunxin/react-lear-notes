import React, { Component } from 'react'
import { Fragment } from 'react'
import { connect } from 'react-redux'
// import { increment, decrement } from './demo/react-redux/actions/counter'
import * as counterActions from './demo/react-redux/actions/counter'
import * as authActions from './demo/react-redux/actions/auth'
import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    console.log(this.props)
    // const { increment, decrement } = this.props
    return (
      <Fragment>
        <h2>{this.props.counter}</h2>
        {/* 使用dispatch操作 */}
        {/* <button onClick={() => (increment())}>increment</button>
        <button onClick={() => (decrement())}>decrement</button> */}
        {/* 使用bindActionCreators操作*/}
        <button onClick={() => this.props.counterActions.increment(10)}>increment</button>
        <button onClick={() => this.props.counterActions.decrement(5)}>decrement</button>
        <h2>---------------------------</h2>
        <h2>{this.props.auth}</h2>
        <button onClick={() => this.props.authActions.addUser("tjx")}>adduser</button>
      </Fragment>
    )
  }
}

// mapStateToProps是用来渲染数据的

const mapStateToProps = (state) => {
  return {
    // 模块化后, state就是一个对象
    counter: state.counter,
    auth: state.auth
  }
}

// mapDispatchToProps是用来操作数据的

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch(increment(10))
//     },
//     decrement: () => {
//       dispatch(decrement(5))
//     }
//   }
// }

// 使用bindActionCreators来优化mapDispatchToProps操作

const mapDispatchToProps = (dispatch) => {
  return {
    counterActions: bindActionCreators(counterActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
  }
}

// 当使用bindActionCreators来操作redux时, 需要引入react-redux提供的connect来链接redux和组件之间, connect(渲染函数, 操作数据函数)(组件名)
export default connect(mapStateToProps, mapDispatchToProps)(App)