import './styles/style.css';
import { getStartDate, getEndDate, formatDate } from './modules/dateRange';

const city = 'new york';
const key = process.env.API_KEY;
const cityURL = 'http://api.openweathermap.org/geo/1.0/direct?';
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?';
const airPollutionURL = 'http://api.openweathermap.org/data/2.5/air_pollution?';

const fetchCityData = async () => {
  const response = await fetch(`${cityURL}q=${city}&appid=${key}`)
    .then((res) => res.json())
    .then((data) => {
      const country = data[0].country;
      const lat = data[0].lat;
      const lon = data[0].lon;
      return { country, lat, lon };
    });
  return response;
};

const fetchWeatherData = async () => {
  const { country, lat, lon } = await fetchCityData();
  console.log(country, lat, lon);
  const response = await fetch(
    `${weatherURL}lat=${lat}&lon=${lon}&appid=${key}`
  )
    .then((res) => res.json())
    .then((data) => {
      const description = data.weather[0].description;
      const wind = data.wind.speed;
      const humidity = data.main.humidity;
      const temperature = data.main.temp;
      const maxTemp = data.main.temp_max;
      const minTemp = data.main.temp_min;
      return { description, wind, humidity, temperature, maxTemp, minTemp };
    });
  console.log(response);
  return response;
};

fetchWeatherData();

const fetchAirPollutionData = async () => {
  const { lat, lon } = await fetchCityData();
  const response = await fetch(
    `${airPollutionURL}lat=${lat}&lon=${lon}&appid=${key}`
  )
    .then((res) => res.json())
    .then((data) => {
      const airQuality = getAirQuality(data.list[0].main.aqi);
      const carbonMonoxide = data.list[0].components.co;
      const nitrogenMonoxide = data.list[0].components.no;
      const nitrogenDioxide = data.list[0].components.no2;
      return { airQuality, carbonMonoxide, nitrogenMonoxide, nitrogenDioxide };
    });
  console.log(response);
  return response;
};

fetchAirPollutionData();

const getAirQuality = (data) => {
  let qualityOfAir = '';
  switch (data) {
    case 1:
      qualityOfAir = 'Good';
      break;
    case 2:
      qualityOfAir = 'Fair';
      break;
    case 3:
      qualityOfAir = 'Moderate';
      break;
    case 4:
      qualityOfAir = 'Poor';
      break;
    case 5:
      qualityOfAir = 'Very Poor';
      break;
    default:
      qualityOfAir = 'Good';
      break;
  }
  return qualityOfAir;
};

const forecast = async () => {
  const { lat, lon } = await fetchCityData();
  const startDate = formatDate(getStartDate());
  const endDate = formatDate(getEndDate());

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=auto&start_date=${startDate}&end_date=${endDate}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
  return response;
};

forecast();
