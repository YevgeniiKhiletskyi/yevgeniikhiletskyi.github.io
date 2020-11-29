const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector(".slider-list");
const computedStyles = window.getComputedStyle(itemsList);
const slideWidth = document.querySelector(".slider-item").clientWidth;
const slidesCount = document.querySelectorAll(".slider-item").length;

const position = 0;
const sliderWidth = slideWidth * slidesCount;
let currentSlider = "";


itemsList.style.right = currentSlider;


right.addEventListener("click", e => {
  e.preventDefault();

  currentSlider += slideWidth;
  if (currentSlider < sliderWidth) {
    itemsList.style.right = `${currentSlider}px`;
  }else {
    currentSlider = "";
    itemsList.style.right = position;
  }
})


left.addEventListener("click", e => {
  e.preventDefault();

  currentSlider += slideWidth;
  if (currentSlider < sliderWidth) {
    itemsList.style.right = `${currentSlider}px`;
  }else {
    currentSlider = "";
    itemsList.style.right = position;
  }
  
})
