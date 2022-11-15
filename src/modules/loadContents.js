import createCurrentWeather from './currentWeather/createCurrentWeather';
import getNext24HoursChart from './forecast/chart';
import createForecast from './forecast/5DayForecast';
import createDailyInfo from './currentWeather/createDailyInfo';
import setCarousel from './carousel';

const toggleBtn = document.querySelector('button');
const toggleIcon = document.getElementById('toggle-icon');
toggleIcon.src = '../icons/moon.png';

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.className === '') {
    toggleIcon.src = '../icons/moon.png';
    toggleBtn.style.background = '#fff';
  } else {
    toggleIcon.src = '../icons/sun.png';
    toggleBtn.style.background = '#000';
  }
});

const loadContents = () => {
  const xValues = [];
  setCarousel();
  createCurrentWeather();
  getNext24HoursChart(xValues);
  createForecast();
  createDailyInfo();
};

export default loadContents;
