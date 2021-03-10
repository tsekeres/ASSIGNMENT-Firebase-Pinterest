import { showPins } from '../pins';
import { getBoardPins, deletePin, createPin } from '../../helpers/data/pinData';
import { showBoards } from '../boards';
import { createBoard, getBoards } from '../../helpers/data/boardData';
import deleteBoardPins from '../../helpers/data/boardPinsData';
import addBoardForm from '../forms/addBoardForm';
import addPinForm from '../forms/addPinForm';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // SHOW BOARDS FROM HOME BUTTON
    if (e.target.id.includes('boards-btn')) {
      e.preventDefault();
      document.querySelector('#form-container').innerHTML = '';
      document.querySelector('#cards').innerHTML = '';
      getBoards(uid).then((boardsArray) => showBoards(boardsArray));
    }

    // SHOW PINS FROM BOARD ID
    if (e.target.id.includes('show-pins-btn')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      getBoardPins(firebaseKey).then((pinsArray) => showPins(pinsArray));
    }

    // SHOWING FORM FOR ADDING A BOARD
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }

    // SUBMITTING FORM FOR ADDING A BOARD
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        image: document.querySelector('#image').value,
        title: document.querySelector('#title').value,
        uid,
      };
      createBoard(boardObject, uid).then((boardsArray) => showBoards(boardsArray));
    }

    // SHOWING FORM FOR ADDING A PIN
    if (e.target.id.includes('add-pin-btn')) {
      addPinForm();
    }

    // SUBMITTING FORM FOR ADDING A PIN
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        board_id: document.querySelector('#board').value,
        image: document.querySelector('#image').value,
        title: document.querySelector('#title').value,
        uid,
      };
      createPin(pinObject, uid).then((pinsArray) => showPins(pinsArray));
    }

    // DELETE BOARD AND PINS
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete board and all board pins?')) {
        const boardId = e.target.id.split('--')[1];
        deleteBoardPins(boardId, uid).then((boardsArray) => showBoards(boardsArray));
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
