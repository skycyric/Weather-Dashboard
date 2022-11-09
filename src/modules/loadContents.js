import toggleDarkMode from './toggle';

const displayContents = () => {
  document.getElementById('loader').style.display = 'none';

  document.getElementById('main-section').style.display = 'block';
};

const loadContents = () => {
  setTimeout(displayContents, 5000);
  toggleDarkMode();
};

export default loadContents;
