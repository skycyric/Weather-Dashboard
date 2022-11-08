import fetchCityData from '../cityData';
import { weatherURL, appID } from '../apiURL';

const fetchWeatherData = async () => {
  const { lat, lon } = await fetchCityData();
  const response = await fetch(`${weatherURL}lat=${lat}&lon=${lon}${appID}`)
    .then((res) => res.json())
    .then((data) => {
      const { description } = data.weather[0];
      const wind = data.wind.speed;
      const { humidity } = data.main;
      const temperature = data.main.temp;
      const maxTemp = data.main.temp_max;
      const minTemp = data.main.temp_min;
      const { icon } = data.weather[0];

      return {
        description,
        wind,
        humidity,
        temperature,
        maxTemp,
        minTemp,
        icon,
      };
    });
  return response;
};

export default fetchWeatherData;
