import selectBoard from './selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="title">Pin Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="pinTitle" placeholder="Enter Pin Title" value="${pinObject.title}" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" value="${pinObject.image}" required>
      </div>
      <div class="form-group" id="select-board">
      </div>
      <button type="submit" id="edit-pin--${pinObject.firebaseKey}" class="btn btn-primary">Submit Pin</button>
    </form>`;

  selectBoard(pinObject);
};

export default editPinForm;
