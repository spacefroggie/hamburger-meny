hamburgerIcon.addEventListener('click', () => {
hamburgerIcon.classList.toggle('active');

// Vise/skjule meny
  if (navMenu.style.display === 'block') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'block';
  }
});
