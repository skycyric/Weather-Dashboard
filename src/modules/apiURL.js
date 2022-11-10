const appID = `&appid=${process.env.API_KEY}`;
const cityURL = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?';
const airPollutionURL = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const forecastURL = 'http://api.openweathermap.org/data/2.5/forecast?';

export {
  appID, cityURL, weatherURL, airPollutionURL, forecastURL,
};
