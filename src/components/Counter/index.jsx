import React, { Component } from "react"
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
        //console.log(this.props)
        this.props.increase()
        console.log("counter " + store.getState().total)
    }
    decrease = () => {
        this.setState((preState) => {
            return { count: preState.count - 1 }
        })
        this.props.decrease()
        console.log("counter " + store.getState().total)
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

export default Counter