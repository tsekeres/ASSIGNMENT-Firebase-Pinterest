import { deleteBoard, getSingleBoard } from './boardData';
import { deletePin, getBoardPins } from './pinData';

// DELETE ALL PINS FROM ONE BOARD
const deleteBoardPins = (boardId, uid) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardPinsArray) => {
    const deletePins = boardPinsArray.map((pin) => deletePin(pin.firebaseKey));

    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId, uid)));
  }).catch((error) => reject(error));
});

// GET BOARD INFO FOR TITLE
const boardPinInfo = (firebaseKey) => new Promise((resolve, reject) => {
  const board = getSingleBoard(firebaseKey);
  const boardPins = getBoardPins(firebaseKey);

  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve({ board: boardResponse, pins: boardPinsResponse }))
    .catch((error) => reject(error));
});

export { deleteBoardPins, boardPinInfo };
