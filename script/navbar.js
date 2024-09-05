document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const userData = JSON.parse(localStorage.getItem('user'));
    const testUserData = JSON.parse(localStorage.getItem('testUser'));
    const isTestUserLoggedIn = localStorage.getItem('isTestUserLoggedIn');

    if (userData || (testUserData && isTestUserLoggedIn)) {
        // If user is logged in or testUser is logged in, show the account and logout links
        const accountItem = document.getElementById('accountItem');
        const logoutItem = document.getElementById('logoutItem');
        accountItem.style.display = 'block';
        logoutItem.style.display = 'block';
    } else {
        // If user is not logged in, show signup and login links
        const signupItem = document.getElementById('signupItem');
        const loginItem = document.getElementById('loginItem');
        signupItem.style.display = 'block';
        loginItem.style.display = 'block';
    }

    // Add event listener to the logout link
    const logoutLink = document.getElementById('logoutItem').querySelector('.nav-link');
    logoutLink.addEventListener('click', function() {
        // Call the logout function
        logout();
    });
});

// Logout function
function logout() {
    const userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
    const testUserLoggedIn = JSON.parse(localStorage.getItem('isTestUserLoggedIn'));

    // Remove bookingDetails only if a user is logged in
    if (userLoggedIn) {
        localStorage.removeItem('bookingDetails'); // Remove the key storing user details
        localStorage.removeItem('user'); // Remove user data
        localStorage.setItem('userLoggedIn', false); // Update userLoggedIn flag
    }

    // Remove bookingDetails only if a test user is logged in
    if (testUserLoggedIn === true) { // Explicitly check if testUserLoggedIn is true
        localStorage.removeItem('bookingDetails'); // Remove the key storing testUser details
        localStorage.removeItem('testUser'); // Remove test user data
        localStorage.setItem('isTestUserLoggedIn', false); // Update testUserLoggedIn flag
    }

    // Hide the account and logout items after logout
    const accountItem = document.getElementById('accountItem');
    const logoutItem = document.getElementById('logoutItem');
    const signupItem = document.getElementById('signupItem');
    const loginItem = document.getElementById('loginItem');
    accountItem.style.display = 'none';
    logoutItem.style.display = 'none';
    signupItem.style.display = 'block';
    loginItem.style.display = 'block';

    // Redirect to the login page after logout
    window.location.href = "/pages/loginPage.html";
}
