/* ===== QUICK-VIEW MODAL ===== */
(function () {
  const overlay  = document.getElementById('qv-overlay');
  const closeBtn = document.getElementById('qv-close');

  function openModal(card) {
    const img     = card.querySelector('.prod-visual img');
    const cat     = card.querySelector('.prod-cat');
    const name    = card.querySelector('.prod-body h3');
    const desc    = card.querySelector('.prod-body > p');
    const current = card.querySelector('.prod-price-current');
    const mrp     = card.querySelector('.prod-price-mrp');
    const off     = card.querySelector('.prod-price-off');
    const specs   = card.querySelectorAll('.prod-specs li');
    const warranty = card.querySelector('.prod-warranty');

    document.getElementById('qv-img').src   = img  ? img.src  : '';
    document.getElementById('qv-img').alt   = img  ? img.alt  : '';
    document.getElementById('qv-cat').textContent  = cat  ? cat.textContent  : '';
    document.getElementById('qv-name').textContent = name ? name.textContent : '';
    document.getElementById('qv-desc').textContent = desc ? desc.textContent : '';

    document.getElementById('qv-price-current').textContent = current ? current.textContent : '';
    document.getElementById('qv-price-mrp').textContent     = mrp     ? mrp.textContent     : '';
    document.getElementById('qv-price-off').textContent     = off     ? off.textContent     : '';

    const specsList = document.getElementById('qv-specs');
    specsList.innerHTML = '';
    specs.forEach(li => {
      const clone = li.cloneNode(true);
      specsList.appendChild(clone);
    });

    document.getElementById('qv-warranty').textContent = warranty ? ('✓ ' + warranty.textContent) : '';

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Delegate click on every Quick View button
  document.addEventListener('click', e => {
    if (e.target.matches('[data-qv]')) {
      const card = e.target.closest('.product-card');
      if (card) openModal(card);
    }
  });

  // Also open on image double-click (bonus)
  document.addEventListener('dblclick', e => {
    const visual = e.target.closest('.prod-visual');
    if (visual) {
      const card = visual.closest('.product-card');
      if (card) openModal(card);
    }
  });

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });
})();
