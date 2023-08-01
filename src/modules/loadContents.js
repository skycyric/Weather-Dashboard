import createCurrentWeather from './currentWeather/createCurrentWeather';
import getNext24HoursChart from './forecast/chart';
import createForecast from './forecast/5DayForecast';
import createDailyInfo from './currentWeather/createDailyInfo';
import setCarousel from './carousel';
import initializeChatBot from './chatbot';

const cells = [...document.querySelectorAll('.slide')];
const toggleBtn = document.querySelector('button');
const toggleIcon = document.getElementById('toggle-icon');
toggleIcon.src = '../icons/moon.png';

let temp;

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.className === '') {
    toggleIcon.src = '../icons/moon.png';
    toggleBtn.style.background = '#fff';
    cells.forEach((cell) => (cell.innerHTML = ''));
    loadContents();
  } else {
    toggleIcon.src = '../icons/sun.png';
    toggleBtn.style.background = 'rgb(48, 48, 48)';
    cells.forEach((cell) => (cell.innerHTML = ''));
    loadContents();
  }
});

function toggleVolume(event) {
  if (event.target.textContent === 'volume_up') {
    event.target.textContent = 'volume_off';
  } else {
    event.target.textContent = 'volume_up';
  }
}

document.getElementById('volumeIcon_welcome').addEventListener('click', toggleVolume);
document.getElementById('volumeIcon_chat').addEventListener('click', toggleVolume);

// document.getElementById('volumeIcon_welcom').addEventListener('click', function () {
//   if (this.textContent === 'volume_up') {
//     this.textContent = 'volume_off';
//   } else {
//     this.textContent = 'volume_up';
//   }
// });

// document.getElementById('volumeIcon_chat').addEventListener('click', function () {
//   if (this.textContent === 'volume_up') {
//     this.textContent = 'volume_off';
//   } else {
//     this.textContent = 'volume_up';
//   }
// });

const loadContents = () => {
  if (document.getElementById('temp-conversion').textContent === '°C') {
    temp = 'fahrenheit';
  } else {
    temp = 'celsius';
  }
  const xValues = [];
  setCarousel();
  createCurrentWeather(temp);
  getNext24HoursChart(xValues, temp);
  createForecast(temp);
  createDailyInfo();
  initializeChatBot();
};

export default loadContents;
