const translateWeatherCode = (code) => {
  let icon;
  let description;
  switch (code) {
    case 0:
      description = 'Clear sky';
      icon = '01d';
      break;
    case 1:
      description = 'Mainly clear';
      icon = '02d';
      break;
    case 2:
      description = 'Partly cloudy';
      icon = '03d';
      break;
    case 3:
      description = 'Overcast';
      icon = '04d';
      break;
    case 45:
      description = 'Fog';
      icon = '50d';
      break;
    case 48:
      description = 'Depositing rime fog';
      icon = '50d';
      break;
    case 51:
      description = 'Light drizzle';
      icon = '09d';
      break;
    case 53:
      description = 'Moderate drizzle';
      icon = '09d';
      break;
    case 55:
      description = 'Dense drizzle';
      icon = '09d';
      break;
    case 56:
      description = 'Freezing light drizzle';
      icon = '09d';
      break;
    case 57:
      description = 'Freezing dense drizzle';
      icon = '09d';
      break;
    case 61:
      description = 'Slight rain';
      icon = '09d';
      break;
    case 63:
      description = 'Moderate rain';
      icon = '09d';
      break;
    case 65:
      description = 'Heavy rain';
      icon = '10d';
      break;
    case 66:
      description = 'Freezing light rain';
      icon = '09d';
      break;
    case 67:
      description = 'Freezing heavy rain';
      icon = '10d';
      break;
    case 71:
      description = 'Slight snow fall';
      icon = '13d';
      break;
    case 73:
      description = 'Moderate snow fall';
      icon = '13d';
      break;
    case 75:
      description = 'Heavy snow fall';
      icon = '13d';
      break;
    case 77:
      description = 'Snow grains';
      icon = '13d';
      break;
    case 80:
      description = 'Slight rain showers';
      icon = '09d';
      break;
    case 81:
      description = 'Moderate rain showers';
      icon = '09d';
      break;
    case 82:
      description = 'Violent rain showers';
      icon = '10d';
      break;
    case 85:
      description = 'Slight snow showers';
      icon = '13d';
      break;
    case 86:
      description = 'Heavy snow showers';
      icon = '13d';
      break;
    case 95:
      description = 'Thunderstorms';
      icon = '11d';
      break;
    case 96:
      description = 'Thunderstorms with slight hail';
      icon = '11d';
      break;
    case 99:
      description = 'Thunderstorms with heavy hail';
      icon = '11d';
      break;
    default:
      description = 'Unknown';
      icon = 'unknown';
      break;
  }
  return { icon, description };
};

export default translateWeatherCode;
