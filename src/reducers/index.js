var initValue = {
   total:0
}
//不能直接修改sate返回，应该新建一个状态
export default (state = initValue, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {total:++state.total}
      case 'DECREMENT':
        return {total:--state.total}
      case 'CLEAR':
        return {total:0}
      default:
        return state
    }
  }
  