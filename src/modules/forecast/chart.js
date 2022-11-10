import { convertTemperature } from '../tempConversion';
import fetchForecast from './forecastData';

const xValues = [];
let temperature;

const getTemperature = (arr) => {
  temperature = arr.map((data) => data.main.temp);
  for (let i = 0; i < temperature.length; i += 1) {
    temperature[i] = convertTemperature(temperature[i]);
  }
  temperature = temperature.map((data) => data.split(' '));
  temperature = temperature.map((data) => data[0]);
  return temperature;
};

export const createChart = (temp, arr) => {
  getTemperature(arr);
  let metric = '°C';
  if (temp === 'celsius') {
    metric = '°C';
  } else {
    metric = '°F';
  }
  /* eslint-disable */
  const weatherChart = new Chart('myChart', {
    /* eslint-enable */
    type: 'line',
    data: {
      labels: xValues,
      datasets: [
        {
          data: temperature,
          borderColor: 'blue',
          fill: false,
          label: `Temperature ${metric}`,
        },
      ],
    },
    options: {
      legend: { display: true },
    },
  });
  return weatherChart;
};

const getNext24HoursChart = async (temp) => {
  const { dateArray } = await fetchForecast();
  const next24Hours = dateArray.slice(0, 9);
  const hoursArray = next24Hours.map((data) => data.dt_txt.split(' '));
  const hours = hoursArray.map((arr) => arr[1]);
  hours.map((hour) => xValues.push(hour));
  createChart(temp, next24Hours);
};

export default getNext24HoursChart;
