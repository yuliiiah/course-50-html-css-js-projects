const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upBtn = document.querySelector('.button-up');
const downBtn = document.querySelector('.button-down');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIdx = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === 'up') {
    activeSlideIdx++;

    if (activeSlideIdx > slidesLength - 1) {
      activeSlideIdx = 0;
    }
  } else if (direction === 'down') {
    activeSlideIdx--;

    if (activeSlideIdx < 0) {
      activeSlideIdx = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIdx * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${activeSlideIdx * sliderHeight}px)`;
};
