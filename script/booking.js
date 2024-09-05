document.addEventListener('DOMContentLoaded', function() {

    const eventName = localStorage.getItem('eventName');
    const eventImageSrc = localStorage.getItem('eventImageSrc');

    // Set the event name and image source if they exist in localStorage
    if (eventName && eventImageSrc) {
        document.getElementById('eventName').textContent = eventName;
        document.getElementById('eventImage').src = eventImageSrc;
    }
    
    // Function to handle form submission
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Form submitted"); // Check if form submission is triggered

        const name = document.getElementById('name').value.trim();
        const tickets = document.getElementById('tickets').value.trim();
        const date = document.getElementById('date').value.trim();
        const time = document.getElementById('time').value.trim();
        console.log(name, tickets, date, time); // Check form input values

        // Store form data in local storage
        const bookingDetails = {
            name: name,
            tickets: tickets,
            date: date,
            time: time
        };
        localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
        console.log("Booking details stored:", bookingDetails); 

        alert("You have successfully booked your event");
        // Redirect to confirmation page
        window.location.href = "/pages/confirmationPage.html"; 
    });
});
