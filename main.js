
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    document.body.classList.toggle('nav-open', nav.classList.contains('open'));
  });
}

  const modal = document.getElementById('tripModal');
  const tripType = document.getElementById('tripType');
  const openers = document.querySelectorAll('.open-trip-form');
  const closers = document.querySelectorAll('[data-close-trip-form]');

  function openModal(trip) {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (tripType && trip) tripType.value = trip;
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openers.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal(btn.getAttribute('data-trip') || 'General Trip Request');
    });
  });

  closers.forEach(btn => btn.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
