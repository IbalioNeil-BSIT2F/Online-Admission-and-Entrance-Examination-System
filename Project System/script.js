// script.js
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');

loginTab.addEventListener('click', () => {
  loginTab.classList.add('active');
  registerTab.classList.remove('active');
  alert('Switching to login form (not implemented).');
});

registerTab.addEventListener('click', () => {
  registerTab.classList.add('active');
  loginTab.classList.remove('active');
});

const form = document.getElementById('registerForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  alert(`Registered successfully with email: ${email}`);
  form.reset();
});

const sidebar = document.getElementById('sidebar');

    sidebar.addEventListener('mouseenter', () => {
      sidebar.classList.add('expanded');
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove('expanded');
    });
