import firebase from 'firebase/app';
import 'firebase/auth';

const signOut = () => {
  document.querySelector("body").removeEventListener("click", domClickEvents);
  firebase.auth().signOut();
};

export default signOut;
