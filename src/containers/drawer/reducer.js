import * as actionType from './actionTypes';

const initialState = {
    open: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case  actionType.OPEN_DRAWER:
            return {
                ...state,
                open: true
            };

        case  actionType.CLOSE_DRAWER:
            return {
                ...state,
                open: false
            };

        default :
            return state;
    }
};

export default reducer;