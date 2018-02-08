import * as actionTypes from './actionTypes';

const initialState = {
    error: null,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_START :
            return {
                ...state,
                error: null,
                loading: true
            };
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };
        case actionTypes.SIGNUP_FAIL :
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;