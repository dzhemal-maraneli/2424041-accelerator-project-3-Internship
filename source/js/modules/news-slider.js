import Swiper from 'swiper';
import 'swiper/css/grid';
import { Navigation, Pagination, Grid, Mousewheel, FreeMode } from 'swiper/modules';

let newsSlider;
let resizeTimeout;

new Swiper('.news__categories', {
  modules: [Mousewheel, FreeMode],
  direction: 'horizontal',
  slidesPerView: 'auto',
  watchOverflow: true,
  mousewheel: true,
  freeMode: true,
  spaceBetween: 14,
  breakpoints: {
    768: {
      spaceBetween: 10,
    }
  }
});

function initSwiper() {
  if (newsSlider) {
    newsSlider.destroy(true, true);
  }

  if (window.innerWidth >= 1440) {
    addEmptySlides();
  } else {
    removeEmptySlides();
  }

  newsSlider = new Swiper('.news__slider', {
    modules: [Navigation, Pagination, Grid],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: false,
    navigation: {
      nextEl: '.news__navigation-button--next',
      prevEl: '.news__navigation-button--prev',
    },
    pagination: {
      el: '.news__pagination',
      bulletClass: 'news__pagination-bullet',
      bulletActiveClass: 'news__pagination-bullet--active',
      renderBullet: function (index, className) {
        return `<button class="${className}">${index + 1}</button>`;
      },
      clickable: true,
    },
    grid: {
      rows: 2,
    },
    on: {
      init: function () {
        resizeMobileSlides();
      }
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      1440: {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        spaceBetween: 32,
        grid: {
          rows: 1,
        },
      }
    }
  });

  newsSlider.update();

  resizeMobileSlides();
}

function debounceResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initSwiper();
  }, 300);
}

function addEmptySlides() {
  const sliderWrapper = document.querySelector('.news__slider .swiper-wrapper');
  if (!sliderWrapper) {
    return;
  }

  const slides = document.querySelectorAll('.news__slider .swiper-slide');
  const totalSlides = slides.length;
  const requiredSlides = Math.ceil(totalSlides / 3) * 3;

  if (totalSlides % 3 !== 0) {
    const emptySlidesNeeded = requiredSlides - totalSlides;

    for (let i = 0; i < emptySlidesNeeded; i++) {
      const emptySlide = document.createElement('li');
      emptySlide.classList.add('swiper-slide', 'swiper-slide--empty');
      sliderWrapper.appendChild(emptySlide);
    }
  }
}

function removeEmptySlides() {
  const emptySlides = document.querySelectorAll('.swiper-slide--empty');

  emptySlides.forEach((slide) => {
    slide.remove();
  });
}

function resizeMobileSlides() {
  if (window.innerWidth >= 320 && window.innerWidth < 768) {
    const slides = document.querySelectorAll('.news__slider .swiper-slide');
    slides.forEach((slide, index) => {
      if (index % 2 === 0) {
        slide.style.height = '330px';
      } else {
        slide.style.height = '240px';
      }
    });
  } else {
    return null;
  }
}

initSwiper();

window.addEventListener('resize', () => {
  debounceResize();
});
