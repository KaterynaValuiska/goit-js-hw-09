import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector('input');
const btnEl = document.querySelector('[data-start]');
const dayEl = document.querySelector('[data-days]');
const hourEl = document.querySelector('[data-hours]');
const minutEl = document.querySelector('[data-minutes]');
const secondEl = document.querySelector('[data-seconds]');

btnEl.style.fontSize = "20px";
inputEl.style.fontSize = "20px";

inputEl.addEventListener('input', onSelectDate);
btnEl.addEventListener('click', onClickBtnStartTimer);

btnEl.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(inputEl,  options );

const dateNow = Date.now();


function onSelectDate(event) {
    selectedDates = new Date(inputEl.value).getTime();
    console.log(selectedDates);
    if (dateNow > selectedDates) {
        Notiflix.Notify.failure('Please choose a date in the future');
        // alert("Please choose a date in the future");
        return; 
    }

    btnEl.removeAttribute('disabled');
}


function onClickBtnStartTimer(event) {
const timer = {
    start() {
        const intervalTimer = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = (selectedDates - currentTime);
            if (deltaTime === 0) {
             clearInterval(intervalTimer);   
                return;
            }
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            dayEl.textContent = days;
            hourEl.textContent = hours;
            minutEl.textContent = minutes;
            secondEl.textContent = seconds;

        }, 1000);
    }
}
timer.start()
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
    return String(value).padStart(2, '0');
}
