import types from '../constants';

export const logIn = () => dispatch => {
    dispatch({ type: types.LOGGING_IN });
}

