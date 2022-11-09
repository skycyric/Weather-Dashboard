import fetchForecast from './forecastData';
import translateWeatherCode from './weatherCodes';

const createForecast = async () => {
  const { maxTempArray, minTempArray, dateArray, weathercode } =
    await fetchForecast();
  const cells = [...document.querySelectorAll('.carousel-cell')];

  for (let i = 0; i < cells.length; i += 1) {
    const { icon, description } = translateWeatherCode(weathercode[i]);
    const dayIcon = document.createElement('img');
    dayIcon.setAttribute('class', 'day-icon');
    dayIcon.src = `icons/${icon}.png`;

    const weatherDescription = document.createElement('span');
    weatherDescription.textContent = `${description}`;

    const maxTemp = document.createElement('span');
    maxTemp.textContent = `Max: ${maxTempArray[i + 1]}°C`;

    const minTemp = document.createElement('span');
    minTemp.textContent = `Min: ${minTempArray[i + 1]}°C`;

    const day = document.createElement('span');
    day.textContent = `${dateArray[i]}`;

    cells[i].appendChild(dayIcon);
    cells[i].appendChild(weatherDescription);
    cells[i].appendChild(maxTemp);
    cells[i].appendChild(minTemp);
    cells[i].appendChild(day);
  }
};

export default createForecast;
