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

const createAirQuality = () => {};

export default createAirQuality;
