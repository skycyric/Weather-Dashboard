import fetchWeatherData from './currentWeatherData';
import { conversionToCelsius } from '../tempConversion';

const createCurrentWeather = async () => {
  const {
    description, temperature, icon, name, country, lat, lon,
  } = await fetchWeatherData();

  const location = document.getElementById('location');
  location.textContent = `Location: ${name}, ${country}`;

  const latitude = document.getElementById('lat');
  latitude.textContent = `Latitude: ${lat}`;

  const longitude = document.getElementById('lon');
  longitude.textContent = `Longitude: ${lon}`;

  const currentTemp = document.getElementById('current-temp');
  currentTemp.textContent = `${conversionToCelsius(temperature)} °C`;

  const currentDescription = document.getElementById('description');
  currentDescription.textContent = description;

  const currentIcon = document.getElementById('current-weather-icon');
  currentIcon.src = `icons/${icon}.png`;
};

export default createCurrentWeather;
