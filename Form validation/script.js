
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');



submitBtn.addEventListener('click', (event) => {
    
    const email=emailInput.value.trim();
    const password=passwordInput.value.trim();
    if (!isValidEmail(email)||!isValidPassword(password)) {
        message.textContent = 'Invalid email or password';
        message.className = 'error';
    } else {
        message.textContent = 'Valid email or password';
        message.className = 'success';
    }
    
});
function isValidEmail(email) {
    return email.includes('@');
}
function isValidPassword(password) {
    return password.length >= 8;
}


