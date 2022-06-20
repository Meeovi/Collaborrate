export default class ContactForm {
  constructor(element, url) {
    this._element = element;
    this._url = url;

    this._btn = this._element.querySelector('button');
    this._btnOriginalValue = this._btn.textContent;

    this._status = this._createStatusContainer();

    this._listenToSubmit();
  }

  _listenToSubmit() {
    this._element.addEventListener('submit', this._handleSubmit);
  }

  _handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(this._element);

    const isValid = this._validateForm();

    if (isValid) {
      this._showLoader();
      this._sendForm(data);
    }
  };

  _validateForm() {
    let isValid = true;

    if (!this._element.checkValidity()) {
      isValid = false;
    }
    this._element.classList.add('was-validated');

    return isValid;
  }

  _showLoader() {
    this._btn.innerHTML = `
    <span
    class="spinner-border spinner-border-sm"
    role="status"
    aria-hidden="true"
    ></span>
    <span class="visually-hidden">Loading...</span>
    `;
  }

  _sendForm(data) {
    fetch(this._url, {
      method: 'POST',
      mode: 'cors',
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          response.errors.forEach(({ msg }) => {
            this._showStatusMessage(msg, 'error');
          });
          return;
        }
        this._clearInputs();
        this._showStatusMessage(response.msg, 'success');
      })
      .catch((err) => {
        this._showStatusMessage(err.msg, 'error');
      })
      .finally(() => {
        this._element.classList.remove('was-validated');
        this._clearLoader();
      });
  }

  _createStatusContainer() {
    const status = document.createElement('div');
    status.classList.add('contact-form-status');

    this._element.appendChild(status);

    return status;
  }

  _showStatusMessage(msg, status) {
    if (status === 'error') {
      status = 'danger';
    }

    this._status.innerHTML += `<p class="note note-${status}">${msg}</p>`;
    setTimeout(() => {
      this._status.innerHTML = '';
    }, 5000);
  }

  _clearLoader() {
    this._btn.innerHTML = this._btnOriginalValue;
  }

  _clearInputs() {
    const inputs = this._element.querySelectorAll('[name]');

    inputs.forEach((input) => {
      if (input.type === 'checkbox') {
        input.checked = false;
        return;
      }

      input.classList.remove('active');

      input.value = '';
    });
  }
}
