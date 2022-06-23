(function() {
  // Login

  const loginForm = document.getElementById('loginForm');
  const loginEmail = document.getElementById('loginEmail');
  const loginPassword = document.getElementById('loginPassword');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", loginEmail.value);
    formData.append("password", loginPassword.value);

    fetch('/auth/login', {
      method: 'post',
      body: formData
    })
    .then((response) => {
      handleHttpResponse(response, {
        200: `Logged in as <strong>${loginEmail.value}<strong>`,
        400: 'Incorrect request',
        401: 'Email or password incorrect'
      });

      if (response.status === 200) {
        window.location.href = "/Home/Dashboard";
      };
    });
  });

  // Tabs
  const showTab = (id) => {
    const el = document.getElementById(id);

    let tab = mdb.Tab.getInstance(el);

    if (!tab) {
      tab = new mdb.Tab(el);
    }

    tab.show();
  };

  document.getElementById('register-link').addEventListener('click', (e) => {
      e.preventDefault();

      showTab('tab-register');
  });

  document.getElementById('login-link').addEventListener('click', (e) => {
    e.preventDefault();

    showTab('tab-login');
  });

  // Register

  const registerForm = document.getElementById('registerForm');
  const registerAvatar = document.getElementById('registerAvatar');
  const registerAvatarPreview = document.getElementById('registerAvatarPreview');
    
  registerAvatar.addEventListener('blur', (e) => {
    const { value } = e.target;
    const src = value === '' ? '/assets/avatar.png' : value;

    registerAvatarPreview.setAttribute('src', src);
  });


  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = document.getElementById('registerPassword');
    const repeatedPassword = document.getElementById('registerRepeatPassword');
    const name = document.getElementById('registerUsername');
    const email = document.getElementById('registerEmail');
    const avatar = document.getElementById('registerAvatar');

    const formData = new FormData();

    if (password.value === repeatedPassword.value) {
      const user = {
        Name: name.value,
        Email: email.value,
        Password: password.value,
        Avatar: avatar.value
      };

      Object.keys(user).forEach(key => {
        formData.append(key, user[key]);
      });

      fetch('/auth/register', {
        method: 'post',
        body: formData
      }).then((response) => {
        handleHttpResponse(response, {
          200: 'New account has been created',
          409: 'User with this email already exists!'
        });

        if(response.status === 200) {
          showTab('tab-login');

          document.getElementById('loginEmail').value = email.value;
          document.getElementById('loginPassword').value = password.value;

          registerForm.reset();
        };
      });
    }
    else {
      repeatedPassword.classList.add('is-invalid');

      registerForm.classList.add('was-validated');
    };
  });
})()