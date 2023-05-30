const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

btnStart.addEventListener('click', onClickBtnStart);
btnStop.addEventListener('click', onClickBtnStop);

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


function onClickBtnStart() {
  btnStart.setAttribute('disabled', '');
    intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor(); 
    }, 1000);
    
}



function onClickBtnStop(event) {
    btnStart.removeAttribute('disabled');
    clearInterval(intervalId);
}
