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

// Gif Hover
const soleImage = document.getElementById('sole-image');
soleImage.addEventListener(
  'mouseover',
  () => {
    let now = Date.now();
    soleImage.style.backgroundImage = `url('/assets/sole-composer.gif?${now}')`;
  },
  false
);
soleImage.addEventListener(
  'mouseout',
  () => {
    soleImage.style.backgroundImage = "url('/assets/sole-composer.jpg')";
  },
  false
);

// const calculatorImage = document.getElementById('calculator-image');
// calculatorImage.addEventListener(
//   'mouseover',
//   () => {
//     let now = Date.now();
//     calculatorImage.style.backgroundImage = `url('/assets/sole-composer.gif?${now}')`;
//   },
//   false
// );
// calculatorImage.addEventListener(
//   'mouseout',
//   () => {
//     calculatorImage.style.backgroundImage =
//       "url('/assets/calculator-watch.jpg')";
//   },
//   false
// );

const heintzImage = document.getElementById('heintz-image');
heintzImage.addEventListener(
  'mouseover',
  () => {
    let now = Date.now();
    heintzImage.style.backgroundImage = `url('/assets/heintz-co.gif?${now}')`;
  },
  false
);
heintzImage.addEventListener(
  'mouseout',
  () => {
    heintzImage.style.backgroundImage = "url('/assets/heintz-co.jpg')";
  },
  false
);

const squiggleImage = document.getElementById('squiggle-image');
squiggleImage.addEventListener(
  'mouseover',
  () => {
    let now = Date.now();
    squiggleImage.style.backgroundImage = `url('/assets/squiggle-pig.gif?${now}')`;
  },
  false
);
squiggleImage.addEventListener(
  'mouseout',
  () => {
    squiggleImage.style.backgroundImage = "url('/assets/squiggle-pig.jpg')";
  },
  false
);
