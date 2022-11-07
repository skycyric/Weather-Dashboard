const conversionToCelsius = (temp) => {
  const celsius = temp - 273.15;
  return celsius.toFixed(1);
};

const conversionToFahrenheit = (temp) => {
  const fahrenheit = ((temp - 273.15) * 9) / 5 + 32;
  return fahrenheit.toFixed(2);
};

export { conversionToCelsius, conversionToFahrenheit };
