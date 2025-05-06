const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const body = document.querySelector('body');

menuToggle.addEventListener('click', () => {
  // Check window size on click to apply the correct navigation state
  if (window.innerWidth <= 768) {
    nav.classList.toggle('active');  // Toggle the mobile navigation visibility
  }
});
