import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Scrollbar } from 'swiper/modules';

const heroSwiper = new Swiper('.hero__slider', {
  // modules: [Navigation, Scrollbar],
  direction: 'horizontal',
  slidesPerView: 1,
  // spaceBetween: 15,
});

heroSwiper.slideReset();
