const home = () => {
  document.querySelector('#app').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
      <a class="navbar-brand title" href="#">TSPint</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div id="logout-button"></div>
      </div>
    </nav>    
    <h1>PINTERESTING</h1>
    <div id="main-container">
      <div id='login-form-container'></div>
    </div>`;
};

export default home;
