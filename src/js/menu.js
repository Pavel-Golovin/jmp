'use strict';

const openMenuButton = document.querySelector('.header__burger-btn');
const menuAside = document.querySelector('.main__menu');
const overlayMenu = document.querySelector('.overlay-menu');
const closeMenuButton = document.querySelector('.menu__close-btn');
const body = document.querySelector('.body');

const openMenu = () => {
  menuAside.classList.add('main__menu--open');
  overlayMenu.classList.add('overlay-menu--active');
  body.classList.add('body--overflow-hidden');
};

const closeMenu = () => {
  menuAside.classList.remove('main__menu--open');
  overlayMenu.classList.remove('overlay-menu--active');
  body.classList.remove('body--overflow-hidden');
  document.removeEventListener('keydown', closeMenuByEsc);
};

const closeMenuByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closeMenu();
  }
};

openMenuButton.addEventListener('click', () => {
  openMenu();
  overlayMenu.addEventListener('click', closeMenu);
  closeMenuButton.addEventListener('click', closeMenu);
  document.addEventListener('keydown', closeMenuByEsc);
});
