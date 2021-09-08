/* intro slider */

const slides = document.querySelectorAll(".intro__slide");
const previousControl = document.querySelector(".intro__controls--prev");
const nextControl = document.querySelector(".intro__controls--next");
const introSlider = document.querySelector(".intro__slider");
let currentSlide = 0;
let slideInterval = setInterval(autoPlaySlide, 10000);
let playing = true;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = "intro__slide";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "intro__slide--active";
}

function autoPlaySlide() {
  slides[currentSlide].className = "intro__slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "intro__slide--active";
}

function pauseSlideshow() {
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  playing = true;
  slideInterval = setInterval(nextSlide, 10000);
}

if (playing) {
  pauseSlideshow();
} else {
  playSlideshow();
}

nextControl.addEventListener("click", nextSlide);
previousControl.addEventListener("click", previousSlide);
introSlider.addEventListener("mouseover", pauseSlideshow);
introSlider.addEventListener("mouseout", playSlideshow);
