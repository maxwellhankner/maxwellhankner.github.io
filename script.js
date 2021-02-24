// Dark Mode
let darkMode = document.getElementById('input-color-switch');

darkMode.addEventListener('click', () => {
  darkMode.classList.toggle('active');
  document.body.classList.toggle('dark-mode');
});

// Mobile Navbar
const toggleNav = () => {
  var nav = document.getElementById('nav-items-id');
  nav.classList.toggle('responsive');
};

const closeNav = () => {
  var nav = document.getElementById('nav-items-id');
  nav.classList.remove('responsive');
};
