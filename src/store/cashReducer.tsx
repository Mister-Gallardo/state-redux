const defaultState = {
  cash: 0,
};

// action = {type: '...', payload: '...'}
export const cashReducer = (state: {cash: number} = defaultState, action: any) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};