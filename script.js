const img = document.querySelector('.bg');
const text = document.querySelector('.text');

let count = 10;
let i = 0;

img.style.filter = 'blur(10px)';

document.addEventListener('DOMContentLoaded', () => {
  updateBlur();
});

function updateBlur() {
  if (i <= 100) {
    text.textContent = `${i}%`;
    text.style.filter = `blur(${i}%)`;
  }

  if (i % 10 === 0) {
    img.style.filter = `blur(${100 - i}px)`;
  }
  i++;
  if (i >= 100) text.classList.add('hidden');
  setTimeout(updateBlur, 20);
}
