import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

//const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAJfEl9OikyhP0b4cvJ21diTXfMOj2a6PY",
    authDomain: "thanks-9d5dd.firebaseapp.com",
    databaseURL: "https://thanks-9d5dd.firebaseio.com",
    projectId: "thanks-9d5dd",
    storageBucket: "thanks-9d5dd.appspot.com",
    messagingSenderId: "436686873976",
    appId: "1:436686873976:web:9602f0692b023cf2"
};
firebase.initializeApp(config);

//firebase.firestore().settings(settings);

export default firebase;