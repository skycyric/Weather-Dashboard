import fetchCityData from '../cityData';
import { forecastURL, appID } from '../apiURL';

const fetchForecast = async () => {
  const { lat, lon } = await fetchCityData();

  const response = await fetch(`${forecastURL}lat=${lat}&lon=${lon}${appID}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const dateArray = data.list;
      return {
        dateArray,
      };
    });
  console.log(response);
  return response;
};

export default fetchForecast;
