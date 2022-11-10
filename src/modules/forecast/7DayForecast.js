import fetchForecast from './forecastData';

const createForecast = async () => {
  const {
    maxTemperatureArray,
    minTemperatureArray,
    descriptionArray,
    iconArray,
    temperatureArray,
    dateArray,
  } = await fetchForecast();
  const cells = [...document.querySelectorAll('.carousel-cell')];

  for (let i = 0; i < cells.length; i += 1) {
    const dayIcon = document.createElement('img');
    dayIcon.setAttribute('class', 'day-icon');
    dayIcon.src = `icons/${iconArray[i]}.png`;

    const temperature = document.createElement('span');
    temperature.textContent = `${temperatureArray[i]}`;

    const weatherDescription = document.createElement('span');
    weatherDescription.textContent = `${descriptionArray[i]}`;

    const maxTemp = document.createElement('span');
    maxTemp.textContent = `Max: ${maxTemperatureArray[i]}°C`;

    const minTemp = document.createElement('span');
    minTemp.textContent = `Min: ${minTemperatureArray[i]}°C`;

    const day = document.createElement('span');
    const hour = document.createElement('span');
    const hoursAndDateArray = dateArray.map((data) => data.dt_txt.split(' '));
    day.textContent = `${hoursAndDateArray[i][0]}`;
    hour.textContent = `${hoursAndDateArray[i][1]}`;

    cells[i].appendChild(dayIcon);
    cells[i].appendChild(temperature);
    cells[i].appendChild(weatherDescription);
    cells[i].appendChild(maxTemp);
    cells[i].appendChild(minTemp);
    cells[i].appendChild(day);
    cells[i].appendChild(hour);
  }
};

export default createForecast;
