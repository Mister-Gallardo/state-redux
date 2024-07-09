const defaultState = {
    count: 0
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const countReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case INCREMENT: 
            return {...state, count: state.count+1}
        case DECREMENT: 
            return {...state, count: state.count-1}
        default:
            return state
    }
}

export const IncrementAction = () => ({
    type: INCREMENT
})
export const DecrementAction = () => ({
    type: DECREMENT
})