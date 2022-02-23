
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgu1Hn7cWOaJgmcxifg8IK1zjA7_QUHzA",
    authDomain: "reels-app-58bd8.firebaseapp.com",
    projectId: "reels-app-58bd8",
    storageBucket: "reels-app-58bd8.appspot.com",
    messagingSenderId: "233824428165",
    appId: "1:233824428165:web:dd6c8253f7f86c39be09ec"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Same till here ----------------------------------------------------

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection('users'),
  posts: firestore.collection('posts'),
//   comments : firestore.collection('comments'),
  getTimeStamp: firebase.firestore.FieldValue.serverTimestamp
}

export const storage = firebase.storage()