import React from "react"
import Counter from "../Counter"
import counter from '../../reducers'
import { createStore } from 'redux'

const store = createStore(counter)

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groupNum: 0,
            total:store.getState(),
        }
    }
    shouldComponentUpdate() {
        return true;
    }
    getGroupNum = () => {
        return this.state.groupNum;
    }
    onChange(e) {
        var num = e.target.value.length > 0 ? e.target.value : 0;
        store.dispatch({ type: 'CLEAR' })
        this.setState({
            groupNum: parseInt(num),
            total:store.getState()
        });

    }

    handleState = () => {
        this.setState({ total: store.getState()})
    }
    render() {
        return (
            <div>
                <input placeholder="input a number"
                    onChange={this.onChange.bind(this)} />
                <span>total:<span>{this.state.total}</span></span>
                <div>
                    {new Array(this.state.groupNum).fill(0).map((key, index) => <Counter key={index}
                        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
                        handleState={this.handleState}
                        input={this.getGroupNum} 
                        />)}
                </div>
            </div>
        );
    }
}

export default CounterGroup