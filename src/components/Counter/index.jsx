import React, { Component } from "react"
import PropTypes from 'prop-types'
import store from "../../store"
class Counter extends Component {
    constructor(props) {
        super(props);
        var input = this.props.input();
        this.state = {
            count: 0,
            tempInput: input
        }
    }
    componentWillReceiveProps() {

        if (this.state.tempInput !== this.props.input()) {
            this.setState(() => {
                return { count: 0, tempInput: this.props.input() }
            })
        }
    }
    incrase = (preState) => {
        this.setState((preState) => {
            return { count: preState.count + 1 }
        })
        store.dispatch({ type: 'INCREMENT' })
    }
    decrease = () => {
        this.setState((preState) => {
            return { count: preState.count - 1 }
        })
        store.dispatch({ type: 'DECREMENT' })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrase}>+</button>
                <span>{this.state.count}</span>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }
}
//数据检查格式
Counter.propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter