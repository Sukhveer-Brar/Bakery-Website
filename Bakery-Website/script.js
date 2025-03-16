let navbar = document.querySelector(".header .navbar ");
let menu = document.querySelector("#menu-btn");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let cart = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cart.classList.add("active");
};

document.querySelector("#close-form").onclick = () => {
  cart.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  cnteredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".card-wrapper", {
  grabCursor: true,
  loop: true,
  spaceBetween: 30,
  cnteredSlides: true,
  // cnteredSlides: true,

  // PAGINATION
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // NAVIGATION ARROWS
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive Break Points
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var style = document.createElement("style");
var position = "right";

style.innerHTML = `
@keyframes my-animation{
0%{${position}:-${document.querySelector(".text").offsetWidth + 10}px;}
100%{${position}: 100%;}
}`;

document.head.append(style);
