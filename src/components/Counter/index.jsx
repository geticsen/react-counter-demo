import React, { Component } from "react"
class Counter extends React.Component {
    constructor(props) {
        super(props);
        var input = this.props.input();
        this.state = {
            count: 0,
            tempInput:input
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
        
        if(this.state.tempInput != this.props.input()){
            this.setState(()=>{ 
                return {count: 0}
            })
        }

        console.log("component will receive props counter js");
    }
    incrase = (preState) => {
        this.setState((preState)=>{ 
            return {count: preState.count + 1}
        })
        this.props.setTotal(1)
    }
    decrease = () => {
        this.setState((preState)=>{ 
            return {count: preState.count - 1}
        })
        this.props.setTotal(-1)
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