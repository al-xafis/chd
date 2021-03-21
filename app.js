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




// CLOSE DROPDOWN ON CLICK OUTSIDE

window.onclick = function(e) {
  if (!e.target.matches('.centers__dropdown')) {
    dropMenu1.classList.remove('block');
    dropMenu2.classList.remove('block');
    open_1 = false;
    open_2 = false;
    arrow_1.className = "centers__dropdown-arrow";
    arrow_2.className = "centers__dropdown-arrow";
    if (open_1) {
      arrow_1.className = "centers__dropdown-arrow";
    }
    

    if (open_2) {
      arrow_2.className = "centers__dropdown-arrow";
    }
  }
}


// SECOND DROPDOWN

function selectOnlyThis(id) {
  
  document.getElementById('high').checked = false;
  document.getElementById('low').checked = false;
  document.getElementById(id).checked = true;
  
}

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


// SWIPER 

var swiper_text = new Swiper(".swiper-container-text", {
  slidesPerView: 1,
  // speed: 1,
  // spaceBetween: 50,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".pagination-text",
    clickable: true,
  },
});

var swiper_carousel = new Swiper(".carousel-container", {
  slidesPerView: 1,
  spaceBetween: 3000,
  loop: true,
  pagination: {
    el: ".pagination-carousel",
    clickable: true,
  },
  navigation: {
  nextEl: '.carousel__right',
  prevEl: '.carousel__left',
},
});


