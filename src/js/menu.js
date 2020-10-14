'use strict';

const openMenuButton = document.querySelector('.header__burger-btn');
const menuAside = document.querySelector('.main__menu');
const overlayMenu = document.querySelector('.overlay--menu');
const closeMenuButton = document.querySelector('.menu__close-btn');
const body = document.querySelector('.body');
const feedbackModal = document.querySelector('.main__modal--feedback');
const callModal = document.querySelector('.main__modal--call');

const openMenu = () => {
  menuAside.classList.add('main__menu--open');
  overlayMenu.classList.add('overlay--active');
  body.classList.add('body--overflow-hidden');

  overlayMenu.addEventListener('click', overlayMenuClickHandler);
  closeMenuButton.addEventListener('click', closeMenuButtonClickHandler);
  document.addEventListener('keydown', escapeKeyDownHandler);
  openMenuButton.removeEventListener('click', openMenuButtonClickHandler);
};

const closeMenu = () => {
  menuAside.classList.remove('main__menu--open');
  overlayMenu.classList.remove('overlay--active');
  body.classList.remove('body--overflow-hidden');

  overlayMenu.removeEventListener('click', overlayMenuClickHandler);
  closeMenuButton.removeEventListener('click', closeMenuButtonClickHandler);
  document.removeEventListener('keydown', escapeKeyDownHandler);
  openMenuButton.addEventListener('click', openMenuButtonClickHandler);
};

const escapeKeyDownHandler = (evt) => {
  if ((evt.key === 'Escape') && !(feedbackModal.classList.contains('main__modal--open') || callModal.classList.contains('main__modal--open'))) {
    closeMenu();
  }
};

const overlayMenuClickHandler = () => {
  closeMenu();
}

const closeMenuButtonClickHandler = () => {
  closeMenu();
}

const openMenuButtonClickHandler = () => {
  openMenu();
}

openMenuButton.addEventListener('click', openMenuButtonClickHandler);
