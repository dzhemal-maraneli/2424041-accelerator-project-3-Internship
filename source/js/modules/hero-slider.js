import Swiper from 'swiper';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

const heroSlider = document.querySelector('.hero__slider');
const swiperPagination = document.querySelector('.hero__pagination');
let resizeTimeout;

new Swiper('.hero__slider', {
  modules: [Pagination,],
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    bulletElement: 'button',
    bulletClass: 'hero__pagination-bullet',
    bulletActiveClass: 'hero__pagination-bullet--active',
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="${className} custom-bullet" data-index="${index}">
      <span class="visually-hidden">Перейти к слайду ${index}</span>
              </button>`;
    },
  },
  on: {
    slideChangeTransitionStart: paginationAnimationStart,
    slideChangeTransitionEnd: () => {
      paginationAnimationEnd();
      updateTabIndex();
    },
    touchStart: () => {
      if (window.innerWidth < 1440) {
        paginationAnimationStart();
      }
    },
    touchEnd: () => {
      if (window.innerWidth < 1440) {
        paginationAnimationEnd();
      }
    },
  },
  // a11y: {
  //   enabled: true,
  //   paginationBulletMessage: 'Перейти к слайду {{index}}',
  // },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  }
});

function paginationAnimationStart() {
  const activeSlideContent = document.querySelector('.swiper-slide-active').querySelector('.hero__slider-slide-content');

  const height = activeSlideContent.offsetHeight;
  const paddingTop = parseFloat(getComputedStyle(activeSlideContent).paddingTop);
  const finalHeight = height - paddingTop;

  swiperPagination.classList.add('hero__pagination--hide');
  swiperPagination.style.bottom = `${finalHeight - 28}px`;
}

function paginationAnimationEnd() {
  const activeSlideContent = document.querySelector('.swiper-slide-active').querySelector('.hero__slider-slide-content');

  const height = activeSlideContent.offsetHeight;
  const paddingTop = parseFloat(getComputedStyle(activeSlideContent).paddingTop);
  const finalHeight = height - paddingTop;

  swiperPagination.classList.remove('hero__pagination--hide');
  swiperPagination.style.bottom = `${finalHeight}px`;
}

function updateTabIndex() {
  heroSlider.querySelectorAll('.hero__slider-slide-link').forEach((link) => {
    link.setAttribute('tabindex', '-1');
  });

  const activeSlide = heroSlider.querySelector('.swiper-slide-active');
  const slideLink = activeSlide.querySelector('.hero__slider-slide-link');
  if (slideLink) {
    slideLink.setAttribute('tabindex', '0');
  }
}

updateTabIndex();
paginationAnimationEnd();

function debounceResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    paginationAnimationEnd();
  }, 300);
}

window.addEventListener('resize', () => {
  debounceResize();
});
