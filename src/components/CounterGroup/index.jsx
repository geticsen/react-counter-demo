import React from "react"
import Counter from "../Counter"
class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groupNum: 0
        }
    }
    shouldComponentUpdate(){
        return true;
    }
    onChange(e){
        var num = e.target.value.length>0?e.target.value:0;
        this.state.groupNum = parseInt(num);
    }
    getInput = ()=>{
        this.setState({
            groupNum:  this.state.groupNum 
        });
    }
    render() {
        return (
            <div>
                <input placeholder="input a number"
                    onChange={this.onChange.bind(this)}/>
                <button onClick={this.getInput} >生成</button>
                <div>
                    {new Array(this.state.groupNum).fill(0).map((key, index) => <Counter key={index}/>)}
                </div>
            </div>
        );
    }
}
export default CounterGroup