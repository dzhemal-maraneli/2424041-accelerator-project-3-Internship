import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

new Swiper('.reviews__slider', {
  modules: [Navigation, Scrollbar, A11y],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: '.reviews__navigation-button--next',
    prevEl: '.reviews__navigation-button--prev',
  },
  scrollbar: {
    el: '.reviews__scrollbar',
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
      slidesPerView: 'auto',
      spaceBetween: 30,
      scrollbar: {
        dragSize: 326,
      },
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
      scrollbar: {
        dragSize: 394,
      },
    },
  }
});
