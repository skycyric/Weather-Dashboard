import fetchCityData from './cityData';
import { airPollutionURL, appID } from './apiURL';

const getAirQuality = (data) => {
  let qualityOfAir = '';
  switch (data) {
    case 1:
      qualityOfAir = 'Good';
      break;
    case 2:
      qualityOfAir = 'Fair';
      break;
    case 3:
      qualityOfAir = 'Moderate';
      break;
    case 4:
      qualityOfAir = 'Poor';
      break;
    case 5:
      qualityOfAir = 'Very Poor';
      break;
    default:
      qualityOfAir = 'Good';
      break;
  }
  return qualityOfAir;
};

const fetchAirPollutionData = async () => {
  const { lat, lon } = await fetchCityData();
  const response = await fetch(
    `${airPollutionURL}lat=${lat}&lon=${lon}${appID}`
  )
    .then((res) => res.json())
    .then((data) => {
      const airQuality = getAirQuality(data.list[0].main.aqi);
      const carbonMonoxide = data.list[0].components.co;
      const nitrogenMonoxide = data.list[0].components.no;
      const nitrogenDioxide = data.list[0].components.no2;
      return {
        airQuality,
        carbonMonoxide,
        nitrogenMonoxide,
        nitrogenDioxide,
      };
    });
  //console.log(response);
  return response;
};

export default fetchAirPollutionData;
