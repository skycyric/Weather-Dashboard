import { cityURL, appID } from './apiURL';
import { search, autoComplete } from './autocomplete';
import loadContents from './loadContents';

let city = JSON.parse(localStorage.getItem('city')) || 'London';

search.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (search.value === '') {
      return;
    }
    city = search.value.trim();
    localStorage.setItem('city', JSON.stringify(city));
    const cells = [...document.querySelectorAll('.slide')];
    cells.forEach((cell) => (cell.innerHTML = ''));
    loadContents();
  } else {
    autoComplete();
  }
});

const fetchCityData = async () => {
  const response = await fetch(`${cityURL}${city}${appID}`)
    .then((res) => res.json())
    .then((data) => {
      const { lat, lon, country, name } = data[0];
      return {
        lat,
        lon,
        country,
        name,
      };
    })
    .catch(() => {
      const errorMsg = document.getElementById('error');
      errorMsg.textContent =
        'Please, enter a correct city or a starting letter...';
      errorMsg.style.display = 'block';
      document.querySelector('main').style.display = 'none';
    });
  search.value = '';
  return response;
};

export default fetchCityData;
