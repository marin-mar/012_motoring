/* slider */

const slides = document.querySelectorAll(".slider__slide");
const previous = document.querySelector(".slider__controls--prev");
const next = document.querySelector(".slider__controls--next");
let currentSlide = 0;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = "slider__slide";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "slider__slide--active";
}

next.addEventListener("click", nextSlide);
previous.addEventListener("click", previousSlide);

let slideInterval = setInterval(autoPlaySlide, 10000);

function autoPlaySlide() {
  slides[currentSlide].className = "slider__slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slider__slide--active";
}
