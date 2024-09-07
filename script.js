const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const errorMessage = document.getElementById('error-message');

loginButton.addEventListener('click', (e) => {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// Validasi input
	if (username === '' || password === '') {
		errorMessage.textContent = 'Username dan password harus diisi!';
		return;
	}

	// Proses login (contoh)
	if (username === 'nabil' && password === '123456') {
		alert('Login berhasil!');
		// Redirect ke halaman lain
		window.location.href = 'index2.html';
	} else {
		errorMessage.textContent = 'Username atau password salah!';
	}
});