'use strict';

const feedback = document.querySelector('.main__feedback');
const feedbackButtons = document.querySelectorAll('.contacts-list__chat');
const closeFeedbackButton = document.querySelector('.modal__close-btn--feedback');
const overlay = document.querySelector('.overlay');


const openFeedbackPopup = () => {
  feedback.classList.add('main__feedback--open');
  overlay.classList.add('overlay--active-modal');
  closeFeedbackButton.classList.remove('modal__close-btn--hidden');
}

const closeFeedbackPopup = () => {
  feedback.classList.remove('main__feedback--open');
  overlay.classList.remove('overlay--active-modal');
  closeFeedbackButton.classList.add('modal__close-btn--hidden');
}

const closeFeedbackByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closeFeedbackPopup();
  }
};

feedbackButtons.forEach((elem) => {
  elem.addEventListener('click', () => {
    openFeedbackPopup();
    overlay.addEventListener('click', closeFeedbackPopup);
    closeFeedbackButton.addEventListener('click', closeFeedbackPopup);
    document.addEventListener('keydown', closeFeedbackByEsc);
  });
})
















