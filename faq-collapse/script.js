// This was done with a pseudocode set of hints.
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentElement.classList.toggle('active');
  });
});

// Below is my own attempt. It was successful. I have no regrets. The above one is better though.

// const faqs = document.querySelectorAll('.faq');

// faqs.forEach((faq) => {
//   faq.addEventListener('click', () => {
//     if (faq.classList.contains('active')) {
//       faq.classList.remove('active');
//     } else {
//       faq.classList.add('active');
//     }
//   });
// });
