import fetchForecast from './forecastData';

const xValues = [];
let temperature;

const createChart = () => {
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
          label: 'Temperature °C',
        },
      ],
    },
    options: {
      legend: { display: true },
    },
  });
  return weatherChart;
};

const getTemperature = (arr) => {
  temperature = arr.map((data) => data.main.temp);
  return temperature;
};

const getNext24HoursChart = async () => {
  const { dateArray } = await fetchForecast();
  const next24Hours = dateArray.slice(0, 9);
  const hoursArray = next24Hours.map((data) => data.dt_txt.split(' '));
  const hours = hoursArray.map((arr) => arr[1]);
  hours.map((hour) => xValues.push(hour));
  getTemperature(next24Hours);
  createChart();
};

export default getNext24HoursChart;
