let users = [
    { username: 'admin', password: 'Password123!' },
    { username: 'user1', password: 'abc123XYZ@' },
    { username: 'user2', password: 'P@$$w0rd' }
    ];
    
    function validateLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    let user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
    showMessage('User Found.');
    } else {
    showMessage('PASSWORD NOT FOUND');
    }
    }
    
    function addUser() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    let userExists = users.some(u => u.username === username);
    
    if (password.length < 8) {
    showMessage('password must have at least 8 characters');
    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\W)(?=.*\d)/.test(password)) {
    showMessage('Password must contain at least one uppercase letter, one lowercase letter, one symbols, and one number.');
    } else if (userExists) {
    showMessage('User already exists.');
    } else {
    users.push({ username, password });
    showMessage('User added successfully');
    }
    }
    
    function clearForm() {
    document.getElementById('loginForm').reset();
    showMessage('');
    }
    
    function showMessage(message) {
    document.getElementById('message').textContent = message;
    }