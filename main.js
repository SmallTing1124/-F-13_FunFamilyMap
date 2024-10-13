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


//電腦版 喜愛景點、想去景點、打卡按鈕
let isFavoriteClicked = false;
let isWantToGoClicked = false;
let isCheckClicked = false;
const pcBtnCheck1 = document.getElementById("pc-btn-check");
const pcBtnCheck2 = document.getElementById("pc-btn-check-2");
const pcBtnCheck3 = document.getElementById("pc-btn-check-3");
if (isFavoriteClicked === false) {
  pcBtnCheck1.addEventListener("click", function (message, type) {
    console.log("pcbtn1click");
    isFavoriteClicked = !isFavoriteClicked;

    // console.log(isFavoriteClicked);
  });
} else if (isFavoriteClicked === true) {
  pcBtnCheck1.addEventListener("click", function () {
    console.log("pcbtn1NoClick");
    isFavoriteClicked = !isFavoriteClicked;
  });
}
pcBtnCheck2.addEventListener("click", function () {
  console.log("pcbtn2click");
  console.log(isFavoriteClicked);
});
pcBtnCheck3.addEventListener("click", function () {
  console.log("pcbtn3click");
});
//手機版 喜愛景點、想去景點、打卡按鈕
const mbBtnCheck1 = document.getElementById("mb-btn-check");
const mbBtnCheck2 = document.getElementById("mb-btn-check-2");
const mbBtnCheck3 = document.getElementById("mb-btn-check-3");
mbBtnCheck1.addEventListener("click", function () {
  console.log("mbbtn1click");
});
mbBtnCheck2.addEventListener("click", function () {
  console.log("mbbtn2click");
});
mbBtnCheck3.addEventListener("click", function () {
  console.log("mbbtn3click");
});

import "bootstrap";
import "./assets/scss/all.scss";

console.log("Hello world!");
