/* ============================
   BIOMOTION KIDS - Interactividad
   ============================ */

// Menú móvil
const burger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav__links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
  });

  // Cerrar menú al clickar un link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
    });
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.section__title, .section__lead, .card, .game, .step, .member, .download__card, .how__map');

revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => io.observe(el));

// Nav sólido al hacer scroll (opcional, ya es sólido pero refuerza)
const nav = document.querySelector('.nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 50) {
    nav.style.boxShadow = '0 6px 20px rgba(139, 90, 43, 0.2)';
  } else {
    nav.style.boxShadow = '0 4px 0 rgba(139, 90, 43, 0.15)';
  }
  lastScroll = y;
});
