var darkMode = document.getElementById('input-color-switch');

darkMode.addEventListener('click', function () {
  darkMode.classList.toggle('active');
  document.body.classList.toggle('dark-mode');
});
