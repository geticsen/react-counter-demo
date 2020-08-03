import React, { Component } from "react"
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

    }
    componentWillMount() {
        console.log("component will mount");
    }
    componentWillUnmount() {
        console.log("component will unmount");
    }
    componentWillUpdate() {
        console.log("component will update");
    }
    componentDidMount() {
        console.log("component did mount");
    }
    componentDidUpdate() {
        console.log("component did update");
    }
    componentWillReceiveProps() {
        console.log("component will receive props");
    }
    incrase = (preState) => {
        this.setState((preState)=>{ 
            return {count: preState.count + 1}
        })
    }
    decrease = () => {
        this.setState((preState)=>{ 
            return {count: preState.count - 1}
        })
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