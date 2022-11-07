import { cityURL } from './apiURL';

const fetchCityData = async () => {
  const response = await fetch(cityURL)
    .then((res) => res.json())
    .then((data) => {
      const { country, lat, lon } = data[0];
      return { country, lat, lon };
    });
  return response;
};

export default fetchCityData;
