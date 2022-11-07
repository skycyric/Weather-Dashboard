import './styles/style.css';
import fetchWeatherData from './modules/currentWeatherData';
import fetchAirPollutionData from './modules/airQualityData';
import fetchForecast from './modules/forecastData';

window.onload = () => {
  fetchWeatherData();
  fetchAirPollutionData();
  fetchForecast();
};
