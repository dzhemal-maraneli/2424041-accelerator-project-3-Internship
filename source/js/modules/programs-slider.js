import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

new Swiper('.programs__slider', {
  modules: [Navigation, Scrollbar, A11y],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: '.programs__navigation-button--next',
    prevEl: '.programs__navigation-button--prev',
  },
  scrollbar: {
    el: '.programs__scrollbar',
    dragClass: 'main-scrollbar__drag',
    draggable: true,
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
      scrollbar: {
        dragSize: 326,
      },
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      scrollbar: {
        dragSize: 394,
      },
    },
  }
});
