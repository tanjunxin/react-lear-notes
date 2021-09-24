import React, { Component } from 'react'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions/counter'

class App extends Component {
    render() {
        console.log(this.props)
        const { increment, decrement } = this.props
        return (
            <Fragment>
                <h2>{this.props.counter}</h2>
                <button onClick={() => (increment())}>increment</button>
                <button onClick={() => (decrement())}>decrement</button>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment(10))
        },
        decrement: () => {
            dispatch(decrement(5))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)