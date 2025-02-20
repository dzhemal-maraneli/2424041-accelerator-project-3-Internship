const burgerButton = document.querySelector('.header__burger-button');
const body = document.querySelector('.page-body');
const headerNav = document.querySelector('.header__nav');
const logo = document.querySelector('.header__logo');

const onEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeMenu();
  }
};

const onOutsideClick = (evt) => {
  if (!headerNav.contains(evt.target) && !burgerButton.contains(evt.target)) {
    closeMenu();
  }
};

burgerButton.addEventListener('click', () => {
  if (burgerButton.classList.contains('header__burger-button--active')) {
    closeMenu();
  } else {
    openMenu();
  }
});

function scrollHandler() {
  if (body.style.overflow === 'hidden') {
    body.style.overflow = '';
  } else {
    body.style.overflow = 'hidden';
  }
}

headerNav.addEventListener('click', (evt) => {
  const linkItem = evt.target.closest('.header__nav-link');
  const dropdownItem = evt.target.closest('.header__nav-item--dropdown');

  if (dropdownItem && dropdownItem.contains(linkItem)) {
    evt.preventDefault();

    dropdownItem.classList.toggle('header__nav-item--dropdown-active');
    setHeight(dropdownItem);
  } else if (linkItem) {
    closeMenu();
    scrollHandler();
  }
});

function setHeight(item) {
  const itemContent = item.querySelector('ul');

  if (item.classList.contains('header__nav-item--dropdown-active')) {
    itemContent.style.maxHeight = `${itemContent.scrollHeight}px`;
  } else {
    itemContent.style.maxHeight = 0;
  }
}

function openMenu() {
  headerNav.classList.add('header__nav--active');
  burgerButton.classList.add('header__burger-button--active');
  body.classList.add('page-body--overlay');

  if (window.innerWidth >= 320 && window.innerWidth < 768) {
    logo.classList.add('header__logo--hide');
  }

  document.addEventListener('keydown', onEscapeKeydown);
  document.addEventListener('click', onOutsideClick);

  scrollHandler();
}

function closeMenu() {
  headerNav.classList.remove('header__nav--active');
  burgerButton.classList.remove('header__burger-button--active');
  body.classList.remove('page-body--overlay');
  document.querySelectorAll('.header__nav-item--dropdown-active').forEach((item) => {
    item.classList.remove('header__nav-item--dropdown-active');
    setHeight(item);
  });

  if (window.innerWidth >= 320 && window.innerWidth < 768) {
    logo.classList.remove('header__logo--hide');
  }

  document.removeEventListener('keydown', onEscapeKeydown);
  document.removeEventListener('click', onOutsideClick);

  scrollHandler();
}

