import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDYIWLUdi9BuRqJ4KiWACdk51igRBYPD08",
    authDomain: "carsale-7503b.firebaseapp.com",
    databaseURL: "https://carsale-7503b.firebaseio.com",
    projectId: "carsale-7503b",
    storageBucket: "carsale-7503b.appspot.com",
    messagingSenderId: "968639063300"
  };
  firebase.initializeApp(config);

  export default firebase;