'use strict';

const brandsContainer = document.querySelector('.section__content--brands');
const devicesContainer = document.querySelector('.section__content--devices');
const servicesContainer = document.querySelector('.section__content--services');
let brandsSwiper;
let devicesSwiper;
let servicesSwiper;
let isSwiper = false;

const initSwiper = () => {
  if (document.documentElement.clientWidth < 768) {
    if (isSwiper) {
      return false
    }

    brandsSwiper = new Swiper(brandsContainer, {
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

    devicesSwiper = new Swiper(devicesContainer, {
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

    servicesSwiper = new Swiper(servicesContainer, {
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
    isSwiper = true;
  } else {
    if (!isSwiper) {
      return false;
    }
    brandsSwiper.destroy(true, true);
    devicesSwiper.destroy(true, true);
    servicesSwiper.destroy(true, true);
    isSwiper = false;
  }
}

window.onload = initSwiper;
window.onresize = initSwiper;
