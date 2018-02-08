import * as actionTypes from './actionTypes';
import firebase from "../../firebase-module";

export const logout = () => {
    firebase.auth().signOut();
    return {
        type: actionTypes.LOGOUT
    }
};