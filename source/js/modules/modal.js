const modalButton = document.querySelector('.about__button');
const modalCloseButton = document.querySelector('.modal__close-button');
const modal = document.querySelector('.modal');

modalButton.addEventListener('click', openModal);

const body = document.querySelector('.page-body');

const onEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeModal();
  }
};

const onCloseButtonClick = (evt) => {
  if (evt.target === modalCloseButton) {
    closeModal();
  }
};

const onOutsideClick = (evt) => {
  if (!modal.contains(evt.target) && !modalButton.contains(evt.target)) {
    closeModal();
  }
};

function scrollHandler() {
  if (body.style.overflow === 'hidden') {
    body.style.overflow = '';
  } else {
    body.style.overflow = 'hidden';
  }
}

function openModal() {
  modal.classList.add('modal--active');
  body.classList.add('page-body--overlay');
  scrollHandler();

  document.addEventListener('keydown', onEscapeKeydown);
  document.addEventListener('click', onOutsideClick);
  document.addEventListener('click', onCloseButtonClick);
}

function closeModal() {
  modal.classList.remove('modal--active');
  body.classList.remove('page-body--overlay');
  scrollHandler();
  document.removeEventListener('keydown', onEscapeKeydown);
  document.removeEventListener('click', onOutsideClick);
  document.removeEventListener('click', onCloseButtonClick);
}

