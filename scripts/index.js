const burgerClick = document.querySelector(".header__burger");
// const burgerOpenMobile = document.querySelector(".header__mobile-wrapper");
// const scrollLock = document.querySelector(".page");
// const linkMobileMenu = document.querySelectorAll('.header__mobile-link');

/***открытие бургера***/
burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  // burgerOpenMobile.classList.toggle("header__mobile-wrapper_open");
  // scrollLock.classList.toggle("lock");
});

const buttonTechDown = document.querySelector(".tech__top-button");
const techTopImage = document.querySelector(".tech__top");
const buttonTechImg = document.querySelector(".tech__top-icon");

buttonTechDown.addEventListener("click", () => {
  techTopImage.classList.toggle("tech__top-full");
  buttonTechImg.classList.toggle("active");
});

const swiper1 = new Swiper(".hero__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: ".hero__swiper-button-next",
    prevEl: ".hero__swiper-button-prev",
  },
});

const swiper2 = new Swiper(".services__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".services__swiper-button-next",
    prevEl: ".services__swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper3 = new Swiper(".tech__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".tech__swiper-button-next",
    prevEl: ".tech__swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper4 = new Swiper(".process__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".process__swiper-button-next",
    prevEl: ".process__swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
