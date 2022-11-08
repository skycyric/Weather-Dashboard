import fetchForecast from './forecastData';
import { convertDaysOfWeek } from './dateRange';

const xValues = [''];

const createChart = () => {
  /* eslint-disable */
  const weatherChart = new Chart('myChart', {
    /* eslint-enable */
    type: 'line',
    data: {
      labels: xValues,
      datasets: [
        {
          data: [],
          borderColor: 'red',
          fill: false,
        },
        {
          data: [],
          borderColor: 'blue',
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: true },
    },
  });
  return weatherChart;
};

const getDates = async () => {
  const { dateArray } = await fetchForecast();
  createChart();
  const dateStrings = dateArray.map((d) => convertDaysOfWeek(d));
  dateStrings.map((d) => xValues.push(d));
};

getDates();

export default getDates;
