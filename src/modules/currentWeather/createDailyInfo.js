import createWindInfo from './wind';
import createPressureInfo from './pressure';
import createAirQuality from './airQuality';

const createDailyInfo = async () => {
  createWindInfo();
  createPressureInfo();
  createAirQuality();
};

export default createDailyInfo;
