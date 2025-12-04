// Small interactivity: year filler and an optional theme toggle
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');

    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '☀️';
      }
    });
  }
});
