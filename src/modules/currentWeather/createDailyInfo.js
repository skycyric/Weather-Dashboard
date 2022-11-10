import fetchAirPollutionData from '../airQualityData';
import fetchWeatherData from './currentWeatherData';
import estimateWindSpeed from './windSpeed';

const createWindInfo = (deg, gust, speed) => {
  const windDescription = document.getElementById('wind-description');
  windDescription.textContent = estimateWindSpeed(speed);

  const windDeg = document.getElementById('deg');
  windDeg.textContent = `Degree: ${deg}`;

  const windGust = document.getElementById('gust');
  windGust.textContent = `Gust: ${gust}mph`;

  const windSpeed = document.getElementById('speed');
  windSpeed.textContent = `Speed: ${speed}mph`;
};

const createDailyInfo = async () => {
  const { pressure, windSpeed, windDeg, windGust, humidity } =
    await fetchWeatherData();
  const { airQuality, carbonMonoxide, nitrogenMonoxide, nitrogenDioxide } =
    await fetchAirPollutionData();
  createWindInfo(windDeg, windGust, windSpeed);
};

export default createDailyInfo;
