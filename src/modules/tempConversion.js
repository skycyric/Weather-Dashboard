const conversionToCelsius = (currTemp) => {
  const celsius = currTemp - 273.15;
  return celsius.toFixed(1);
};

const conversionToFahrenheit = (currTemp) => {
  const fahrenheit = ((currTemp - 273.15) * 9) / 5 + 32;
  return fahrenheit.toFixed(2);
};

const convertTemperature = (currTemp, temp) => {
  let newTemp;
  if (temp === 'celsius') {
    newTemp = `${conversionToCelsius(currTemp)} °C`;
  } else {
    newTemp = `${conversionToFahrenheit(currTemp)} °F`;
  }
  return newTemp;
};

export default convertTemperature;
