const toggleDarkMode = () => {
  const toggleBtn = document.querySelector('button');
  const toggleIcon = document.getElementById('toggle-icon');

  toggleIcon.src = '../icons/moon.png';

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.className === '') {
      toggleIcon.src = '../icons/moon.png';
      toggleBtn.style.background = '#ebebeb';
    } else {
      toggleIcon.src = '../icons/sun.png';
      toggleBtn.style.background = '#000';
    }
  });
};

export default toggleDarkMode;
