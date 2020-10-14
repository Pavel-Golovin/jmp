'use strict';

const overlayModal = document.querySelector(`.overlay--modal`);
const body = document.querySelector('.body');

const feedback = {
  elementCaption: `main__modal--feedback`,
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
  elementCaption: `main__modal--call`,
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

const setFeedbackOpenHandlers = () => {
  feedback.openButtons.forEach((openFeedbackBtn) => {
    openFeedbackBtn.addEventListener(`click`, openFeedbackBtnClickHandler);
  });
};

const setCallOpenHandlers = () => {
  call.openButtons.forEach((openCallBtn) => {
    openCallBtn.addEventListener(`click`, openCallBtnClickHandler);
  });
};

const resetFeedbackOpenHandlers = () => {
  feedback.openButtons.forEach((openFeedbackBtn) => {
    openFeedbackBtn.removeEventListener(`click`, openFeedbackBtnClickHandler);
  });
};

const resetCallOpenHandlers = () => {
  call.openButtons.forEach((openCallBtn) => {
    openCallBtn.removeEventListener(`click`, openCallBtnClickHandler);
  });
};

const openModal = (modal) => {
  modal.element.classList.add(`main__modal--open`);
  overlayModal.classList.add(`overlay--active`);
  body.classList.add('body--overflow-hidden');
  modal.closeButton.classList.remove(`modal__close-btn--hidden`);

  overlayModal.addEventListener(`click`, overlayModalClickHandler);
  modal.closeButton.addEventListener(`click`, modalCloseButtonClickHandler);
  document.addEventListener('keydown', closeModalByEscHandler);
  console.log(modal.elementCaption);
  if (modal.elementCaption === feedback.elementCaption) {
    resetFeedbackOpenHandlers();
  }
  if (modal.elementCaption === call.elementCaption) {
    resetCallOpenHandlers();
  }
}

const closeModal = (modal) => {
  modal.element.classList.remove(`main__modal--open`);
  overlayModal.classList.remove(`overlay--active`);
  body.classList.remove('body--overflow-hidden');
  modal.closeButton.classList.add('modal__close-btn--hidden');

  overlayModal.removeEventListener(`click`, overlayModalClickHandler);
  modal.closeButton.removeEventListener(`click`, modalCloseButtonClickHandler);
  document.removeEventListener(`keydown`, closeModalByEscHandler);
  if (modal.elementCaption === feedback.elementCaption) {
    setFeedbackOpenHandlers();
  }
  if (modal.elementCaption === call.elementCaption) {
    setCallOpenHandlers();
  }
};

const isFeedbackOpen = () => {
  const feedbackModal = feedback.element;
  return feedbackModal.classList.contains(`main__modal--open`);
};

const isCallOpen = () => {
  const callModal = call.element;
  return callModal.classList.contains(`main__modal--open`);
}

const closeModalByEscHandler = (evt) => {
  if (evt.key === 'Escape' && isFeedbackOpen()) {
    closeModal(feedback);
  }
  if (evt.key === 'Escape' && isCallOpen()) {
    closeModal(call);
  }
};

const overlayModalClickHandler = () => {
  if (isFeedbackOpen()) {
    closeModal(feedback);
  }
  if (isCallOpen()) {
    closeModal(call);
  }
};

const modalCloseButtonClickHandler = () => {
  if (isFeedbackOpen()) {
    closeModal(feedback);
  }
  if (isCallOpen()) {
    closeModal(call);
  }
}

const openFeedbackBtnClickHandler = () => {
  openModal(feedback);
};

const openCallBtnClickHandler = () => {
  openModal(call);
}

setFeedbackOpenHandlers();
setCallOpenHandlers();
