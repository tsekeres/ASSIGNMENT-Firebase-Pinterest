// import { emptyBoards, showBoards } from '../boards';
import navBar from '../navBar';
import domBuilder from './domBuilder';
// import getBoards from '../helpers/data/boardData';
import domEvents from './domEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  domEvents(user.uid);
  // getBoards(user).then((boards) => {
  //   if (boards.length) {
  //     showBoards(boards);
  //   } else {
  //     emptyBoards();
  //   }
  // });
};

export default startApp;
