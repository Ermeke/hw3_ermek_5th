const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case"INCREMENT" :
            return {
                ...state, counter: state.counter + 1
            }
        case"DECREMENT" :
            if (state.counter === 0) {
                return state;
            } else {
                return {...state, counter: state.counter - 1}
            }
        default: return state
    }
}

export default reducer