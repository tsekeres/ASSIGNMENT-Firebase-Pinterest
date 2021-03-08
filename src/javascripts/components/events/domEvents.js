import { showPins } from '../pins';
import getBoardPins from '../helpers/data/pinData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // SHOW BOARDS FROM HOME BUTTON
    // SHOW PINS FROM BOARD ID
    if (e.target.id.includes('show-pins-btn')) {
      e.preventDefault();
      const boardId = e.target.id.split('--')[1];
      getBoardPins(boardId).then((pinsArray) => showPins(pinsArray));
    }

    // DELETE BOARD AND PINS

    // DELETE PIN

    // SHOW FORM TO ADD BOARD

    // SUBMIT ACTION FOR NEW BOARD

    // SHOW FORM TO ADD PIN

    // SUBMIT ACTION FOR NEW BOARD
  });
};

export default domEvents;
