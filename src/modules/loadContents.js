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
setTimeout(function () {
  element.addClass('enter');
}, 2000);

element.click(openElement);

function openElement() {
  var messages = element.find('.messages');
  var textInput = element.find('.text-box');
  element.find('>i').hide();
  element.addClass('expand');
  element.find('.chat').addClass('enter');
  var strLength = textInput.val().length * 2;
  textInput.keydown(onMetaAndEnter).prop('disabled', false).focus();
  element.off('click', openElement);
  element.find('.header button').click(closeElement);
  element.find('#sendMessage').click(sendNewMessage);
  messages.scrollTop(messages.prop('scrollHeight'));
}

function closeElement() {
  element.find('.chat').removeClass('enter').hide();
  element.find('>i').show();
  element.removeClass('expand');
  element.find('.header button').off('click', closeElement);
  element.find('#sendMessage').off('click', sendNewMessage);
  element.find('.text-box').off('keydown', onMetaAndEnter).prop('disabled', true).blur();
  setTimeout(function () {
    element.find('.chat').removeClass('enter').show()
    element.click(openElement);
  }, 500);
}

async function sendNewMessage() {
  var userInput = $('.text-box');
  var newMessage = userInput.html().replace(/\<div\>|\<br.*?\>/ig, '\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g, '<br>');
  if (!newMessage) return;

  var messagesContainer = $('.messages');

  messagesContainer.append([
    '<li class="self">',
    newMessage,
    '</li>'
  ].join(''));

  userInput.html('');
  userInput.focus();
  messagesContainer.finish().animate({
    scrollTop: messagesContainer.prop('scrollHeight')
  }, 250);

  setTimeout(function () {
    chatLoader.style.display = 'block';
  }, 250);
  // 將使用者輸入的文字轉換成向量
  const vector = await gpt3_embedding(newMessage);

  // 用async函式避免load_database處理太久
  async function myPrompt() {
    const conversation = await load_database();
    const memories = fetch_memories(vector, conversation, 10); //比對文字向量
    const notes = summarize_memories(memories);
    const wholeText = '根據' + notes + '的資訊給出最正確的回應，不要開頭接標點符號：' + newMessage + '。';
    // 串 GPT-3

    const response = await fetch(textApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: wholeText,
        model: textModel,
        temperature: temperature,
        max_tokens: maxTokens,
        top_p: topP,
        frequency_penalty: frequencyPenalty,
        presence_penalty: presencePenalty
      })
    });
    return response.json();
  }

  const data = await myPrompt();
  const message = data.choices[0].text;

  messagesContainer.append([
    '<li class="other">',
    message,
    '</li>'
  ].join(''));
  chatLoader.style.display = 'none';

  messagesContainer.finish().animate({
    scrollTop: messagesContainer.prop('scrollHeight')
  }, 250);
}



function responseMessage(message) {
  var messagesContainer = $('.messages');
  messagesContainer.append([
    '<li class="other">',
    message,
    '</li>'
  ].join(''));
  messagesContainer.finish().animate({
    scrollTop: messagesContainer.prop('scrollHeight')
  }, 250);
}

function onMetaAndEnter(event) {
  if ((event.metaKey || event.ctrlKey) && event.keyCode == 13) {
    sendNewMessage();
  }
}

// 讀取文字向量資料庫
async function load_database() {
  const filesResponse = await fetch('https://api.github.com/repos/skycyric/database/git/trees/main?recursive=1');
  const filesTree = await filesResponse.json();
  const files = filesTree.tree.filter(file => file.type === 'blob' && file.path.startsWith('database/') && file.path.endsWith('.json')).map(file => file.path.split('/')[1]);
  const filePromises = files.map(async file => {
    const response = await fetch(`https://raw.githubusercontent.com/skycyric/database/main/database/${file}`);
    const data = await response.json();
    return data;
  });
  const result = await Promise.all(filePromises);
  const ordered = result.sort((a, b) => a.id - b.id);
  return ordered;
}

// 將輸入的文字轉換成向量
const gpt3_embedding = async (content) => {
  const text = content.replaceAll(/[^\x00-\x7F]/g, '');
  const response = await fetch(`https://api.openai.com/v1/embeddings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: emmbedModel,
      input: text,
    }),
  });
  const data = await response.json();
  const vector = data['data'][0]['embedding'];
  return vector;
};

// 將轉換的文字向量與資料庫比對
function fetch_memories(vector, logs, count) {
  let scores = [];
  for (let i of logs) {
    if (JSON.stringify(vector) === JSON.stringify(i['vector'])) {
      continue;
    }
    let score = similarity(i['vector'], vector);
    i['score'] = score;
    scores.push(i);
  }
  let ordered = scores.sort((a, b) => b['score'] - a['score']);
  try {
    ordered = ordered.slice(0, count);
    return ordered;
  } catch (e) {
    return ordered;
  }
}

// 將比對完的文字整理總結後輸出
function summarize_memories(memories) {
  memories = memories.sort((a, b) => a.id - b.id);
  let block = '';
  let identifiers = [];
  for (const mem of memories) {
    block += mem.message + '\n\n';
    identifiers.push(mem.id);
  }
  block = block.trim();
  let notes = block;
  return notes;
}

// 相似性比對
function similarity(v1, v2) {
  const dotProduct = v1.reduce((acc, cur, i) => acc + cur * v2[i], 0);
  const normProduct = Math.hypot(...v1) * Math.hypot(...v2);
  return dotProduct / normProduct;
}

export default loadContents;
