const burgerButton = document.querySelector('.header__burger-button');
const body = document.querySelector('.page-body');
const logo = document.querySelector('.header__logo');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('header__burger-button--active');
  body.classList.toggle('page-body--overlay');
  scrollHandler();

  if (window.innerWidth >= 320 && window.innerWidth < 768) {
    logo.classList.toggle('header__logo--hide');
  }
});

function scrollHandler() {
  if (body.style.overflow === 'hidden') {
    body.style.overflow = '';
  } else {
    body.style.overflow = 'hidden';
  }
}

// menu.addEventListener('click', (evt) => {
//   if (evt.target.closest('.nav__link')) {
//     menu.classList.remove('nav--active');
//     burgerButton.classList.remove('burger-button--active');
//     body.classList.remove('page-body--overlay');
//     scrollHandler();
//   }
// });
