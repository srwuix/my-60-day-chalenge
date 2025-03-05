const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  speaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   responsive breakpoints
  breakpoints: {
    0: {
      slidePreView: 1,
    },
    620: {
      slidePreView: 2,
    },
    1024: {
      slidePreView: 3,
    },
  },
});
