/* ===== CONTACT FORM — validates then submits to Web3Forms ===== */
const form    = document.getElementById('contact-form');
const success = document.getElementById('form-success');

function showError(id, msg) {
  const el    = document.getElementById(id + '-error');
  const input = document.getElementById(id);
  if (el)    el.textContent = msg;
  if (input) input.classList.toggle('error', !!msg);
}

function clearErrors() {
  ['name', 'phone', 'email', 'message'].forEach(f => showError(f, ''));
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearErrors();

  const name    = form.name.value.trim();
  const phone   = form.phone.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();
  let valid = true;

  if (!name) {
    showError('name', 'Full name is required.');
    valid = false;
  }

  if (!phone) {
    showError('phone', 'Phone number is required.');
    valid = false;
  } else if (!/^[+\d\s\-()]{7,20}$/.test(phone)) {
    showError('phone', 'Enter a valid phone number.');
    valid = false;
  }

  if (!email) {
    showError('email', 'Email address is required.');
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('email', 'Enter a valid email address.');
    valid = false;
  }

  if (!message) {
    showError('message', 'Please write a message.');
    valid = false;
  }

  if (!valid) return;

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  try {
    const data     = new FormData(form);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body:   data
    });
    const result = await response.json();

    if (result.success) {
      form.reset();
      success.classList.add('visible');
      setTimeout(() => success.classList.remove('visible'), 6000);
    } else {
      alert('Something went wrong. Please try again or email us directly at yashpal17sharma@gmail.com');
    }
  } catch {
    alert('Network error. Please check your connection and try again.');
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'Send Message &#10148;';
  }
});

/* ===== FLOATING LABEL EFFECT ===== */
form.querySelectorAll('input, textarea, select').forEach(input => {
  input.addEventListener('focus', () => input.classList.add('focused'));
  input.addEventListener('blur',  () => input.classList.remove('focused'));
});
