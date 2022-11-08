import fetchWeatherData from './currentWeatherData';
import { conversionToCelsius } from '../tempConversion';

const createCurrentWeather = async () => {
  const {
    description, temperature, maxTemp, minTemp, icon,
  } = await fetchWeatherData();

  const currentTemp = document.getElementById('current-temp');
  currentTemp.textContent = `${conversionToCelsius(temperature)} °C`;

  const currentDescription = document.getElementById('description');
  currentDescription.textContent = description;

  const currentMaxTemp = document.getElementById('current-max-temp');
  currentMaxTemp.textContent = `${conversionToCelsius(maxTemp)} °C`;

  const currentMinTemp = document.getElementById('current-min-temp');
  currentMinTemp.textContent = `${conversionToCelsius(minTemp)} °C`;

  const currentIcon = document.getElementById('current-weather-icon');
  currentIcon.src = `icons/${icon}.png`;
};

export default createCurrentWeather;
