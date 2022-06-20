(function() {
  // User Profil
  const userInfoForm = document.getElementById('userInfoForm');
  const avatarField = document.getElementById('formAvatar');
  const nameField = document.getElementById('formName');
  const avatarPreview = document.getElementById('avatarPreview');

  avatarField.addEventListener('blur', e => {
    avatarPreview.setAttribute('src', e.target.value);
  })

  userInfoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('/users/profile', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Name: nameField.value,
        Avatar: avatarField.value
      })
    })
    .then(response => {
      if (response.status === 200)
        {
          window.location.reload();
        }
    })
  })

  // Password
  const passwordForm = document.getElementById('passwordForm');
  const currentPassword = document.getElementById('currentPassword');
  const newPassword = document.getElementById('newPassword');
  const confirmPassword = document.getElementById('confirmPassword');

  const validateField = (valid, field) => {
    const validationClasses  = ['is-valid', 'is-invalid'];
    const [classToAdd, classToRemove] = valid ? validationClasses : validationClasses.reverse();

    field.classList.remove(classToRemove);
    field.classList.add(classToAdd);
  }

  const validateForm = (fields) => {
    fields.forEach(field => validateField(field.valid, field.input));

    return fields.reduce((a, b) => { return a & b.valid}, true);
  }

  const clearForm = (form) => {
    const fields = form.getElementsByTagName('input');
    fields.forEach(field => {
      field.classList.remove('is-valid');
      field.value = "";
      
      field.dispatchEvent(new FocusEvent('blur'));
    })
  }

  passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const validForm = validateForm([
      { input: currentPassword, valid: currentPassword.value.length > 0 },
      { input: newPassword, valid: newPassword.value.length > 0 },
      { input: newPassword, valid: newPassword.value.length > 0 && confirmPassword.value === newPassword.value }
    ]);

    if (validForm)
    {
      fetch('/users/password', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Password: newPassword.value,
          OldPassword: currentPassword.value
        })
      })
      .then(response => {
        clearForm(passwordForm);

        handleHttpResponse(response, {
          200: `Your password was successfully updated`,
          400: "Invalid request", 
          401: "Access denied - incorrect password"
        })
      })
    }
  })
})()