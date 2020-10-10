'use strict';

const feedback = document.querySelector('.main__feedback');
const feedbackButtons = document.querySelectorAll('.contacts-list__chat');
const closeFeedbackButton = document.querySelector('.modal__close-btn--feedback');
const overlayFeedback = document.querySelector('.overlay--modal');


const openFeedbackPopup = () => {
  feedback.classList.add('main__feedback--open');
  overlayFeedback.classList.add('overlay--active');
  closeFeedbackButton.classList.remove('modal__close-btn--hidden');
}

const closeFeedbackPopup = () => {
  feedback.classList.remove('main__feedback--open');
  overlayFeedback.classList.remove('overlay--active');
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
    overlayFeedback.addEventListener('click', closeFeedbackPopup);
    closeFeedbackButton.addEventListener('click', closeFeedbackPopup);
    document.addEventListener('keydown', closeFeedbackByEsc);
  });
})
















