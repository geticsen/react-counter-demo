import { connect } from "react-redux"
import CounterGroup from "../components/CounterGroup";
import { increaseTotal, decreaseTotal, clearTotal } from "../actions"

const mapStateToProps = state => {
    return {
        total: state.total,
        groupSize: state.groupSize
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increase: () => {
            dispatch(increaseTotal())
        },
        decrease: () => {
            dispatch(decreaseTotal())
        },
        clear: () => {
            dispatch(clearTotal())
        }
    }
}
const CounterGroupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup)
export default CounterGroupContainer

