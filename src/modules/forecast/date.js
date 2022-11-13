import moment from 'moment/moment';

const createDate = () => {
  const currentTimeAndDate = moment().format('MMMM Do YYYY');
  const date = document.getElementById('current-date');
  date.textContent = currentTimeAndDate;
};

createDate();

const currentDay = moment().format('dddd');

export default currentDay;
