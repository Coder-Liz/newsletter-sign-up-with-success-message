document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.newsletter__form');
  const emailInput = document.getElementById('email');
  const errorSpan = document.querySelector('.newsletter__error');
  const overlay = document.getElementById('overlay');
  const popup = document.getElementById('popup');
  const closeButton = document.querySelector('.newsletter__close-btn');

  // Validate email and show popup only if valid
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    if (validateEmail(emailInput.value)) {
      showPopup();
      document.querySelector(
        '.newsletter__popup-content p strong'
      ).textContent = emailInput.value;
    } else {
      showError('Valid email required');
    }
  });

  // Live validation on input
  emailInput.addEventListener('input', function () {
    if (this.value === '') {
      showError('Email address required');
    } else if (!validateEmail(this.value)) {
      showError('Valid email required');
    } else {
      hideError();
    }
  });

  // Attach event listener for closing popup
  closeButton.addEventListener('click', closePopup);

  function validateEmail(email) {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
  }

  function showError(message) {
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
    emailInput.classList.add('error');

    // Apply error styling manually
    emailInput.style.background = 'var(--clr-accent-100)';
    emailInput.style.border = '1px solid var(--clr-accent-400)';
    emailInput.style.color = 'var(--clr-accent-400)';
  }

  function hideError() {
    errorSpan.style.display = 'none';
    emailInput.classList.remove('error');

    // Reset styles when valid
    emailInput.style.background = '';
    emailInput.style.border = '1px solid var(--clr-neutral-200)';
    emailInput.style.color = 'var(--clr-neutral-200)';
  }

  // function showPopup() {
  //   overlay.classList.add('open');
  //   popup.classList.add('open');
  // }

  // function closePopup() {
  //   overlay.classList.remove('open');
  //   popup.classList.remove('open');
  //   form.reset();
  //   hideError();
  // }
});
