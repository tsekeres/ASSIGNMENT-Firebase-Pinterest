import firebase from 'firebase/app';
import 'firebase/auth';
import startApp from '../components/events/boards/startApp';
import home from '../components/home';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp();
      logoutButton();
    } else {
      // person is NOT logged in
      home();
      loginButton();
    }
  });
};

export default checkLoginStatus;
