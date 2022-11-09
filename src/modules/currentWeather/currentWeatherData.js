import fetchCityData from '../cityData';
import { weatherURL, appID } from '../apiURL';

const fetchWeatherData = async () => {
  const {
    lat, lon, country, name,
  } = await fetchCityData();
  const response = await fetch(`${weatherURL}lat=${lat}&lon=${lon}${appID}`)
    .then((res) => res.json())
    .then((data) => {
      const { description } = data.weather[0];
      const windSpeed = data.wind.speed;
      const windGust = data.wind.gust;
      const windDeg = data.wind.deg;
      const { humidity } = data.main;
      const temperature = data.main.temp;
      const { icon } = data.weather[0];
      const { pressure } = data.main;

      return {
        description,
        pressure,
        windSpeed,
        windDeg,
        windGust,
        humidity,
        temperature,
        icon,
        name,
        country,
        lat,
        lon,
      };
    });
  return response;
};

export default fetchWeatherData;
