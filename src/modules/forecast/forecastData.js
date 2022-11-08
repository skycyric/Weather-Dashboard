import { getStartDate, getEndDate, formatDate } from './dateRange';
import fetchCityData from '../cityData';
import { forecastURL } from '../apiURL';

const fetchForecast = async () => {
  const { lat, lon } = await fetchCityData();
  const startDate = formatDate(getStartDate());
  const endDate = formatDate(getEndDate());

  const response = await fetch(
    `${forecastURL}latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto&start_date=${startDate}&end_date=${endDate}`,
  )
    .then((res) => res.json())
    .then((data) => {
      const maxTempArray = data.daily.temperature_2m_max.slice(1);
      const minTempArray = data.daily.temperature_2m_min.slice(1);
      const dateArray = data.daily.time.slice(1);
      return {
        maxTempArray,
        minTempArray,
        dateArray,
      };
    });
  console.log(response);
  return response;
};

export default fetchForecast;
