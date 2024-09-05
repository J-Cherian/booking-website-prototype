// Retrieve user information from localStorage
const user = JSON.parse(localStorage.getItem('user'));
const testUser = JSON.parse(localStorage.getItem('testUser'));

// Check if testUser or user is logged in
if (testUser && localStorage.getItem('isTestUserLoggedIn')) {
    document.getElementById('username').textContent = testUser.username;
    document.getElementById('email').textContent = testUser.email;
} else if (user && localStorage.getItem('userLoggedIn')) {
    document.getElementById('username').textContent = user.username;
    document.getElementById('email').textContent = user.email;
}

// Reset password form submission
document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const currentPassword = document.getElementById('currentPassword').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validation checks
    if (!currentPassword || !newPassword || !confirmPassword) {
        alert("Please fill in all fields");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("New Password and Confirm New Password do not match");
        return;
    }

    // Check if testUser is logged in
    if (testUser && localStorage.getItem('isTestUserLoggedIn')) {
        // Check if current password matches testUser's password
        if (currentPassword === testUser.password) {
            // Update testUser's password
            testUser.password = newPassword;
            localStorage.setItem('testUser', JSON.stringify(testUser));
            alert("Password reset successfully");
            document.getElementById('resetPasswordModal').modal('hide');
        } else {
            alert("Current Password is incorrect");
        }
    } else if (user && localStorage.getItem('userLoggedIn')) { // Check if user is logged in
        // Check if current password matches user's password
        if (currentPassword === user.password) {
            // Update user's password
            user.password = newPassword;
            localStorage.setItem('user', JSON.stringify(user));
            alert("Password reset successfully");
            document.getElementById('resetPasswordModal').modal('hide');
        } else {
            alert("Current Password is incorrect");
        }
    } else {
        alert("You are not logged in");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function() {
        var toastEl = document.getElementById('bookingToast');
        var toast = new bootstrap.Toast(toastEl);
        toast.show();
    });
});