export default (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      case 'CLEAR':
        state=0
        return state
      default:
        return state
    }
  }
  