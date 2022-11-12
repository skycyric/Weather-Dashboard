import toggleDarkMode from './toggle';
import createCurrentWeather from './currentWeather/createCurrentWeather';
import getNext24HoursChart from './forecast/chart';
import createForecast from './forecast/5DayForecast';
import createDailyInfo from './currentWeather/createDailyInfo';

const displayContents = () => {
  document.getElementById('loader').style.display = 'none';

  document.querySelector('header').style.display = 'block';

  document.getElementById('main-section').style.display = 'block';

  document.querySelector('.carousel').style.visibility = 'visible';
};

const loadContents = () => {
  setTimeout(displayContents, 1000);
  toggleDarkMode();
  createCurrentWeather();
  getNext24HoursChart();
  createForecast();
  createDailyInfo();
};

export default loadContents;
