import './styles/style.css';
import { getStartDate, getEndDate, formatDate } from './modules/dateRange';
import {
  key,
  cityURL,
  weatherURL,
  airPollutionURL,
  forecastURL,
} from './modules/apiURL';

const city = 'giurgiu';

const fetchCityData = async () => {
  const response = await fetch(`${cityURL}q=${city}&appid=${key}`)
    .then((res) => res.json())
    .then((data) => {
      const { country, lat, lon } = data[0];
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
      const { description } = data.weather[0];
      const wind = data.wind.speed;
      const { humidity } = data.main;
      const temperature = data.main.temp;
      const maxTemp = data.main.temp_max;
      const minTemp = data.main.temp_min;
      return {
        description,
        wind,
        humidity,
        temperature,
        maxTemp,
        minTemp,
      };
    });
  console.log(response);
  return response;
};

fetchWeatherData();

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
      return {
        airQuality,
        carbonMonoxide,
        nitrogenMonoxide,
        nitrogenDioxide,
      };
    });
  console.log(response);
  return response;
};

fetchAirPollutionData();

const forecast = async () => {
  const { lat, lon } = await fetchCityData();
  const startDate = formatDate(getStartDate());
  const endDate = formatDate(getEndDate());

  const response = await fetch(
    `${forecastURL}latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto&start_date=${startDate}&end_date=${endDate}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const maxTempArray = data.daily.temperature_2m_max.slice(1);
      const minTempArray = data.daily.temperature_2m_min.slice(1);
      const dateArray = data.daily.time.slice(1);
      const weatherCode = data.daily.weathercode.slice(1);
      return { maxTempArray, minTempArray, dateArray, weatherCode };
    });
  console.log(response);
  return response;
};

forecast();
