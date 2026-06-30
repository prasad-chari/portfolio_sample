// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Filter Tabs Functionality
const tabs = document.querySelectorAll('.tab');
const projects = document.querySelectorAll('.project-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const category = tab.dataset.category;
    projects.forEach(card => {
      if (category === "All" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Copy Email to Clipboard
const emailElement = document.querySelector('#email');
emailElement.addEventListener('click', () => {
  navigator.clipboard.writeText(emailElement.textContent);
  alert("Email copied to clipboard!");
});

// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Load saved preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});
