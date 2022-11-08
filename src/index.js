import './styles/style.css';
import fetchAirPollutionData from './modules/airQualityData';
import fetchForecast from './modules/forecast/forecastData';
import createCurrentWeather from './modules/currentWeather/createCurrentWeather';

window.onload = () => {
  fetchAirPollutionData();
  fetchForecast();
  createCurrentWeather();
};
