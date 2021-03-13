const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="user-title"></div>
    <div id="title-container"></div>
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div class="d-flex flex-wrap justify-content-around" id="cards"></div>
  </div>`;
};

export default domBuilder;
