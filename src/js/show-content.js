'use strict';

const showAndHideToggles = document.querySelectorAll('.section__show-all');
const sectionContents = document.querySelectorAll('.section__content');
const [toggleBrands, toggleDevices] = showAndHideToggles;

showAndHideToggles.forEach((elem, i) => {
  elem.addEventListener('click', function() {
    this.innerText = (this.innerText === 'Показать всё') ? 'Скрыть' : 'Показать всё';
    this.classList.toggle('toggle-btn--reversed');
    console.log(sectionContents[0]);
    console.log(sectionContents[1]);
    sectionContents[i].classList.toggle('section__content--all');
  });
});
