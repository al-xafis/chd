// HAMBURGER

const hamburger = document.querySelector('.navbar__hamburger');
const menu = document.querySelector('.navbar__menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('block');
})



// MODAL

const searchbar = document.querySelector('.navbar__search');

const modal = document.querySelector('.navbar__modal');
const mobsearchbar = document.querySelector('#navbar-mob__search');
const mobmodal = document.querySelector('#navbar-mob__modal');

searchbar.addEventListener('click', () => {
  modal.classList.toggle('block');
})

mobsearchbar.addEventListener('click', () => {
  mobmodal.classList.toggle('block');
})

// MORE

let readMore = document.querySelector('.academy-more');
let more = document.querySelector('.more');
let dot = document.querySelector('.dot');

readMore.addEventListener('click', () => {
  more.classList.toggle('show');
  dot.classList.toggle('hide');
});

map = {disableDefaultUI: true};


