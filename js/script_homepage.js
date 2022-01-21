let close = document.querySelectorAll('.close');
let body = document.getElementById('no-animation');
let navLink = document.querySelector('.navigation-links');
let form = document.querySelectorAll('form');

window.addEventListener('load', () => {
  body.classList.remove('no-animation');
});

close[0].addEventListener('focusin', function() {
  navLink.style.height = '18rem';
});

close[0].addEventListener('focusout', function() {
  navLink.style.height = '0';
});

form[0].addEventListener('submit', (e) => {
  e.preventDefault();
});

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  gyroscope: true,
  speed: 400,
  glare: true, // if it should have a "glare" effect
  "max-glare": 1
});