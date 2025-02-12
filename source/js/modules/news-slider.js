import Swiper from 'swiper';
import 'swiper/css/grid';
import { Navigation, Grid, Mousewheel, FreeMode } from 'swiper/modules';

const newsSwiper = new Swiper('.news__slider', {
  modules: [Navigation, Grid],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: false,
  navigation: {
    nextEl: '.news__navigation-button--next',
    prevEl: '.news__navigation-button--prev',
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
            // slide.style.minHeight = '330px';
          } else {
            // slide.style.height = '40%';
            slide.style.height = '240px';
          }
        });
      } else {
        return null;
      }
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
    }
  }
});

const categoriesSwiper = new Swiper('.news__categories', {
  modules: [Mousewheel, FreeMode],
  direction: 'horizontal',
  slidesPerView: 'auto',
  watchOverflow: true,
  mousewheel: true,
  freeMode: true,
  spaceBetween: 12,
  breakpoints: {
    768: {
      spaceBetween: 10,
    }
  }

});

newsSwiper.slideReset();
categoriesSwiper.slideReset();
