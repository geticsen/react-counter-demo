import React from "react"
import Counter from "../Counter"
class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groupNum: 0,
            total: 0
        }
    }
    shouldComponentUpdate() {
        return true;
    }
    getGroupNum = ()=>{
        return this.state.groupNum;
    }
    onChange(e) {
        var num = e.target.value.length > 0 ? e.target.value : 0;

        this.state.groupNum = parseInt(num);
        this.setState({
            groupNum: this.state.groupNum,
            total: 0
        });
       
    }

    handleTotal = (value) => {
        this.setState({ total: this.state.total + value })
    }
    render() {
        return (
            <div>
                <input placeholder="input a number"
                    onChange={this.onChange.bind(this)} />
                <span>total:<span>{this.state.total}</span></span>
                <div>
                    {new Array(this.state.groupNum).fill(0).map((key, index) => <Counter key={index} setTotal={this.handleTotal} input={this.getGroupNum}/>)}
                </div>
            </div>
        );
    }
}
export default CounterGroup