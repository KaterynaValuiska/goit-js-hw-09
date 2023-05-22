const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

btnStart.addEventListener('click', onClickBtnStart);
btnStop.addEventListener('click', onClickBtnStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onClickBtnStart(event) {
    btnStart.setAttribute('disabled', '');
    const intervalId = setInterval(() => {
        if (!btnStart.hasAttribute('disabled')) {
            return;
            clearInterval(intervalId);
        }
     bodyEl.style.backgroundColor = getRandomHexColor();    
}, 1000)
}
 
function onClickBtnStop(event) {
    btnStart.removeAttribute('disabled');
}
