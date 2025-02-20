import Swiper from 'swiper';
import 'swiper/css/grid';
import { Navigation, Pagination, Grid, Mousewheel, FreeMode, A11y } from 'swiper/modules';

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

  newsSlider = new Swiper('.news__slider', {
    modules: [Navigation, Pagination, Grid, A11y],
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
        if (window.innerWidth >= 320 && window.innerWidth < 768) {
          const slides = this.slides;
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
    },
    a11y: {
      enabled: true,
      nextSlideMessage: 'Листать далее',
      prevSlideMessage: 'Листать назад',
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
        slidesPerView: 3,
        spaceBetween: 32,
        grid: {
          rows: 1,
        },
      }
    }
  });
}

function debounceResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initSwiper();
  }, 300);
}

initSwiper();

window.addEventListener('resize', () => {
  debounceResize();
});
