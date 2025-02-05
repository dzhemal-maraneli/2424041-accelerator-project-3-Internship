import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Scrollbar } from 'swiper/modules';

const programsSwiper = new Swiper('.programs__slider', {
  modules: [Navigation, Scrollbar],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: '.programs-navigation__button--next',
    prevEl: '.programs-navigation__button--prev',
  },
  scrollbar: {
    el: '.programs__scrollbar',
    dragClass: 'programs__scrollbar-drag',
    draggable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  }
});
