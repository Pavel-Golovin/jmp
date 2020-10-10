'use strict';

const feedback = document.querySelector('.main__feedback');
const feedbackButtons = document.querySelectorAll('.contacts-list__chat');
const closeFeedbackButton = document.querySelector('.modal__close-btn--feedback');
const overlayModal = document.querySelector('.overlay--modal');

const openFeedbackPopup = () => {
  feedback.classList.add('main__feedback--open');
  overlayModal.classList.add('overlay--active');
  closeFeedbackButton.classList.remove('modal__close-btn--hidden');
}

const closeFeedbackPopup = () => {
  feedback.classList.remove('main__feedback--open');
  overlayModal.classList.remove('overlay--active');
  closeFeedbackButton.classList.add('modal__close-btn--hidden');
  document.removeEventListener('keydown', closeFeedbackByEsc);
}

const closeFeedbackByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closeFeedbackPopup();
  }
};

feedbackButtons.forEach((elem) => {
  elem.addEventListener('click', () => {
    openFeedbackPopup();
    overlayModal.addEventListener('click', closeFeedbackPopup);
    closeFeedbackButton.addEventListener('click', closeFeedbackPopup);
    document.addEventListener('keydown', closeFeedbackByEsc);
  });
});

const call = document.querySelector('.main__call');
const callButtons = document.querySelectorAll('.contacts-list__call');
const closeCallButton = document.querySelector('.modal__close-btn--call');

const openCallPopup = () => {
  call.classList.add('main__call--open');
  overlayModal.classList.add('overlay--active');
  closeCallButton.classList.remove('modal__close-btn--hidden');
}

const closeCallPopup = () => {
  call.classList.remove('main__call--open');
  overlayModal.classList.remove('overlay--active');
  closeCallButton.classList.add('modal__close-btn--hidden');
  document.removeEventListener('keydown', closeCallByEsc);
}

const closeCallByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closeCallPopup();
  }
};

callButtons.forEach((element) => {
  element.addEventListener('click', () => {
    openCallPopup();
    overlayModal.addEventListener('click', closeCallPopup);
    closeCallButton.addEventListener('click', closeCallPopup);
    document.addEventListener('keydown', closeCallByEsc);
  });
});
