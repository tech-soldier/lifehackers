
import firebase from "firebase/app";
import 'firebase/firestore'

const db = firebase
    .initializeApp(
        {
            apiKey: "AIzaSyBuRXBCcygMre03rxQWbVp-mvTp0ROKfRc",
            authDomain: "lifehackers-1bbb9.firebaseapp.com",
            databaseURL: "https://lifehackers-1bbb9.firebaseio.com",
            projectId: "lifehackers-1bbb9",
            storageBucket: "lifehackers-1bbb9.appspot.com",
            messagingSenderId: "246190688854",
            appId: "1:246190688854:web:997159c6a2a8cadf77c9f7",
            measurementId: "G-RFGTGJB1VD"
        }
    )
    .firestore()

export default db

const { Timestamp } = firebase.firestore
export { Timestamp }
