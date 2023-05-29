import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmitForm);


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
};

function onSubmitForm(event) {
  event.preventDefault();

  const { delay, step, amount } = event.target.elements;

  for (let i = 0; i < amount.value; i++) {
    position = i + 1;
    createPromise(position, delay)
      .then(({ position, delay }) => {
    del = Number(delay.value) + i * Number(step.value);
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${del}ms`);
  })
      .catch(({ position, delay }) => {
    del = Number(delay.value) + i * Number(step.value);
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${del}ms`);
  });
    
  }
}

