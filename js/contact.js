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

  if (!valid) return;

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending…';
  btn.setAttribute('data-sending', 'true');

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
      alert('Something went wrong. Please try again or email us directly at info@ambav.in');
    }
  } catch {
    alert('Network error. Please check your connection and try again.');
  } finally {
    btn.disabled = false;
    btn.removeAttribute('data-sending');
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:10px;vertical-align:-3px"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>Send Message';
  }
});

/* ===== RESPONSE TIME BY ENQUIRY TYPE ===== */
const enquirySelect = document.getElementById('enquiry');
const responseNote  = document.getElementById('response-note');
const responseMap   = {
  'quote':    'Quote requests — we respond within 4 business hours.',
  'bulk':     'Bulk / B2B orders — we respond within 4 business hours.',
  'dealer':   'Dealer applications — we respond within 1 business day.',
  'support':  'Product support — we respond within 1 business day.',
  'warranty': 'Warranty claims — we respond within 48 hours.',
  'other':    'We respond within one business day.',
  '':         'We respond within one business day.'
};
if (enquirySelect && responseNote) {
  enquirySelect.addEventListener('change', () => {
    responseNote.textContent = responseMap[enquirySelect.value] || responseMap[''];
  });
}

/* ===== FAQ ACCORDION ===== */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item     = btn.closest('.faq-item');
    const isOpen   = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ===== FLOATING LABEL EFFECT ===== */
form.querySelectorAll('input, textarea, select').forEach(input => {
  input.addEventListener('focus', () => input.classList.add('focused'));
  input.addEventListener('blur',  () => input.classList.remove('focused'));
});
