import fetchWeatherData from './currentWeather/currentWeatherData';

let temp = 'celsius';
// const setTemperature = async () => {
//   const { temperature } = await fetchWeatherData();

// };

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
  if (temp === 'celsius') {
    temp = 'fahrenheit';
    e.target.textContent = 'Show temperature in Celsius °C';
  } else {
    temp = 'celsius';
    e.target.textContent = 'Show temperature in Fahrenheit °F';
  }
  const currentTemp = document.getElementById('current-temp');
  currentTemp.textContent = convertTemperature(temperature);
});

export { conversionToCelsius, conversionToFahrenheit, convertTemperature };
