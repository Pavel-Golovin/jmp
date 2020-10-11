'use strict';

const feedback = {
  elementCaption: `main__feedback`,
  get element() {
    return document.querySelector(`.${this.elementCaption}`);
  },
  get openButtons() {
    return document.querySelectorAll(`.contacts-list__chat`);
  },
  get closeButton() {
    return document.querySelector(`.modal__close-btn--feedback`);
  }
};

const call = {
  elementCaption: `main__call`,
  get element() {
    return document.querySelector(`.${this.elementCaption}`);
  },
  get openButtons() {
    return document.querySelectorAll(`.contacts-list__call`);
  },
  get closeButton() {
    return document.querySelector(`.modal__close-btn--call`);
  }
};

const overlayModal = document.querySelector(`.overlay--modal`);

const openModal = (modal) => {
  modal.element.classList.add(`${modal.elementCaption}--open`);
  overlayModal.classList.add(`overlay--active`);
  modal.closeButton.classList.remove(`modal__close-btn--hidden`)
}

const closeModal = (modal) => {
  return () => {
    modal.element.classList.remove(`${modal.elementCaption}--open`);
    overlayModal.classList.remove(`overlay--active`);
    modal.closeButton.classList.add('modal__close-btn--hidden');
    document.removeEventListener(`keydown`, closeFeedbackByEsc);
    document.removeEventListener(`keydown`, closeCallByEsc);
  };
};

const closeFeedbackHandler = closeModal(feedback);
const closeCallHandler = closeModal(call);

const closeFeedbackByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closeFeedbackHandler();
  }
};

const closeCallByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closeCallHandler();
  }
};

feedback.openButtons.forEach((elem) => {
  elem.addEventListener('click', () => {
    openModal(feedback);
    overlayModal.addEventListener('click', closeFeedbackHandler);
    feedback.closeButton.addEventListener('click', closeFeedbackHandler);
    document.addEventListener('keydown', closeFeedbackByEsc);
  });
});

call.openButtons.forEach((elem) => {
  elem.addEventListener('click', () => {
    openModal(call);
    overlayModal.addEventListener('click', closeCallHandler);
    call.closeButton.addEventListener('click', closeCallHandler);
    document.addEventListener('keydown', closeCallByEsc);
  });
});
