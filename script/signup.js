function signup(event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validation checks
    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return;
    }

    // Create user object
    const user = {
        username: username,
        email: email,
        password: password
    };

    // Save user object to localStorage
    localStorage.setItem('user', JSON.stringify(user)); 

    alert("You have signed up successfully!");

    // Redirect to login page
    window.location.href = "/pages/loginPage.html";
}

function isValidEmail(email) {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
