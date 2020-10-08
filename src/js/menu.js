'use strict';

const  openMenuButton = document.querySelector('.header__burger-btn');
const  menuAside = document.querySelector('.main__menu');

openMenuButton.addEventListener('click', () => {
  menuAside.classList.add('menu--open');


});
