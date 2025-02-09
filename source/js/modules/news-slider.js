import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Grid } from 'swiper/modules';

const newsSwiper = new Swiper('.news__slider', {
  modules: [Navigation, Grid ],
  direction: 'horizontal',
  slidesPerView: 1,
  // slidesPerColumn: 2,
  // autoHeight: false,
  spaceBetween: 20,
  navigation: {
    nextEl: '.news__navigation-button--next',
    prevEl: '.news__navigation-button--prev',
  },
  grid: {
    rows: 2,
    // fill: 'row'
  },
});

newsSwiper.slideReset();
