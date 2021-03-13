const showPins = (array) => {
  // document.querySelector('#title-container').innerHTML =
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-pin-btn">Add A Pin</button>';

  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#cards').innerHTML += `<div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 120px;">
        <div class="card-body" style="height: 100px;">
          <h6 class="card-title">${item.title}</h6>
          <button class="btn btn-info btn-sm" data-toggle="modal" data-target="#formModal" id="edit-pin-btn^^${item.firebaseKey}">Edit Pin</button>
          <button class="btn btn-danger btn-sm" id="delete-pin^^${item.firebaseKey}^^${item.board_id}">Delete Pin</button>
        </div>
      </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-pin-btn">Add A Pin</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '';
  document.querySelector('#cards').innerHTML = '<h1 class="text-dark">No Pins</h1>';
};

export { showPins, emptyPins };
