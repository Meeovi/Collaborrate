// MAIL FORM VALIDATION
(() => {

  const forms = document.querySelectorAll('.requires-validation');

  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const { isDataValid, statusMessage } = validateForm();

  if (!isDataValid) {
    document.getElementById('status').innerHTML = statusMessage;
    return;
  }

  document.getElementById('status').innerHTML =
    '<p class="note note-light text-dark">Sending mail...</p>';

  fetch('./mail.php', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.code) {
        // If mail was sent successfully, reset the form;
        const values = document.querySelectorAll('.form-control');
        values.forEach((value) => {
          value.textContent = '';
        });

        document.getElementById(
          'status'
        ).innerHTML = `<p class="note note-success text-dark">${response.message}</p>`;
        setTimeout(() => {
          document.getElementById('status').innerHTML = '';
        }, 5000);
      } else {
        document.getElementById(
          'status'
        ).innerHTML = `<p class="note note-danger text-dark">${response.message}</p>`;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// Validate form function
function validateForm() {
  let isDataValid = true;
  let statusMessage = '';

  const name = document.getElementById('name').value;
  if (name === '') {
    statusMessage += '<p class="note note-danger text-dark"><strong>Name</strong> cannot be empty</p>';
    isDataValid = false;
  }

  const email = document.getElementById('email').value;
  if (email === '') {
    statusMessage += '<p class="note note-danger text-dark"><strong>Email</strong> cannot be empty</p>';
    isDataValid = false;
  } else {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<p>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
      statusMessage += '<p class="note note-danger text-dark"><strong>Email</strong> is invalid</p>';
      isDataValid = false;
    }
  }

  const subject = document.getElementById('subject').value;
  if (subject === '') {
    statusMessage += '<p class="note note-danger text-dark"><strong>Subject</strong> cannot be empty</p>';
    isDataValid = false;
  }
  const message = document.getElementById('message').value;
  if (message === '') {
    statusMessage += '<p class="note note-danger text-dark"><strong>Message</strong> cannot be empty</p>';
    isDataValid = false;
  }

  return {
    isDataValid,
    statusMessage,
  };
}

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}