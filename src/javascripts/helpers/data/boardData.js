import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json`)
    .then((response) => {
      if (response.data) {
        const boardsArray = Object.values(response.data);
        resolve(boardsArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${boardId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getBoards, getSingleBoard };
