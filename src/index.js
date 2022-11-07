import './styles/style.css';
import fetchAirPollutionData from './modules/airQualityData';
import fetchForecast from './modules/forecastData';
import createCurrentWeather from './modules/createCurrentWeather';

window.onload = () => {
  fetchAirPollutionData();
  fetchForecast();
  createCurrentWeather();
};
