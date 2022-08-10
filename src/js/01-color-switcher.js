const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
console.dir(startBtn);

let timerId = null;
let isActive = false;

startBtn.addEventListener('click', () => {
  if (isActive) {
    return;
  }
  timerId = setInterval(() => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  isActive = false;
  stopBtn.disabled = true;
  startBtn.disabled = false;
  return body.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
