import React from "react"
import Counter from "../Counter"
class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groupNum: this.props.group
        }
    }
    render() {
        return (new Array(6).fill(0).map((key, index) => <Counter/>));
    }
}
export default CounterGroup