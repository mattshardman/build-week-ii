import types from '../constants';

export default (state = false, action) => {
    console.log(state, action)
    switch (action.type) {
        case types.LOGGING_IN:
            return true;
        default: 
            return state;
    }
}  