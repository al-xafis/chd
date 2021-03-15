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



// DROPDOWN

const drop1 = document.querySelector('#drop-1');
const dropMenu1 = document.querySelector('#drop-menu-1');

const drop2 = document.querySelector('#drop-2');
const dropMenu2 = document.querySelector('#drop-menu-2');


let open_1 = false;

drop1.addEventListener('click', (e) => {
  e.stopPropagation();
  dropMenu1.classList.toggle('block');
  if (open_1) {
    arrow_1.className = "centers__dropdown-arrow";
  }
  else {
    arrow_1.className = "centers__dropdown-arrow open"
  }
  
  open_1 = !open_1;
})

let open_2 = false;

drop2.addEventListener('click', (e) => {
  e.stopPropagation();
  dropMenu2.classList.toggle('block');
  if (open_2) {
    arrow_2.className = "centers__dropdown-arrow";
  }
  else {
    arrow_2.className = "centers__dropdown-arrow open"
  }
  
  open_2 = !open_2;
})

dropMenu1.addEventListener('click', (e) => {
  e.stopPropagation();
})

dropMenu2.addEventListener('click', (e) => {
  e.stopPropagation();
})



// TICK

document.querySelectorAll('#drop-menu-1 .dropdown__item').forEach(item => {
  item.addEventListener('click', e => {
    item.classList.toggle('tick');
  })
})

const high = document.getElementById('high');
const low = document.getElementById('low');

high.addEventListener('click', e => {
  high.classList.toggle('tick');
  if (low.classList.contains('tick')) {
    low.classList.remove('tick');
  }
});

low.addEventListener('click', e => {
  low.classList.toggle('tick');
  if (high.classList.contains('tick')) {
    high.classList.remove('tick');
  }
});

// courses

document.querySelector('#c-1').addEventListener('click', e => {
  e.target.classList.toggle('green');
})

document.querySelector('#c-2').addEventListener('click', e => {
  e.target.classList.toggle('blue');
})

document.querySelector('#c-3').addEventListener('click', e => {
  e.target.classList.toggle('violet');
})

document.querySelector('#c-4').addEventListener('click', e => {
  e.target.classList.toggle('yellow');
})




