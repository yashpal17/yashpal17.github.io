(function () {
  const page   = window.location.pathname.split('/').pop() || 'index.html';
  const isHome = page === 'index.html' || page === '';

  const header = document.getElementById('site-header');
  header.classList.add(isHome ? 'site-header--transparent' : 'site-header--solid');

  const navHTML = `
    <nav class="navbar">
      <a href="index.html" class="logo">
        <img src="images/ProductImages/AmbavLogo/AmbavLogoWithTagline.png" alt="Ambav" class="logo-img" />
      </a>
      <ul class="nav-links" id="nav-links">
        <li><a href="index.html"    data-page="index.html">Home</a></li>
        <li><a href="products.html" data-page="products.html">Products</a></li>
        <li><a href="about.html"    data-page="about.html">About</a></li>
        <li><a href="contact.html"  data-page="contact.html">Contact</a></li>
      </ul>
      <div class="nav-search" id="nav-search">
        <button class="nav-search-toggle" id="search-toggle" aria-label="Search products">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <span class="nav-search-label">Search</span>
        </button>
        <div class="nav-search-box" id="search-box">
          <div class="nav-search-input-row">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" class="nav-search-input" id="search-input" placeholder="Search health faucets, taps…" autocomplete="off" />
            <button class="nav-search-close" id="search-close" aria-label="Close search">×</button>
          </div>
          <div class="nav-search-results" id="search-results"></div>
        </div>
      </div>
      <a href="contact.html#contact-form" class="btn btn-gold nav-cta">Get a Quote <span class="nav-cta-arrow">→</span></a>
      <button class="hamburger" id="hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>
    </nav>`;

  const parser  = new DOMParser();
  const navNode = parser.parseFromString(navHTML, 'text/html').body.firstChild;
  header.appendChild(navNode);

  header.querySelectorAll('.nav-links a[data-page]').forEach(function (link) {
    if (link.getAttribute('data-page') === page) {
      link.classList.add('active');
    }
  });
})();
