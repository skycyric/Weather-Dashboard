import moment from 'moment/moment';

const getStartDate = () => moment().format('L');

const getEndDate = () => moment().add(7, 'days').calendar();

const getDaysOfWeek = (num) => {
  let day = '';
  switch (num) {
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
    case 0:
      day = 'Sunday';
      break;
    default:
      day = '';
      break;
  }
  return day;
};

const convertDaysOfWeek = (str) => {
  const date = moment(str);
  const dayNum = date.day();
  const dayOfWeek = getDaysOfWeek(dayNum);
  return dayOfWeek;
};

const formatDate = (data) => {
  const formattedDate = data.replace(/\//g, '-');
  const dateArray = formattedDate.split('-');
  return `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`;
};

export {
  getStartDate, getEndDate, formatDate, convertDaysOfWeek,
};
