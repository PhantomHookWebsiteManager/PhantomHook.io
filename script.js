// Minimal JS: mobile nav toggle, smooth scroll, set year
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('show');
    });

    // close nav when link clicked (mobile)
    nav.querySelectorAll('.nav-link').forEach(a => {
      a.addEventListener('click', () => {
        if (nav.classList.contains('show')) nav.classList.remove('show');
      });
    });
  }

  // smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 60,
          behavior: 'smooth'
        });
      }
    });
  });
});
