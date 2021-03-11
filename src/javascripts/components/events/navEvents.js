import { getBoards } from '../../helpers/data/boardData';
import { showBoards } from '../boards';

const navEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // SHOW BOARDS FROM HOME BUTTON
    if (e.target.id.includes('boards-btn')) {
      e.preventDefault();
      document.querySelector('#form-container').innerHTML = '';
      document.querySelector('#cards').innerHTML = '';
      getBoards(uid).then((boardsArray) => showBoards(boardsArray));
    }
  });
};

export default navEvents;
