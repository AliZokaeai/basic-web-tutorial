const slides = document.querySelectorAll(".slides img");
let slidesIndex = 0;
var duration = 400;

let intervalId = null;
//document.addEventListener("DOMContentLoaded", initializedSlider);
startTimer();
initializedSlider();

function initializedSlider() {
  console.log(duration);

  setInterval(showSlides, duration);
}

function showSlides() {
  if (slides.length > 0) {
    slides[slidesIndex].classList.add("displaySlide");
    nextSlide();
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slidesIndex = 0;
  } else if (index < 0) {
    slidesIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });

  slides[slidesIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slidesIndex--;
  showSlide(slidesIndex);
}

function nextSlide() {
  slidesIndex++;
  showSlide(slidesIndex);
}

//10:30:00
