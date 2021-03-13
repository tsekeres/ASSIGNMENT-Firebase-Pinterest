const showUser = (user) => {
  document.querySelector('#user-title').innerHTML = `
  <div id="user-data">
    <img id="user-image" src="${user.photoURL}">
    <h3 id="user-name">${user.displayName}</h3>
  </div>`;
};

export default showUser;
