import React, { Component } from 'react'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import * as counterActions from './actions/counter'
import { bindActionCreators } from 'redux'

class App extends Component {
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <h2>{this.props.counter}</h2>
                <button onClick={() => this.props.counterActions.increment(10)}>increment</button>
                <button onClick={() => this.props.counterActions.decrement(10)}>decrement</button>
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
        counterActions: bindActionCreators(counterActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)