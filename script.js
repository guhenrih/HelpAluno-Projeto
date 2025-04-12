// Persistência do modo escuro usando localStorage
const themeToggle = document.getElementById('theme-toggle');
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

// Aplica o tema salvo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

// Alterna o modo claro/escuro e persiste a escolha
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  }
});

// Alterna a exibição do menu em dispositivos mobile
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
