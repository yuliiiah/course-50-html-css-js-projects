const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime,
  timesClicked = 0;

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heartIcon = document.createElement('i');
  heartIcon.classList.add('fa-solid');
  heartIcon.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heartIcon.style.top = `${yInside}px`;
  heartIcon.style.left = `${xInside}px`;

  loveMe.appendChild(heartIcon);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heartIcon.remove(), 1000);
};
