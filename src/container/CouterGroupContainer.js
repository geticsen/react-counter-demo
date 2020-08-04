import { connect } from "react-redux"
import CounterGroup from "../components/CounterGroup";
import {increaseTotal,decreaseTotal,clearTotal} from "../actions"
// const changeTotal = (total,changeType)=>{
//     switch(changeType){
//         case "INCREMENT":
//             return total+1;
//         case "DECREMENT":
//             return total-1;
//         case "CLEAR":
//             return  0;
//         default:
//             return total;
//     }
// }

const mapStateToProps = state =>{
    return{
        total:state.total
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        increase: ()=>{
            dispatch(increaseTotal())
        },
        decrease: ()=>{
            dispatch(decreaseTotal())
        },
        clear: ()=>{
            dispatch(clearTotal())
        }
    }
}
const CounterGroupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup)
export default CounterGroupContainer

