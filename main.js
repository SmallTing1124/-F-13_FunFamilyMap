// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper-col-3", {
  slidesPerView: 1,
  breakpoints: {
    991: {
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-col-3-button-next",
        prevEl: ".swiper-col-3-button-prev",
      },
    },
  },
});
// 景點詳情頁Swiper
const tourstInfoSwiper = new Swiper(".tourist-img-swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-col-3-button-next",
    prevEl: ".swiper-col-3-button-prev",
  },
  autoplay: true,
  longSwipes: 2000,
  // breakpoints: {
  //   991: {
  //     slidesPerView: 1,

  //   },
  // },
});
//電腦版 喜愛景點、想去景點、打卡按鈕
const pcBtnCheck1 = document.getElementById("pc-btn-check");
const pcBtnCheck2 = document.getElementById("pc-btn-check-2");
const pcBtnCheck3 = document.getElementById("pc-btn-check-3");
pcBtnCheck1.addEventListener("click", function () {
  console.log("pcbtn1click");
});
pcBtnCheck2.addEventListener("click", function () {
  console.log("pcbtn2click");
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
