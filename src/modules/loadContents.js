import createCurrentWeather from './currentWeather/createCurrentWeather';
import getNext24HoursChart from './forecast/chart';
import createForecast from './forecast/5DayForecast';
import createDailyInfo from './currentWeather/createDailyInfo';
import setCarousel from './carousel';

const cells = [...document.querySelectorAll('.slide')];
const toggleBtn = document.querySelector('button');
const toggleIcon = document.getElementById('toggle-icon');
toggleIcon.src = '../icons/moon.png';

let temp;

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.className === '') {
    toggleIcon.src = '../icons/moon.png';
    toggleBtn.style.background = '#fff';
    cells.forEach((cell) => (cell.innerHTML = ''));
    loadContents();
  } else {
    toggleIcon.src = '../icons/sun.png';
    toggleBtn.style.background = 'rgb(48, 48, 48)';
    cells.forEach((cell) => (cell.innerHTML = ''));
    loadContents();
  }
});

const loadContents = () => {
  if (document.getElementById('temp-conversion').textContent === '°C') {
    temp = 'fahrenheit';
  } else {
    temp = 'celsius';
  }
  const xValues = [];
  setCarousel();
  createCurrentWeather(temp);
  getNext24HoursChart(xValues, temp);
  createForecast(temp);
  createDailyInfo();
};
// Chatbot
document.getElementById('icon-container').addEventListener('click', () => {
  const chatbot = document.getElementById('chatbot');
  if (chatbot.style.display === 'none') {
    chatbot.style.display = 'block';
  } else {
    chatbot.style.display = 'none';
  }
});


document.querySelector("#chat-form").addEventListener("submit", function (event) {
  event.preventDefault();  // 防止頁面刷新
  let inputElement = document.querySelector("#chat-input");
  let userInput = inputElement.value;
  inputElement.value = "";  // 清空輸入框
  // 接下來，你可以用`userInput`變量來處理用戶的輸入
});

export default loadContents;
