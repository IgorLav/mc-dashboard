import {combineReducers} from 'redux';
import signUp from '../containers/sign-up/reducer';
import signIn from '../containers/sign-in/reducer';
import drawer from '../containers/drawer/reducer';

const rootReducer = combineReducers({
    signUp,
    signIn,
    drawer
});

export default rootReducer;