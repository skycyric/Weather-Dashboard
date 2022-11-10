import moment from 'moment/moment';

const createDate = () => {
  const currentTimeAndDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  const date = document.getElementById('current-date');
  date.textContent = currentTimeAndDate;
};

setInterval(createDate, 1000);

const currentDay = moment().format('dddd');

export default currentDay;
