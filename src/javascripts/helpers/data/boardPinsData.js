import { deleteBoard } from './boardData';
import { deletePin, getBoardPins } from './pinData';

// DELETE ALL PINS FROM ONE BOARD
const deleteBoardPins = (boardId, uid) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardPinsArray) => {
    const deletePins = boardPinsArray.map((pin) => deletePin(pin.firebaseKey));

    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId, uid)));
  }).catch((error) => reject(error));
});

export default deleteBoardPins;
