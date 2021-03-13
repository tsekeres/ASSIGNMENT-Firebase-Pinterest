import firebase from 'firebase/app';
import 'firebase/auth';
import startApp from '../components/events/startApp';
import home from '../components/home';
import loginButton from './loginButton';
import logoutButton from './logoutButton';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
      logoutButton();
    } else {
      // person is NOT logged in
      home();
      loginButton();
    }
  });
};

export default checkLoginStatus;
