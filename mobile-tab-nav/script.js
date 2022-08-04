// Course instructions
const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();

    item.classList.add('active');
    contents[idx].classList.add('show');
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove('show'));
}

function hideAllItems() {
  listItems.forEach((item) => item.classList.remove('active'));
}

// My own attempt
// const images = document.querySelectorAll('.content');
// const navItems = document.querySelectorAll('li');

// navItems.forEach((item, idx) => {
//   item.addEventListener('click', () => {
//     removeAllActiveShows();
//     item.classList.add('active');

//     images[idx].classList.add('show');
//   });
// });

// function removeAllActiveShows() {
//   navItems.forEach((item) => item.classList.remove('active'));
//   images.forEach((image) => image.classList.remove('show'));
// }
