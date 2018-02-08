import {combineReducers} from 'redux';
import signUp from '../containers/sign-up/reducers';

const rootReducer = combineReducers({
    signUp
});

export default rootReducer;