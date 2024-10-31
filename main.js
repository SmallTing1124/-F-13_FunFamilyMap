import Swiper from "swiper";
import { Grid, Navigation, Pagination } from "swiper/modules";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/bundle";

// Init Swiper for swiper-col-3
const swiperCol3 = new Swiper(".swiper-col-3", {
  modules: [Navigation], // 設置使用的模塊
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

const swiperGrid = new Swiper(".swiper-grid", {
  modules: [Navigation, Pagination, Grid], // 設置使用的模塊
  slidesPerView: 1.2, // Mobile default
  spaceBetween: 24,
  loop: true,
  centeredSlides: true,
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
        rows: 2, // 使用 'rows' 而不是 'row'
        fill: "row",
      },
    },
  },
});
const touristSwiper = new Swiper(".tourist-img-swiper", {
  modules: [Navigation, Pagination],
  pagination: {
    el: ".tourist-img-swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-col-3-button-next",
    prevEl: ".swiper-col-3-button-prev",
  },
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
    console.log(isFavoriteClicked);
    // console.log(isFavoriteClicked);
  });
} else if (isFavoriteClicked === true) {
  pcBtnCheck1.addEventListener("click", function () {
    console.log("pcbtn1NoClick");
    isFavoriteClicked = !isFavoriteClicked;
  });
}
if (isWantToGoClicked === false) {
  pcBtnCheck2.addEventListener("click", function (message, type) {
    console.log("pcbtn2click");
    isWantToGoClicked = !isWantToGoClicked;
    console.log(isWantToGoClicked);
    // console.log(isWantToGoClicked);
  });
} else if (isWantToGoClicked === true) {
  pcBtnCheck2.addEventListener("click", function () {
    console.log("pcbtn2NoClick");
    isWantToGoClicked = !isWantToGoClicked;
  });
}
if (isCheckClicked === false) {
  pcBtnCheck3.addEventListener("click", function (message, type) {
    console.log("pcbtn3click");
    isCheckClicked = !isCheckClicked;
    console.log(isCheckClicked);
    // console.log(isCheckClicked);
  });
} else if (isCheckClicked === true) {
  pcBtnCheck3.addEventListener("click", function () {
    console.log("pcbtn3NoClick");
    isCheckClicked = !isCheckClicked;
  });
}
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
