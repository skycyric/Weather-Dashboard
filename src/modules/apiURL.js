const key = process.env.API_KEY;
const cityURL = 'http://api.openweathermap.org/geo/1.0/direct?';
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?';
const airPollutionURL = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const forecastURL = 'https://api.open-meteo.com/v1/forecast?';

export { key, cityURL, weatherURL, airPollutionURL, forecastURL };
