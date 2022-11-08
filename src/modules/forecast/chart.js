import fetchForecast from './forecastData';
import { convertDaysOfWeek } from './dateRange';

const xValues = ['°C'];
const minimums = [];
const maximums = [];

const createChart = () => {
  /* eslint-disable */
  const weatherChart = new Chart('myChart', {
    /* eslint-enable */
    type: 'line',
    data: {
      labels: xValues,
      datasets: [
        {
          data: maximums,
          borderColor: 'red',
          fill: false,
          label: 'Maximum °C',
        },
        {
          data: minimums,
          borderColor: 'blue',
          fill: false,
          label: 'Minimum °C',
        },
      ],
    },
    options: {
      legend: { display: true },
    },
  });
  return weatherChart;
};

const getMaximums = async () => {
  const { maxTempArray } = await fetchForecast();
  maxTempArray.map((x) => maximums.push(x));
};

const getMinimums = async () => {
  const { minTempArray } = await fetchForecast();
  minTempArray.map((x) => minimums.push(x));
};

const getDates = async () => {
  const { dateArray } = await fetchForecast();
  await getMaximums();
  await getMinimums();
  createChart();
  const dateStrings = dateArray.map((d) => convertDaysOfWeek(d));
  dateStrings.map((d) => xValues.push(d));
};

getDates();

export default getDates;
