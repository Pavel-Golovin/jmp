'use strict';

const openMenuButton = document.querySelector('.header__burger-btn');
const menuAside = document.querySelector('.main__menu');
const overlay = document.querySelector('.overlay');
const closeMenuButton = document.querySelector('.menu__close-btn');

const openMenu = () => {
  menuAside.classList.add('main__menu--open');
  overlay.classList.add('overlay--active');
};

const closeMenu = () => {
  menuAside.classList.remove('main__menu--open');
  overlay.classList.remove('overlay--active');
  document.removeEventListener('keydown', closeMenuByEsc);
};

const closeMenuByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closeMenu();
  }
};

openMenuButton.addEventListener('click', () => {
  openMenu();
  overlay.addEventListener('click', closeMenu);
  closeMenuButton.addEventListener('click', closeMenu);
  document.addEventListener('keydown', closeMenuByEsc);
});
