import * as actionTypes from './actionTypes';
import firebase from "../../firebase-module";

export const signUpStart = () => {
    return {
        type: actionTypes.SIGNUP_START
    }
};

export const signUpSuccess = () => ({
    type: actionTypes.SIGNUP_SUCCESS,
});

export const signUpError = (err) => ({
    type: actionTypes.SIGNUP_FAIL,
    error: err
});

export const signUp = ({firstName, lastName, email, phone, password}) => {
    return dispatch => {
        dispatch(signUpStart());

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(newUser => {
                firebase.database().ref('/users').child(newUser.uid).update({
                    firstName,
                    lastName,
                    email,
                    phone
                });
                dispatch(signUpSuccess());
            })
            .catch(err => {
                dispatch(signUpError(err.message));
            });
    }
};