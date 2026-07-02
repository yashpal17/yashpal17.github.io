(function () {
  const footerHTML = `
    <div class="container">
      <div class="footer-grid row g-4">
        <div class="footer-brand col-12 col-md-6 col-lg-3">
          <a href="index.html" class="logo" style="margin-bottom:20px; display:inline-flex">
            <img src="images/ProductImages/AmbavLogo/AmbavLogoWithTagline.png" alt="Ambav" class="logo-img" />
          </a>
          <p>Manufacturing premium plumbing &amp; sanitaryware solutions since 2005. Quality, reliability, and beauty in every drop.</p>
          <div class="social-row">
            <a href="#" class="social-btn social-btn--facebook" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg><span>Facebook</span></a>
            <a href="#" class="social-btn social-btn--instagram" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg><span>Instagram</span></a>
            <a href="#" class="social-btn social-btn--youtube" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/></svg><span>YouTube</span></a>
            <a href="https://wa.me/918750772340" target="_blank" rel="noopener" class="social-btn social-btn--whatsapp" aria-label="WhatsApp"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg><span>WhatsApp</span></a>
          </div>
        </div>
        <div class="footer-col col-12 col-md-6 col-lg-3">
          <h5>Products</h5>
          <ul>
            <li><a href="products.html#health-faucets">Health Faucets</a></li>
            <li><a href="products.html#overhead-showers">Overhead Showers</a></li>
            <li><a href="products.html#taps">Taps</a></li>
            <li><a href="products.html#accessories">Accessories</a></li>
          </ul>
        </div>
        <div class="footer-col col-12 col-md-6 col-lg-3">
          <h5>Company</h5>
          <ul>
            <li><a href="about.html">About Ambav</a></li>
            <li><a href="about.html#manufacturing">Manufacturing</a></li>
            <li><a href="about.html#certifications">Certifications</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col col-12 col-md-6 col-lg-3">
          <h5>Get In Touch</h5>
          <ul class="footer-contact">
            <li>&#128205;&ensp;C 19/5 Naresh Park, Nangloi, New Delhi-110041</li>
            <li>&#128222;&ensp;<a href="tel:+918750772340" style="color:inherit">+91 87507 72340</a></li>
            <li>&#128231;&ensp;<a href="mailto:info@ambav.in" style="color:inherit">info@ambav.in</a></li>
            <li>&#128336;&ensp;Mon&ndash;Sat: 10 AM &ndash; 7 PM</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2005–<span id="copy-yr"></span> Ambav drop of trust. All rights reserved. &nbsp;&middot;&nbsp; 🇮🇳 Made in India</p>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>`;

  const footer = document.getElementById('site-footer-root');
  if (!footer) return;

  const parser = new DOMParser();
  const doc = parser.parseFromString('<footer class="site-footer">' + footerHTML + '</footer>', 'text/html');
  footer.replaceWith(doc.body.firstChild);

  const yr = document.getElementById('copy-yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
