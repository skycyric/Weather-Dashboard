import fetchAirPollutionData from '../airQualityData';
import fetchWeatherData from './currentWeatherData';
import createWindInfo from './wind';
import createPressureInfo from './pressure';
import createAirQuality from './airQuality';

const createDailyInfo = async () => {
  const { pressure, windSpeed, windDeg, windGust, humidity } =
    await fetchWeatherData();
  const { airQuality, carbonMonoxide, nitrogenMonoxide, nitrogenDioxide } =
    await fetchAirPollutionData();
  createWindInfo(windDeg, windGust, windSpeed);
  createPressureInfo(pressure);
  createAirQuality(
    airQuality,
    carbonMonoxide,
    nitrogenMonoxide,
    nitrogenDioxide
  );
};

export default createDailyInfo;
