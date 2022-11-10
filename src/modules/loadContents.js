import toggleDarkMode from './toggle';

const displayContents = () => {
  document.getElementById('loader').style.display = 'none';

  document.querySelector('header').style.display = 'block';

  document.getElementById('main-section').style.display = 'block';

  document.querySelector('.carousel').style.visibility = 'visible';
};

const loadContents = () => {
  setTimeout(displayContents, 5000);
  toggleDarkMode();
};

export default loadContents;
