import createCurrentWeather from './currentWeather/createCurrentWeather';
import getNext24HoursChart from './forecast/chart';
import createForecast from './forecast/5DayForecast';
import createDailyInfo from './currentWeather/createDailyInfo';
import setCarousel from './carousel';
import initializeChatBot from './chatbot';

const cells = [...document.querySelectorAll('.slide')];
const toggleBtn = document.querySelector('button');
const toggleIcon = document.getElementById('toggle-icon');
toggleIcon.src = '../icons/moon.png';
var audioElement = document.getElementById('volumn'); // 假設音頻元素的ID是'Volumn'
var volumeButton = document.querySelector('.chat-box-volume');
var closeButton = document.querySelector('.chat-box-toggle');

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

// 音量控制的事件監聽器
volumeButton.addEventListener('click', function () {
  let volumeIcon = volumeButton.querySelector('i');
  if (audioElement.paused) {
    audioElement.play();
    volumeIcon.textContent = 'volume_up';
  } else {
    audioElement.pause();
    volumeIcon.textContent = 'volume_off';
  }
});

// 關閉按鈕的事件監聽器
closeButton.addEventListener('click', function () {
  audioElement.pause();
  audioElement.currentTime = 0;
});

document.getElementById('volumeIcon_welcom').addEventListener('click', function () {
  if (this.textContent === 'volume_up') {
    this.textContent = 'volume_off';
  } else {
    this.textContent = 'volume_up';
  }
});

document.getElementById('volumeIcon_chat').addEventListener('click', function () {
  if (this.textContent === 'volume_up') {
    this.textContent = 'volume_off';
  } else {
    this.textContent = 'volume_up';
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
  initializeChatBot();
};

export default loadContents;
