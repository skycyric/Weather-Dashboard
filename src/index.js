import './styles/style.css';
import fetchAirPollutionData from './modules/airQualityData';
import createCurrentWeather from './modules/currentWeather/createCurrentWeather';
import getDates from './modules/forecast/chart';

window.onload = () => {
  fetchAirPollutionData();
  createCurrentWeather();
  getDates();
};
