const boardInfo = (boardObject) => {
  document.querySelector('#title-container').innerHTML += `<h1 class="text-black">${boardObject.title}</h1>`;
};

export default boardInfo;
