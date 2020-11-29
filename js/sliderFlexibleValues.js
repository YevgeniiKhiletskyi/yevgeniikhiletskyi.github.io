const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector(".slider-list");
const computedStyles = window.getComputedStyle(itemsList);
const slideWidth = document.querySelector(".slider-item").clientWidth;
const slidesCount = document.querySelectorAll(".slider-item").length;

const minRight = 0;
const sliderWidth = slideWidth * slidesCount;
let currentRight = "";


itemsList.style.right = currentRight;


right.addEventListener("click", e => {
  e.preventDefault();

  currentRight += slideWidth;
  if (currentRight < sliderWidth) {
    itemsList.style.right = `${currentRight}px`;
  }else {
    currentRight = "";
    itemsList.style.right = minRight;
  }
})

left.addEventListener("click", e => {
  e.preventDefault();

  currentRight -= slideWidth;
  if (currentRight > sliderWidth) {
    //currentRight = 0;
    itemsList.style.right = `${currentRight}px`;
    
  }else {
    
    itemsList.style.right = minRight;
  }
  
})
