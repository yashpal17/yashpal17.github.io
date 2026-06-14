/* ── HEADER: transparent on hero, solid on scroll / inner pages ── */
const header = document.getElementById('site-header');

function updateHeader() {
  const isTransparent = header.classList.contains('site-header--transparent');
  if (isTransparent) {
    header.classList.toggle('site-header--solid', window.scrollY > 60);
    header.classList.toggle('site-header--transparent', window.scrollY <= 60);
  }
}

if (header.classList.contains('site-header--transparent')) {
  window.addEventListener('scroll', updateHeader, { passive: true });
}

/* ── MOBILE NAV ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* ── SCROLL PROGRESS BAR ── */
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.insertBefore(progressBar, document.body.firstChild);

window.addEventListener('scroll', () => {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0) + '%';
}, { passive: true });

/* ── SCROLL-TO-TOP ── */
const scrollBtn = document.createElement('button');
scrollBtn.className = 'scroll-top';
scrollBtn.innerHTML = '&#8679;';
scrollBtn.setAttribute('aria-label', 'Back to top');
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 6) * 0.07}s`;
  revealObserver.observe(el);
});
