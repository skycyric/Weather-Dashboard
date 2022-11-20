import fetchWeatherData from './currentWeatherData';
import convertTemperature from '../tempConversion';
import currentDay from '../forecast/date';

const createCurrentWeather = async () => {
  const { description, temperature, icon, name, country, lat, lon } =
    await fetchWeatherData();

  let weatherIcon;

  if (document.body.className === '') {
    weatherIcon = `light/${icon}.png`;
  } else {
    weatherIcon = `dark/${icon}.png`;
  }

  const location = document.getElementById('location');
  location.textContent = `${name}, ${country}`;

  const latitude = document.getElementById('lat');
  latitude.textContent = `Latitude: ${lat}`;

  const longitude = document.getElementById('lon');
  longitude.textContent = `Longitude: ${lon}`;

  const day = document.getElementById('current-day');
  day.textContent = currentDay;

  const currentTemp = document.getElementById('current-temp');
  currentTemp.textContent = convertTemperature(temperature, 'celsius');

  const mobileTemp = document.getElementById('current-mobile-temp');
  mobileTemp.textContent = convertTemperature(temperature, 'celsius');

  const currentDescription = document.getElementById('description');
  const mobileDescription = document.getElementById('mobile-description');
  const capitalLetter = description.charAt(0).toUpperCase();
  const restOfString = description.slice(1);
  currentDescription.textContent = `${capitalLetter}${restOfString}`;
  mobileDescription.textContent = `${capitalLetter}${restOfString}`;

  const currentIcon = document.getElementById('current-weather-icon');
  currentIcon.src = weatherIcon;

  const mobileWeatherIcon = document.getElementById('mobile-weather-icon');
  mobileWeatherIcon.src = weatherIcon;
};

export default createCurrentWeather;
