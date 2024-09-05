document.addEventListener('DOMContentLoaded', function() {
    const amendButton = document.getElementById('amendBtn');
    amendButton.addEventListener('click', function() {
        const confirmed = confirm("Are you sure you want to amend the booking?");
        if (confirmed) {
            window.location.href = "/pages/bookingPage.html";
        }
    });
});
