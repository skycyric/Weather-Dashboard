import { getStartDate, getEndDate, formatDate } from './dateRange';
import fetchCityData from '../cityData';
import { forecastURL } from '../apiURL';

const fetchForecast = async () => {
  const { lat, lon } = await fetchCityData();
  const startDate = formatDate(getStartDate());
  const endDate = formatDate(getEndDate());

  const response = await fetch(
    `${forecastURL}latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto&start_date=${startDate}&end_date=${endDate}`
  )
    .then((res) => res.json())
    .then((data) => {
      const maxTempArray = data.daily.temperature_2m_max;
      const minTempArray = data.daily.temperature_2m_min;
      const dateArray = data.daily.time.slice(1);
      const weathercode = data.daily.weathercode.slice(1);
      return {
        maxTempArray,
        minTempArray,
        dateArray,
        weathercode,
      };
    });
  return response;
};

export default fetchForecast;
