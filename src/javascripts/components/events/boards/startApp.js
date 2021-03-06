import navBar from '../../navBar';
import domBuilder from '../domBuilder';

const startApp = (user) => {
  domBuilder(user);
  navBar(user);
};

export default startApp;
