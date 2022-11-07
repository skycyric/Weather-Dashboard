import './styles/style.css';

const city = 'new york';
const key = process.env.API_KEY;
const cityURL = 'http://api.openweathermap.org/geo/1.0/direct?';
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?';

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
