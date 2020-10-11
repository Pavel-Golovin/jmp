'use strict';

const showAndHideToggles = document.querySelectorAll('.section__show-all');
const sectionContents = document.querySelectorAll('.section__content');

const brandsList = document.querySelector('.section__list--brands');
const brandsContainer = document.querySelector('.section__content--brands');

const devicesList = document.querySelector('.section__list--devices');
const devicesContainer = document.querySelector('.section__content--devices');


const [toggleBrands, toggleDevices] = showAndHideToggles;

let isMobile =  document.documentElement.clientWidth < 768;

showAndHideToggles.forEach((elem, i) => {
  elem.addEventListener('click', function() {
    this.innerText = (this.innerText === 'Показать всё') ? 'Скрыть' : 'Показать всё';
    this.classList.toggle('toggle-btn--reversed');
    sectionContents[i].classList.toggle('section__content--all');
  });
});

let brandsSwiper = new Swiper (brandsContainer, {
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

let devicesSwiper = new Swiper (devicesContainer, {
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
  brandsSwiper.init();
  brandsContainer.style.height = "100px";
  toggleBrands.style.display = "none";
  brandsList.style.flexWrap = "nowrap";

  devicesSwiper.init();
  devicesContainer.style.height = "188px";
  toggleDevices.style.display = "none";
  devicesList.style.flexWrap = "nowrap";
}
