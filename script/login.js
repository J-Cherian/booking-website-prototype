function login(event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    // Validation checks    
    if (!username || !password) {
        alert("Please fill in all fields");
        return;
    }

    // Check if the entered username and password match the admin credentials
    const testUser = { username: 'testUser', email: 'test@user.com', password: '123' }; 
    if (username === testUser.username && password === testUser.password) {
        // Store testUser information in localStorage
        localStorage.setItem('testUser', JSON.stringify(testUser)); // Store testUser data
        localStorage.setItem('isTestUserLoggedIn', true); // Set isTestUserLoggedIn flag
        alert("You have logged in successfully!");
        window.location.href = "/index.html";
        return;
    }

    // Check if the entered username and password match the stored user data
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) {
        alert("Invalid username or password");
        return;
    }

    // Compare entered username and password with stored user data
    if (username === userData.username && password === userData.password) {
        // Store user information in localStorage
        localStorage.setItem('user',JSON.stringify(userData));
        localStorage.setItem('userLoggedIn', true);
        alert("You have logged in successfully!");
        window.location.href = "/index.html";
    } else {
        alert("Invalid username or password");
    }
}
