import React, { Component, Fragment } from 'react'

const withComponent = (data) => (View) => {
    return class extends Component {
        state = {
            flag: true
        }
        handleClick = () => {
            this.setState({
                flag: !this.state.flag
            })
        }
        render() {
            let injectProps = {
                flag: this.state.flag
            }
            return (
                <Fragment>
                    <View data={data} {...injectProps}></View>
                    <button onClick={() => this.handleClick()}>点击显示用户信息</button>
                </Fragment>
            )
        }
    }
}

export default withComponent
