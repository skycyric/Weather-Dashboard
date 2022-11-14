import toggleDarkMode from './toggle';
import createCurrentWeather from './currentWeather/createCurrentWeather';
import getNext24HoursChart from './forecast/chart';
import createForecast from './forecast/5DayForecast';
import createDailyInfo from './currentWeather/createDailyInfo';
import setCarousel from './carousel';

const loadContents = () => {
  const xValues = [];
  toggleDarkMode();
  setCarousel();
  createCurrentWeather();
  getNext24HoursChart(xValues);
  createForecast();
  createDailyInfo();
};

export default loadContents;
