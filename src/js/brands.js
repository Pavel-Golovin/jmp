const showAndHideToggle = document.querySelector('.section__show-all');
const sectionList = document.querySelector('.swiper-wrapper');
const swiperContainer = document.querySelector('.swiper-container');

let isMobile =  document.documentElement.clientWidth < 768;

showAndHideToggle.addEventListener('click', function() {
    this.innerText = (this.innerText === 'Показать всё') ? 'Скрыть' : 'Показать всё';
    this.classList.toggle('toggle-btn--reversed');
    swiperContainer.classList.toggle('section__content--all');
});

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
  showAndHideToggle.style.display = "none";
    sectionList.style.flexWrap = "nowrap";
}
