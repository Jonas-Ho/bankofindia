document.addEventListener('DOMContentLoaded', () => {
  alert('Disclaimer: This website is for a fictional institution and is for educational purposes only. All data, including account information, balances, and transactions, is fictional, and not to be taken seriously, nor is it connected to any financial institution whatsoever. Please do not input any real personal or financial data.');
});

// Login Form Handler
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: document.getElementById('username').value,
                    password: document.getElementById('password').value
                })
            });
            
            const data = await response.json();
            if (data.success) {
                window.location.href = data.isAdmin ? 'admin-dashboard.html' : 'user-dashboard.html';
            } else {
                alert('Invalid credentials!');
            }
        } catch (error) {
            alert('Connection error!');
        }
    });
}

// Registration Form Handler
const regForm = document.getElementById('registration-form');
if (regForm) {
    regForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: document.getElementById('username').value,
                    password: document.getElementById('password').value
                })
            });
            
            const data = await response.json();
            if (data.success) {
                alert('Registration successful!');
                window.location.href = 'internet-banking.html';
            } else {
                alert(data.message || 'Registration failed');
            }
        } catch (error) {
            alert('Connection error!');
        }
    });
}