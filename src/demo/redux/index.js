import React, { Component } from 'react'
import { Fragment } from 'react'

export default class index extends Component {
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <h2>{this.props.value}</h2>
                <button onClick={this.props.onIncrement}>increment</button>
                <button onClick={this.props.onDecrement}>decrement</button>
            </Fragment>
        )
    }
}

