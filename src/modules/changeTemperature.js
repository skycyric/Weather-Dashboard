import fetchWeatherData from './currentWeather/currentWeatherData';
import { createChart } from './forecast/chart';
import fetchForecast from './forecast/forecastData';
import convertTemperature from './tempConversion';

let temp = 'celsius';

const convertBtn = document.getElementById('temp-conversion');
convertBtn.textContent = 'Show temperature in Fahrenheit °F';

const removeElements = () => {
  document.getElementById('myChart').remove();
  const cellTemps = [...document.querySelectorAll('.cell-temp')];
  cellTemps.forEach((cell) => cell.remove());
};

const changeCurrentTemp = async () => {
  const { temperature } = await fetchWeatherData();
  const currentTemp = document.getElementById('current-temp');
  currentTemp.textContent = convertTemperature(temperature, temp);
};

const changeChartTemp = async () => {
  const { dateArray } = await fetchForecast();
  const next24Hours = dateArray.slice(0, 9);
  const newChart = document.createElement('canvas');
  newChart.setAttribute('id', 'myChart');
  document.getElementById('chart').appendChild(newChart);
  createChart(temp, next24Hours);
};

const changeCarouselTemp = async () => {
  const { temperatureArray } = await fetchForecast();
  const cellMaxTemp = [...document.querySelectorAll('.cell-description')];
  const cells = [...document.querySelectorAll('.carousel-cell')];
  for (let i = 0; i < temperatureArray.length; i += 1) {
    const cellTemperature = document.createElement('span');
    cellTemperature.setAttribute('class', 'cell-temp');
    cellTemperature.textContent = convertTemperature(temperatureArray[i], temp);
    cells[i].insertBefore(cellTemperature, cellMaxTemp[i]);
  }
};

convertBtn.addEventListener('click', (e) => {
  if (temp === 'celsius') {
    temp = 'fahrenheit';
    e.target.textContent = 'Show temperature in Celsius °C';
  } else {
    temp = 'celsius';
    e.target.textContent = 'Show temperature in Fahrenheit °F';
  }
  removeElements();
  changeCurrentTemp();
  changeChartTemp();
  changeCarouselTemp();
});

export default convertTemperature;
