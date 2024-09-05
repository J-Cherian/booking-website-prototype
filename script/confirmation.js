function displayBookingDetails() {

    const eventName = localStorage.getItem('eventName');
    const eventImageSrc = localStorage.getItem('eventImageSrc');

    // Set the event name and image source if they exist in localStorage
    if (eventName && eventImageSrc) {
        document.getElementById('eventName').textContent = eventName;
        document.getElementById('eventImage').src = eventImageSrc;
    }
    
    // Retrieve booking details from local storage
    const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));

    // Check if booking details exist
    if (bookingDetails) {
        // Display booking details on the page
        const bookingDetailsContainer = document.getElementById('bookingDetails');
        bookingDetailsContainer.innerHTML = `
            <p><strong>Name:</strong> ${bookingDetails.name}</p>
            <p><strong>Number of Tickets:</strong> ${bookingDetails.tickets}</p>
            <p><strong>Date:</strong> ${bookingDetails.date}</p>
            <p><strong>Time:</strong> ${bookingDetails.time}</p>
        `;
    } else {
        // If booking details don't exist, display a message
        const bookingDetailsContainer = document.getElementById('bookingDetails');
        bookingDetailsContainer.innerHTML = '<p>No booking details found.</p>';
    }
}

// Call the function to display booking details when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayBookingDetails();
});
