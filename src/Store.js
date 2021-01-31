import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
 
const fbConfig = {
    apiKey: "AIzaSyAgr-mg2xF1umQC-yGacPVs9xsI53j_Yyc",
    authDomain: "student-base-a4dc2.firebaseapp.com",
    databaseURL: "https://student-base-a4dc2.firebaseio.com",
    projectId: "student-base-a4dc2",
    storageBucket: "student-base-a4dc2.appspot.com",
    messagingSenderId: "844544020570",
    appId: "1:844544020570:web:b52dee1d26c656394cc863"
}
 
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
 
// Initialize firebase instance
firebase.initializeApp(fbConfig)
 
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
 
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})
 
// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)
 
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

export default store