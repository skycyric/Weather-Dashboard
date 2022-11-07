import './styles/style.css';

const city = 'new york';
const key = process.env.API_KEY;
const cityURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;

const fetchCityData = async () => {
  const response = await fetch(cityURL)
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
};

fetchWeatherData();
