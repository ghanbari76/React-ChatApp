import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBr8QKDbdXXrT5Dz1nn48crz7exoVW1hNc",
    authDomain: "nazargram-ad834.firebaseapp.com",
    projectId: "nazargram-ad834",
    storageBucket: "nazargram-ad834.appspot.com",
    messagingSenderId: "865940949424",
    appId: "1:865940949424:web:f99bcdc2d98a07c0baee75"
  }).auth();