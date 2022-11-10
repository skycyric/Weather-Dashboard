import fetchWeatherData from './currentWeather/currentWeatherData';
import { createChart } from './forecast/chart';
import fetchForecast from './forecast/forecastData';

let temp = 'celsius';

const conversionToCelsius = (currTemp) => {
  const celsius = currTemp - 273.15;
  return celsius.toFixed(1);
};

const conversionToFahrenheit = (currTemp) => {
  const fahrenheit = ((currTemp - 273.15) * 9) / 5 + 32;
  return fahrenheit.toFixed(2);
};

const convertBtn = document.getElementById('temp-conversion');
convertBtn.textContent = 'Show temperature in Fahrenheit °F';

const convertTemperature = (currTemp) => {
  let newTemp;
  if (temp === 'celsius') {
    newTemp = conversionToCelsius(currTemp) + ' °C';
  } else {
    newTemp = conversionToFahrenheit(currTemp) + ' °F';
  }
  return newTemp;
};

convertBtn.addEventListener('click', async (e) => {
  const { temperature } = await fetchWeatherData();
  const { dateArray } = await fetchForecast();
  const next24Hours = dateArray.slice(0, 9);
  if (temp === 'celsius') {
    temp = 'fahrenheit';
    e.target.textContent = 'Show temperature in Celsius °C';
  } else {
    temp = 'celsius';
    e.target.textContent = 'Show temperature in Fahrenheit °F';
  }
  const currentTemp = document.getElementById('current-temp');
  currentTemp.textContent = convertTemperature(temperature);
  document.getElementById('myChart').remove();
  const newChart = document.createElement('canvas');
  newChart.setAttribute('id', 'myChart');
  document.getElementById('chart').appendChild(newChart);
  createChart(temp, next24Hours);
});

export {
  conversionToCelsius,
  conversionToFahrenheit,
  convertTemperature,
  temp,
};
