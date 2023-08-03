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

let switchButton = document.getElementById('image-switch-button');
let robotImages = document.querySelectorAll('.chat-circle_robot, .chat-box-welcome_robot, .chat-box-overlay_robot');

let imageSources = ["../icons/cloud.png", "../icons/human.png", "../icons/soundwave.png"];
let names = ["雲寶寶", "科幻風", "聲波"];
let index = 0;

// 初始化所有的 robotImages 的圖片源
robotImages.forEach(function (robotImage) {
  robotImage.src = imageSources[index];
});

// 初始化按鈕文字
switchButton.textContent = names[index];

// 添加事件監聽器
switchButton.addEventListener('click', function () {
  index = (index + 1) % imageSources.length; // 更新索引
  robotImages.forEach(function (robotImage) {
    // 切換圖片源
    robotImage.src = imageSources[index];
  });
  // 切換按鈕文字
  switchButton.textContent = names[index];
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
