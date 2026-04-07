const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Fermer en cliquant sur overlay
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
  hamburger.classList.remove('active');
});

// Fermer le menu mobile en cliquant sur un lien
const links = navLinks.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Gestion du scroll pour le style du menu fixe
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});