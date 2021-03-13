import domBuilder from './events/domBuilder';

const home = () => {
  domBuilder();
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="https://pngimg.com/uploads/pinterest/pinterest_PNG45.png" alt="" width="30" height="24">
        </a>
      </div>
    </nav>    
    <h1>PINTERESTING</h1>
    <div id="main-container">
      <div id="login-form-container"></div>
    </div>`;
};

export default home;
