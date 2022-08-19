const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
console.dir(refs);

let timerId = null;
let isActive = false;

const onClickStart = () => {
  if (isActive) {
    return;
  }

  isActive = true;
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};
const onClickStop = () => {
  clearInterval(timerId);
  isActive = false;
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
  return refs.body.style.backgroundColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.startBtn.addEventListener('click', onClickStart);
refs.stopBtn.addEventListener('click', onClickStop);
