import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD3OUQDRheCpVmJrm-L6usE0v9H_ppi4lU",
  authDomain: "team-voting-app-3925c.firebaseapp.com",
  databaseURL: "https://team-voting-app-3925c-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-3925c",
  storageBucket: "team-voting-app-3925c.appspot.com",
  messagingSenderId: "359853348215",
  appId: "1:359853348215:web:e402d04b74b1a73acafd72"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
