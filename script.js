const slider = document.querySelector('.slider');
const intervalTime = 5000; // Time between slides (in milliseconds)
let slideInterval;

function nextSlide() {
  const items = document.querySelectorAll('.item');
  slider.append(items[0]);
}

function startSlide() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

function stopSlide() {
  clearInterval(slideInterval);
}

function activate(e) {
  if (e.target.matches('.next') || e.target.matches('.prev')) {
    stopSlide();
    nextSlide();
    startSlide();
  }
}

document.addEventListener('click', activate, false);

// Start the slider
startSlide();
