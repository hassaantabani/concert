// Shared behavior for all pages.

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile navigation menu -------------------------------------------
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isClosed = mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', String(!isClosed));
      menuBtn.querySelector('.material-symbols-outlined').textContent =
        isClosed ? 'menu' : 'close';
    });

    // Close the menu after picking a page so it never lingers.
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.querySelector('.material-symbols-outlined').textContent = 'menu';
      });
    });
  }

  // --- Arena audio toggle ------------------------------------------------
  const audioBtn = document.getElementById('arena-audio-btn');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      const pressed = audioBtn.getAttribute('aria-pressed') === 'true';
      audioBtn.setAttribute('aria-pressed', String(!pressed));
      audioBtn.querySelector('.material-symbols-outlined').textContent =
        pressed ? 'volume_up' : 'volume_off';
    });
  }

  // --- Newsletter signup in the footer -----------------------------------
  document.querySelectorAll('.newsletter-form').forEach((form) => {
    const input = form.querySelector('input[type="email"]');
    const btn = form.querySelector('button');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!input || !input.value) return;
      input.value = '';
      if (btn) {
        const original = btn.textContent;
        btn.textContent = 'Joined!';
        setTimeout(() => { btn.textContent = original; }, 2500);
      }
    });
  });
});
