const swiper1 = new Swiper(".hero__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
    nextEl: ".swiper-button-next-mobile",
    prevEl: ".swiper-button-prev-mobile",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
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
