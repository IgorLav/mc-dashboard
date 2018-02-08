import * as actionTypes from './actionTypes';

const initialState = {
    error: null,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNIN_START :
            return {
                ...state,
                error: null,
                loading: true
            };
        case actionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };
        case actionTypes.SIGNIN_FAIL :
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