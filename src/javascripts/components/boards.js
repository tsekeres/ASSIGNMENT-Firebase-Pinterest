const showBoards = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-board-btn">Add Board</button>';
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#cards').innerHTML += `<div class="card">
        <img class="card-img-top" id="specific-board^^${item.firebaseKey}" src=${item.image} alt=${item.title} style="height: 120px;">
        <div class="card-body" style="height: 100px;">
        <h6 class="card-title">${item.title}</h6>
        <button class="btn btn-danger btn-sm" id="delete-board--${item.firebaseKey}">Delete Board</button>
      </div>
    </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#cards').innerHTML = '<h1 class="text-dark">No Boards</h1>';
};

export { showBoards, emptyBoards };
