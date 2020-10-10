'use strict';

const feedback = document.querySelector('.main__feedback');
const feedbackButton = document.querySelector('.contacts-list__chat');
const closeFeedbackButton = document.querySelector('.modal__close-feedback');

const openFeedbackPopup = () => {
  feedback.classList.add('main__feedback--open');
  closeFeedbackButton.classList.add('modal__close-feedback--toggle');
}

const closeFeedbackPopup = () => {
  feedback.classList.remove('main__feedback--open');
  closeFeedbackButton.classList.remove('modal__close-feedback--toggle');
}

feedbackButton.addEventListener('click', () => {
  openFeedbackPopup();
  closeFeedbackButton.addEventListener('click', closeFeedbackPopup);
});
