import moment from 'moment/moment';

const createDate = () => {
  const currentDate = moment().format('MMMM Do YYYY');
  const date = document.getElementById('current-date');
  date.textContent = currentDate;
};

createDate();

export const createTime = () => {
  const currentTime = moment().format('LT');
  const currTime = document.getElementById('current-time');
  currTime.textContent = currentTime;
};

const currentDay = moment().format('dddd');

export default currentDay;
