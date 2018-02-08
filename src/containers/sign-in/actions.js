import * as actionTypes from './actionTypes';
import firebase from "../../firebase-module";

export const signInStart = () => {
    return {
        type: actionTypes.SIGNIN_START
    }
};

export const signInSuccess = () => ({
    type: actionTypes.SIGNIN_SUCCESS,
});

export const signInError = (err) => ({
    type: actionTypes.SIGNIN_FAIL,
    error: err
});

export const signIn = ({email, password}, history) => {
    console.log(email);
    return dispatch => {
        dispatch(signInStart());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                dispatch(signInSuccess());
                history.push('/app/home')
            })
            .catch(err => {
                dispatch(signInError(err.message));
            });
    }
};