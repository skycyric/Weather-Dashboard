import './styles/style.css';
import fetchAirPollutionData from './modules/airQualityData';
import createCurrentWeather from './modules/currentWeather/createCurrentWeather';
import getDates from './modules/forecast/chart';
import toggleDarkMode from './modules/toggle';
import loadContents from './modules/loadContents';

window.onload = () => {
  toggleDarkMode();
  fetchAirPollutionData();
  createCurrentWeather();
  getDates();
  loadContents();
};
