import moment from 'moment/moment';
import fetchWeatherData from '../currentWeather/currentWeatherData';

const currentDay = moment().format('dddd');

const createDate = () => {
  const currentDate = moment().format('MMMM Do YYYY');
  const date = document.getElementById('current-date');
  date.textContent = currentDate;
};

export const convertUnixTime = (num) => {
  const newTime = moment.unix(num).format('LT');

  return newTime;
};

const createTime = async () => {
  const { timezone } = await fetchWeatherData();
  let d = new Date(new Date().getTime() + timezone * 1000);
  let currTime = d.toISOString();
  let formattedTime = moment(currTime).utc().format('LT');
  const time = document.getElementById('current-time');
  time.textContent = formattedTime;
};

setInterval(createTime, 1000);

createDate();

export default currentDay;
