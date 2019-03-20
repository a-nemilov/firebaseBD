import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDs0T7BRjQ4-_JqgMYXzrFRmXsi6aEkA9A',
  authDomain: 'softteco-f69ab.firebaseapp.com',
  databaseURL: 'https://softteco-f69ab.firebaseio.com',
  projectId: 'softteco-f69ab',
  storageBucket: 'softteco-f69ab.appspot.com',
  messagingSenderId: '791738483895',
};

const fire = firebase.initializeApp(config);
export default fire;
