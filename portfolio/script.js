// Portfolio Website JS
// - Hamburger menu
// - Smooth scroll
// - Skills fade-in animation

document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close menu on link click (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // Smooth scroll (for browsers that don't support CSS smooth-scroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Skills fade-in animation on scroll
  const skillCards = document.querySelectorAll('.skill-card');
  const revealSkills = () => {
    const trigger = window.innerHeight * 0.85;
    skillCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if(rect.top < trigger) {
        card.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealSkills);
  revealSkills();
});
