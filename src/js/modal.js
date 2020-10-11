'use strict';

const overlayModal = document.querySelector(`.overlay--modal`);

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

const openModal = (modal) => {
  modal.element.classList.add(`${modal.elementCaption}--open`);
  overlayModal.classList.add(`overlay--active`);
  modal.closeButton.classList.remove(`modal__close-btn--hidden`);
  document.addEventListener('keydown', closeModalByEscHandler);
}

const closeModal = (modal) => {
  return () => {
    modal.element.classList.remove(`${modal.elementCaption}--open`);
    overlayModal.classList.remove(`overlay--active`);
    modal.closeButton.classList.add('modal__close-btn--hidden');
    document.removeEventListener(`keydown`, closeModalByEscHandler);
  };
};

const closeModalByEscHandler = (evt) => {
  const [feedbackModal, callModal] = document.querySelectorAll('.modal');
  if (evt.key === 'Escape' && feedbackModal.classList.contains(`main__feedback--open`)) {
    closeModal(feedback)();
  }
  if (evt.key === 'Escape' && callModal.classList.contains(`main__call--open`)) {
    closeModal(call)();
  }
};

const setModalHandlers = (modal) => {
  const closeModalHandler = closeModal(modal);
  modal.openButtons.forEach((elem) => {
    elem.addEventListener(`click`, () => {
      openModal(modal);
      overlayModal.addEventListener(`click`, closeModalHandler);
      modal.closeButton.addEventListener(`click`, closeModalHandler);
    });
  });
};

setModalHandlers(feedback);
setModalHandlers(call);
