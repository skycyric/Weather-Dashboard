import './styles/style.css';
import fetchAirPollutionData from './modules/airQualityData';
import createCurrentWeather from './modules/currentWeather/createCurrentWeather';
import getDates from './modules/forecast/chart';
import loadContents from './modules/loadContents';
import createForecast from './modules/forecast/7DayForecast';

window.onload = () => {
  fetchAirPollutionData();
  createCurrentWeather();
  getDates();
  createForecast();
  loadContents();
};
