import moment from 'moment/moment';

const getStartDate = () => moment().format('L');

const getEndDate = () => moment().add(7, 'days').calendar();

const formatDate = (data) => {
  const formattedDate = data.replace(/\//g, '-');
  const dateArray = formattedDate.split('-');
  return `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`;
};

export { getStartDate, getEndDate, formatDate };
