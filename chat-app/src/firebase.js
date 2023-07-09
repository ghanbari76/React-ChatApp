import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBmTAyi5E7RVNTBmpx80T-99H566_TsQkw",
    authDomain: "nazargram-e8ab1.firebaseapp.com",
    projectId: "nazargram-e8ab1",
    storageBucket: "nazargram-e8ab1.appspot.com",
    messagingSenderId: "935891565169",
    appId: "1:935891565169:web:b9851ca64cc4b29db279d0"
  }).auth();