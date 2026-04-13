// ── SITE NAV ──────────────────────────────────────────────────────────────────
class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header class="site-header">
  <div class="header-top">
    <div class="header-top-inner">
      <div class="header-top-left">
        <span>
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
           +57 (606) 8740628 &nbsp; | &nbsp; +57 (606) 8741167
        </span>
        <span>
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          comercial@formapol.com
        </span>
        <span>
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/></svg>
          Lun – Vie: 7:30 – 17:00
        </span>
      </div>
    </div>
  </div>
  <nav>
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-mark" alt="Formapol S.A.S.">
        <img src="images/logo.png" alt="Formapol S.A.S.">
      </div>
    </a>
    <ul class="nav-links" id="navLinks">
    <li><a href="nosotros.html">Nosotros</a></li>
      <li><a href="index.html#eps">¿Qué es EPS?</a></li>
      <li><a href="productos.html">Productos</a></li>
      <!--<li><a href="obras.html">Obras</a></li>-->
      <li><a href="contacto.html" class="nav-cta">Contáctenos</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>`;

    // Marcar enlace activo según la página actual
    const page = location.pathname.split('/').pop() || 'index.html';
    this.querySelectorAll('.nav-links a').forEach(a => {
      if (a.getAttribute('href') === page) a.classList.add('active');
    });

    // Hamburger
    const hamburger = this.querySelector('#hamburger');
    const navLinks  = this.querySelector('#navLinks');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );

    // Ocultar header-top al hacer scroll
    const siteHeader = this.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      siteHeader.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }
}

// ── SITE FOOTER ───────────────────────────────────────────────────────────────
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <div class="footer-logo">
        <img src="images/logo-tras.png" alt="Formapol S.A.S.">
      </div>
      <p>Empresa fabricante de productos en poliestireno expandido (EPS): Geofoam, embalajes industriales, paneles termo-acústicos y sistemas constructivos. Certificados bajo normas ASTM.</p>
    </div>
    <div class="footer-col">
      <h5>Resources</h5>
      <ul>
        <li><a href="productos.html">Productos</a></li>
        <li><a href="nosotros.html">Nosotros</a></li>
        <li><a href="contacto.html">Contáctenos</a></li>
        <li><a href="productos.html#geofoam">Geofoam</a></li>
      </ul>
    </div>
    <div class="footer-contact">
      <h5>Get in touch</h5>
      <div class="footer-contact-box">
        <ul class="footer-info">
          <li><span class="fi-icon">📍</span><span>
            Km 10 Vía a Magdalena, 500 mts después del SENA. Manizales, Caldas. <br><br>
            KM 16 Autopista norte vereda el Noral Copacabana. Bodegas QBOX, bodega 3.
            </span></li>
          <li><span class="fi-icon">📧</span><span><a href="mailto:comercial@formapol.com">comercial@formapol.com</a></span></li>
          <li><span class="fi-icon">📞</span><span><a href="tel:+576068740628">+57 (6) 874 0628</a> | <a href="tel:+576068741167">+57 (6) 874 1167</a></span></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Formapol S.A.S. Todos los derechos reservados.</p>
    <div class="footer-bottom-links">
      <a href="contacto.html">Contacto</a>
    </div>
  </div>
</footer>`;
  }
}

// Registrar los componentes
customElements.define('site-nav', SiteNav);
customElements.define('site-footer', SiteFooter);