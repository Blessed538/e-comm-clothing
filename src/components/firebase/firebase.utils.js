import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDEHtUjfjik37Y5CcT0Rblp9v_3FiZ_A3M',
  authDomain: 'clothing-e-commerce-c841e.firebaseapp.com',
  databaseURL: 'https://clothing-e-commerce-c841e.firebaseio.com',
  projectId: 'clothing-e-commerce-c841e',
  storageBucket: 'clothing-e-commerce-c841e.appspot.com',
  messagingSenderId: '728725994563',
  appId: '1:728725994563:web:658df4843aecb3c94968f6',
  measurementId: 'G-9E0TB2X4KS',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
