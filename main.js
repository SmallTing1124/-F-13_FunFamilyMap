import Swiper from 'swiper';
import { Grid, Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/bundle';

// Init Swiper for swiper-col-3
const swiperCol3 = new Swiper('.swiper-col-3', {
  modules: [Navigation],  // 設置使用的模塊
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

const swiperGrid = new Swiper(".swiper-grid", {
  modules: [Navigation, Pagination, Grid],  // 設置使用的模塊
  slidesPerView: 1.2,  // Mobile default
  spaceBetween: 24,
  loop:true,
  centeredSlides:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-grid-pagination",
  },
  navigation: {
    nextEl: ".swiper-grid-button-next",
    prevEl: ".swiper-grid-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,  // 使用 'rows' 而不是 'row'
        fill: 'row',
      },
    }
  }
});



import './assets/scss/all.scss';
import 'bootstrap'

console.log("Hello world!");