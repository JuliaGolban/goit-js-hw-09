import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button[type="submit"]'),
};
console.log('refs', refs);

refs.form.addEventListener('submit', onClickCreatePromises);
// refs.btnSubmit.addEventListener('click', onClickCreatePromises);

function onClickCreatePromises(e) {
  e.preventDefault();
  // const {
  //   elements: { delay, step, amount },
  // } = +e.currentTarget.value;
  const delay = +e.currentTarget.elements.delay.value;
  const step = +e.currentTarget.elements.value;
  const amount = +e.currentTarget.elements.value;

  for (let i = 0; i <= amount; i += 1) {
    const totalDelay = delay + step * i;
    console.log(totalDelay);

    createPromise(i, totalDelay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  e.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
