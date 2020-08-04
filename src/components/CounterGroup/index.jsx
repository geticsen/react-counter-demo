import React from "react"
import Counter from "../Counter"
import store from "../../store"

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groupNum: 0,
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
        });

    }

    render() {

        return (
            <div>
                <input placeholder="input a number"
                    onChange={this.onChange.bind(this)} />
                <span>total:<span>{store.getState()}</span></span>
                <div>
                    {new Array(this.state.groupNum).fill(0).map((key, index) => <Counter key={index}
                        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
                        input={this.getGroupNum}
                    />)}
                </div>
            </div>
        );
    }
}

export default CounterGroup