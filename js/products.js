/* ===== HEALTH FAUCET PAGINATION ===== */
let currentPage = 1;

function showPage(page) {
  currentPage = page;
  document.querySelectorAll('[data-hf-page]').forEach(card => {
    card.style.display = parseInt(card.dataset.hfPage) === page ? '' : 'none';
  });
  document.querySelectorAll('.page-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.page) === page);
  });
}

/* ===== TAP PAGINATION ===== */
let currentTapPage = 1;

function showTapPage(page) {
  currentTapPage = page;
  document.querySelectorAll('[data-tap-page]').forEach(card => {
    card.style.display = parseInt(card.dataset.tapPage) === page ? '' : 'none';
  });
  document.querySelectorAll('.page-btn-tap').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.page) === page);
  });
}

/* ===== PRODUCT FILTER TABS ===== */
const tabs = document.querySelectorAll('.filter-tab');
const cats = document.querySelectorAll('.product-category');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    cats.forEach(cat => {
      cat.style.display = (filter === 'all' || cat.id === filter) ? '' : 'none';
    });

    if (filter === 'all' || filter === 'health-faucets') {
      showPage(1);
    }
    if (filter === 'all' || filter === 'taps') {
      showTapPage(1);
    }
  });
});

// Bind HF pagination buttons
document.querySelectorAll('.page-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    showPage(parseInt(btn.dataset.page));
    const section = document.getElementById('health-faucets');
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

// Bind tap pagination buttons
document.querySelectorAll('.page-btn-tap').forEach(btn => {
  btn.addEventListener('click', () => {
    showTapPage(parseInt(btn.dataset.page));
    const section = document.getElementById('taps');
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

/* ===== HIGHLIGHT FROM SEARCH ===== */
// Script is at bottom of <body> so DOM is already ready — no DOMContentLoaded needed
(function () {
  const params    = new URLSearchParams(window.location.search);
  const highlight = params.get('highlight');

  if (highlight) {
    const card = document.getElementById(highlight);
    if (card) {
      // Switch to the correct pagination page before anything else
      const hfPage = parseInt(card.dataset.hfPage);
      const tapPage = parseInt(card.dataset.tapPage);
      if (hfPage) {
        showPage(hfPage);
        showTapPage(1);
      } else if (tapPage) {
        showTapPage(tapPage);
        showPage(1);
      } else {
        showPage(1);
        showTapPage(1);
      }

      // Ensure all category sections are visible
      cats.forEach(c => c.style.display = '');

      // Remove ?highlight= from URL so refresh doesn't re-trigger
      const cleanUrl = window.location.pathname + (window.location.hash || '');
      history.replaceState(null, '', cleanUrl);

      // Scroll + highlight after layout settles
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('product-card--highlighted');
        setTimeout(() => card.classList.remove('product-card--highlighted'), 4000);
      }, 400);
      return;
    }
  }

  // No highlight — normal init: show page 1
  showPage(1);
  showTapPage(1);

  // Handle plain hash anchor (e.g. from footer links)
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  }
})();
