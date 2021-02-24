var darkMode = document.getElementById('input-color-switch');

darkMode.addEventListener('click', function () {
  darkMode.classList.toggle('active');
  document.body.classList.toggle('dark-mode');
});

const toggleNav = () => {
  var nav = document.getElementById('nav-items-id');
  if (nav.className === 'nav-items') {
    nav.className += ' responsive';
  } else {
    nav.className = 'nav-items';
  }
};

const closeNav = () => {
  var nav = document.getElementById('nav-items-id');
  nav.className = 'nav-items';
};
