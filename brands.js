
let isMobile =  document.documentElement.clientWidth < 768;
const brandsList = document.querySelector('.swiper-wrapper');
const swiperContainer = document.querySelector('.swiper-container');

let mySwiper = new Swiper (swiperContainer, {
  init: false,
  slidesPerView: 1.2,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    440: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    660: {
      slidesPerView: 3
    }
  }
});

if (isMobile) {
  mySwiper.init();
  swiperContainer.style.height = "100px";
} else {
  brandsList.style.flexWrap = "wrap";
}
