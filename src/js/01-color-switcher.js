const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
console.dir(refs);

let timerId = null;
let isActive = false;

refs.startBtn.addEventListener('click', () => {
  if (isActive) {
    return;
  }
  timerId = setInterval(() => {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  isActive = false;
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
  return refs.body.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
