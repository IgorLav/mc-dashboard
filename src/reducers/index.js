import {combineReducers} from 'redux';
import signUp from '../containers/sign-up/reducer';
import signIn from '../containers/sign-in/reducer';

const rootReducer = combineReducers({
    signUp,
    signIn
});

export default rootReducer;