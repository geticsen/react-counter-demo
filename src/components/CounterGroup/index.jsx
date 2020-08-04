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
        console.log(this.props)
    }

    render() {

        return (
            <div>
                <input placeholder="input a number"
                    onChange={this.onChange.bind(this)} />
                <span>total:<span>{store.getState().total}</span></span>
                <div>
                    {new Array(this.state.groupNum).fill(0).map((key, index) => <Counter key={index}
                        increase={()=>{this.props.increase()}}
                        decrease={()=>{this.props.decrease()}}
                        input={this.getGroupNum}
                    />)}
                </div>
            </div>
        );
    }
}

export default CounterGroup