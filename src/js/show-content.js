'use strict';

const showAndHideToggles = document.querySelectorAll('.toggle-btn');
const articleContainer = document.querySelector('.article__text');
const brandsContainer  = document.querySelector('.section__content--brands');
const devicesContainer  = document.querySelector('.section__content--devices');
const containers = [articleContainer, brandsContainer, devicesContainer];

showAndHideToggles.forEach((elem, i) => {
  elem.addEventListener('click', function(evt) {
    let elementTarget = evt.target;
    let buttonText = (elementTarget.classList.contains('article__read-more')) ? `Читать далее` : `Показать всё`;
    this.innerText = (this.innerText === buttonText) ? 'Скрыть' : buttonText;
    this.classList.toggle('toggle-btn--reversed');
    containers[i].classList.toggle('show-all');
  });
});
