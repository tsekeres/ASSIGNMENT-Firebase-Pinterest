import { emptyBoards, showBoards } from '../boards';
import navBar from '../navBar';
import domBuilder from './domBuilder';
import { getBoards } from '../../helpers/data/boardData';
import domEvents from './domEvents';
import navEvents from './navEvents';
import showUser from '../user';

const startApp = (user) => {
  domBuilder();
  navBar();
  showUser(user);
  domEvents(user.uid);
  navEvents(user.uid);
  getBoards(user.uid).then((boards) => {
    if (boards.length) {
      showBoards(boards);
    } else {
      emptyBoards();
    }
  });
};

export default startApp;
