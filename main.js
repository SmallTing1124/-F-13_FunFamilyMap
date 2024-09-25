// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper-col-3', {
  slidesPerView: 1,
  breakpoints: {
    991: {
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-col-3-button-next",
        prevEl: ".swiper-col-3-button-prev",
      },
    }
  },
  
});

import 'bootstrap'
import './assets/scss/all.scss';

console.log("Hello world!");