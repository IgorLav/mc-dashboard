import * as firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyApgxYpiffjsh-yZG1iZaYJ4so2TRiKyF8",
    authDomain: "lavs-mercury.firebaseapp.com",
    databaseURL: "https://lavs-mercury.firebaseio.com",
    projectId: "lavs-mercury",
    storageBucket: "",
    messagingSenderId: "274325940841"
};

export default firebase.initializeApp(config);