import { showPins } from '../pins';
import { getBoardPins, deletePin } from '../../helpers/data/pinData';
import { showBoards } from '../boards';
import { getBoards } from '../../helpers/data/boardData';
import deleteBoardPins from '../../helpers/data/boardPinsData';

const domEvents = (userId) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // SHOW BOARDS FROM HOME BUTTON
    if (e.target.id.includes('boards-btn')) {
      e.preventDefault();
      document.querySelector('#form-container').innerHTML = '';
      document.querySelector('#cards').innerHTML = '';
      getBoards(userId).then((boardsArray) => showBoards(boardsArray));
    }
    // SHOW PINS FROM BOARD ID
    if (e.target.id.includes('show-pins-btn')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      getBoardPins(firebaseKey).then((pinsArray) => showPins(pinsArray));
    }

    // DELETE BOARD AND PINS
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete board and all board pins?')) {
        const boardId = e.target.id.split('--')[1];
        deleteBoardPins(boardId, userId).then((boardsArray) => showBoards(boardsArray));
      }
    }

    // DELETE PIN
    if (e.target.id.includes('delete-pin')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        const boardId = e.target.id.split('--')[2];
        deletePin(firebaseKey, boardId).then((pinsArray) => showPins(pinsArray));
      }
    }
    // SHOW FORM TO ADD BOARD

    // SUBMIT ACTION FOR NEW BOARD

    // SHOW FORM TO ADD PIN

    // SUBMIT ACTION FOR NEW BOARD
  });
};

export default domEvents;
