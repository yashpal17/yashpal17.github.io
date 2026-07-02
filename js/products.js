/* ===== AMBAV — PRODUCTS PAGE ===== */

/*
 * Section registry — the only place to touch when adding a paginated category.
 */
const SECTIONS = [
  { category: 'health-faucets', paginationId: 'hf-pagination', perPage: 6 },
  { category: 'taps',           paginationId: 'tap-pagination', perPage: 6 },
  { category: 'accessories',    paginationId: 'acc-pagination', perPage: 6 },
];

/* Resolve DOM references and page state once at startup */
SECTIONS.forEach(s => {
  s.cards = Array.from(document.querySelectorAll(`.product-card[data-category="${s.category}"]`));
  s.pagEl = document.getElementById(s.paginationId);
  s.current = 1;
});

/* ===== PAGINATION ===== */
function buildPagination(section) {
  const { cards, perPage, pagEl, category } = section;
  pagEl.innerHTML = '';
  const pageCount = Math.ceil(cards.length / perPage);
  if (pageCount <= 1) return;

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement('button');
    btn.className    = 'page-btn page-link' + (i === 1 ? ' active' : '');
    btn.dataset.page = String(i);
    btn.textContent  = i;
    btn.addEventListener('click', () => {
      showPage(section, i);
      const sectionEl = document.getElementById(category);
      if (sectionEl) {
        window.scrollTo({ top: sectionEl.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
      }
    });
    pagEl.appendChild(btn);
  }
}

function showPage(section, page) {
  const { cards, perPage, pagEl } = section;
  section.current = page;
  const start = (page - 1) * perPage;
  const end   = start + perPage;
  cards.forEach((card, i) => {
    card.style.display = (i >= start && i < end) ? '' : 'none';
  });
  pagEl.querySelectorAll('button').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.page) === page);
  });
}

function resetAll() {
  SECTIONS.forEach(s => showPage(s, 1));
}

SECTIONS.forEach(buildPagination);

/* ===== FILTER TABS ===== */
const tabs = document.querySelectorAll('.filter-tab');
const cats = document.querySelectorAll('.product-category');

function applyFilter(filter) {
  tabs.forEach(t => t.classList.toggle('active', t.dataset.filter === filter));
  cats.forEach(cat => {
    cat.style.display = (filter === 'all' || cat.id === filter) ? '' : 'none';
  });
  resetAll();
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => applyFilter(tab.dataset.filter));
});

/* ===== HIGHLIGHT FROM SEARCH ===== */
(function () {
  const params    = new URLSearchParams(window.location.search);
  const highlight = params.get('highlight');
  const query     = params.get('q');

  if (highlight) {
    const card = document.getElementById(highlight);
    if (card) {
      SECTIONS.forEach(s => {
        const idx = s.cards.indexOf(card);
        showPage(s, idx !== -1 ? Math.floor(idx / s.perPage) + 1 : 1);
      });

      cats.forEach(c => c.style.display = '');
      history.replaceState(null, '', window.location.pathname + (window.location.hash || ''));

      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('product-card--highlighted');
        setTimeout(() => card.classList.remove('product-card--highlighted'), 4000);
      }, 400);
      return;
    }
  }

  if (query) {
    const q = query.toLowerCase().trim();
    const CATEGORY_MAP = {
      'health faucet': 'health-faucets', 'health faucets': 'health-faucets',
      'faucet': 'health-faucets', 'jet spray': 'health-faucets',
      'overhead shower': 'overhead-showers', 'overhead showers': 'overhead-showers',
      'rainshower': 'overhead-showers', 'shower': 'overhead-showers',
      'tap': 'taps', 'taps': 'taps', 'cock': 'taps',
      'accessory': 'accessories', 'accessories': 'accessories',
      'shelf': 'accessories', 'hook': 'accessories', 'hose': 'accessories',
    };
    const matched = Object.keys(CATEGORY_MAP).find(alias => q.includes(alias));
    applyFilter(matched ? CATEGORY_MAP[matched] : 'all');
    history.replaceState(null, '', window.location.pathname);
    return;
  }

  resetAll();

  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  }
})();
