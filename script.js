// Small interactivity: mobile nav, theme toggle, year + contact form
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('primary-menu');
  const themeToggle = document.getElementById('theme-toggle');
  const year = document.getElementById('year');

  // nav toggle for small screens
  if(navToggle){
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('show');
    });
  }

  // theme toggle - toggles light/dark by setting data-theme attribute on body
  if(themeToggle){
    const saved = localStorage.getItem('theme');
    if(saved === 'light') document.documentElement.setAttribute('data-theme','light');

    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if(isLight) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme','dark');
        themeToggle.textContent = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        themeToggle.textContent = '☀️';
      }
    });
  }

  // fill current year
  if(year) year.textContent = new Date().getFullYear();

  // contact form - small client-side validation simulation
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');

      if(!name.value.trim() || !email.value.trim() || !message.value.trim()){
        status.textContent = 'Please fill all fields before sending.';
        status.style.color = 'crimson';
        return;
      }

      status.textContent = 'Sending message…';
      status.style.color = '';

      // Simulate async send
      setTimeout(() => {
        status.textContent = 'Thanks! Your message was sent.';
        status.style.color = 'limegreen';
        form.reset();
      }, 900);
    });
  }
});
