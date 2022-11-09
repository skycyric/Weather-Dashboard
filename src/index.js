import './styles/style.css';
import fetchAirPollutionData from './modules/airQualityData';
import createCurrentWeather from './modules/currentWeather/createCurrentWeather';
import getDates from './modules/forecast/chart';

window.onload = () => {
  fetchAirPollutionData();
  createCurrentWeather();
  getDates();
  const displayContents = () => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main-section').style.display = 'block';
  };
  const loadContents = () => {
    setTimeout(displayContents, 5000);
  };
  loadContents();
};
