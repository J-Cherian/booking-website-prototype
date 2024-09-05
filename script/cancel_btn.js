document.addEventListener('DOMContentLoaded', function() {
    const cancelButton = document.getElementById('cancelBtn');
    cancelButton.addEventListener('click', function() {
        const confirmed = confirm("Are you sure you want to cancel?");
        if (confirmed) {
            // Delete booking details from local storage
            localStorage.removeItem('bookingDetails');
            window.location.href = "/pages/searchPage.html";
        }
    });
});
