const signInForm = document.querySelector('.sign-in form');
const signUpForm = document.querySelector('.sign-up form');

signUpForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = signUpForm.querySelector('input[type="text"]').value;
  const email = signUpForm.querySelector('input[type="email"]').value;
  const password = signUpForm.querySelector('input[type="password"]').value;

  try {
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    alert(data.message || data.error);
  } catch (error) {
    alert('Registration failed!');
  }
});

signInForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = signInForm.querySelector('input[type="text"]').value;
  const password = signInForm.querySelector('input[type="password"]').value;

  try {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    alert(data.message || data.error);
  } catch (error) {
    alert('Login failed!');
  }
});
