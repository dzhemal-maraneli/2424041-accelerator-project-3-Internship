import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Scrollbar } from 'swiper/modules';

const reviewsSwiper = new Swiper('.reviews__slider', {
  modules: [Navigation, Scrollbar],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: '.reviews__navigation-button--next',
    prevEl: '.reviews__navigation-button--prev',
  },
  scrollbar: {
    el: '.reviews__scrollbar',
    dragClass: 'scrollbar__drag',
    draggable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  }
});

reviewsSwiper.slideReset();
