const convertPressure = (inHg) => {
  let description;
  switch (true) {
    case inHg > 30.2:
      description = 'High';
      break;
    case inHg >= 29.8 && inHg <= 30.2:
      description = 'Normal';
      break;
    case inHg < 29.8:
      description = 'Low';
      break;
    default:
      description = 'Normal';
      break;
  }
  return description;
};

const createPressureInfo = (pressure) => {
  const inchOfMercury = pressure * 0.02953;
  const pressureDescription = document.getElementById('pressure-description');
  pressureDescription.textContent = convertPressure(inchOfMercury);

  const dailyPressure = document.getElementById('pressure');
  dailyPressure.textContent = `Pressure: ${pressure}hPa`;
};

export default createPressureInfo;
