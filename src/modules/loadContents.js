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
(function () {
  var INDEX = 0;
  var chat_logs = document.querySelector('.chat-logs');

  function generate_message(msg, type) {
    INDEX++;
    var str = "";
    str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=\"https://image.flaticon.com/icons/svg/145/145867.svg\">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "        <\/div>";
    chat_logs.innerHTML += str;
    chat_logs.scrollTop = chat_logs.scrollHeight;
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#chat-submit").addEventListener('click', function (e) {
      e.preventDefault();
      var msg = document.querySelector("#chat-input").value;
      if (msg.trim() == '') {
        return false;
      }
      generate_message(msg, 'self');
      setTimeout(function () {
        generate_message(msg, 'user');
      }, 1000)

    });

    document.querySelector("#chat-circle").addEventListener('click', function (e) {
      document.querySelector("#chat-circle").style.display = "none";
      document.querySelector(".chat-box").style.display = "flex";
    });

    document.querySelector(".chat-box-toggle").addEventListener('click', function (e) {
      document.querySelector("#chat-circle").style.display = "block";
      document.querySelector(".chat-box").style.display = "none";
    });
  });
})();

export default loadContents;
