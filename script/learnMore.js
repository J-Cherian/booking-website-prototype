document.addEventListener('DOMContentLoaded', function() {
    const eventName = localStorage.getItem('eventName');
    const eventImageSrc = localStorage.getItem('eventImageSrc');
    const eventDescription = localStorage.getItem('eventDescription'); // Retrieve event description

    // Set the event name, image source, and description if they exist in localStorage
    if (eventName && eventImageSrc && eventDescription) {
        document.getElementById('eventName').textContent = eventName;
        document.getElementById('eventImage').src = eventImageSrc;
        document.getElementById('eventDescription').textContent = eventDescription; // Set event description
    }

    const eventMapSrc = localStorage.getItem('eventMapSrc');
    if (eventMapSrc) {
        document.getElementById('eventMap').innerHTML = decodeURIComponent(eventMapSrc);
    }
});

