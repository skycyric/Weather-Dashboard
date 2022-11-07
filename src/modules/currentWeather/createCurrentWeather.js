import fetchWeatherData from './currentWeatherData';

const createCurrentWeather = async () => {
  const {
    description, temperature, maxTemp, minTemp, icon,
  } = await fetchWeatherData();

  const currentTemp = document.getElementById('current-temp');
  currentTemp.textContent = temperature;

  const currentDescription = document.getElementById('description');
  currentDescription.textContent = description;

  const currentMaxTemp = document.getElementById('current-max-temp');
  currentMaxTemp.textContent = maxTemp;

  const currentMinTemp = document.getElementById('current-min-temp');
  currentMinTemp.textContent = minTemp;

  const currentIcon = document.getElementById('current-weather-icon');
  currentIcon.src = `icons/${icon}.png`;
};

export default createCurrentWeather;
