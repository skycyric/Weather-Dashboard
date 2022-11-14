import './styles/style.css';
import loadContents from './modules/loadContents';

const displayContents = () => {
  document.body.style.display = 'block';
};

window.onload = () => {
  setTimeout(displayContents, 500);
  loadContents();
};
