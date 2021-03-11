import { showPins } from '../pins';
import {
  getBoardPins, deletePin, createPin, getSinglePin, updatePin
} from '../../helpers/data/pinData';
import { showBoards } from '../boards';
import { createBoard } from '../../helpers/data/boardData';
import deleteBoardPins from '../../helpers/data/boardPinsData';
import addBoardForm from '../forms/addBoardForm';
import addPinForm from '../forms/addPinForm';
import editPinForm from '../forms/editPinForm';
import formModal from '../forms/formModal';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
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

    // SHOWING FORM FOR EDITING A PIN
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Pin');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }

    // SUBMITTING TO EDIT A PIN
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const pinObject = {
        board_id: document.querySelector('#board').value,
        image: document.querySelector('#image').value,
        title: document.querySelector('#title').value,
      };

      updatePin(firebaseKey, pinObject).then((pinsArray) => showPins(pinsArray));

      $('#formModal').modal('toggle');
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
  });
};

export default domEvents;
