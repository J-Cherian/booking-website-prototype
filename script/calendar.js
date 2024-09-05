document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var today = new Date(); // Get today's date
    var todayStr = today.toISOString().split('T')[0]; // Format today's date as 'yyyy-mm-dd'

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialDate: todayStr,
        editable: true,
        selectable: true,
        businessHours: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: [],
        eventClick: function(info) {
            info.jsEvent.preventDefault(); // don't let the browser navigate
            const eventDate = info.event.extendedProps.eventDate; // Access the extended property
            const eventTime = info.event.extendedProps.eventTime; // Access the extended property
            const eventName = info.event.title; // Get the eventName directly from the event title
            alert(`Event Name: ${eventName}\nDate: ${eventDate}\nTime: ${eventTime}`);
        },
        eventContent: function(arg) {
            return {
                html: `<div>${arg.event.title}<br>${formatTime(arg.event.start)}</div>`
            };
        }
    });

    calendar.render();

    // Retrieve booking details from localStorage
    const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
    const eventName = localStorage.getItem('eventName');

    // If booking details exist, add the event to the calendar
    if (bookingDetails && bookingDetails.date && bookingDetails.time) {
        const eventDateTime = `${bookingDetails.date}T${bookingDetails.time}`;
        calendar.addEvent({
            title: eventName, // Set eventName as the title
            start: eventDateTime,
            backgroundColor: 'white', // Set the background color of the event
            extendedProps: {
                eventDate: bookingDetails.date, // Store date as an extended property
                eventTime: bookingDetails.time // Store time as an extended property
            }
        });
    }

    // Function to format time with 'am' and 'pm'
    function formatTime(date) {
        return new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true // Use 12-hour clock
        }).format(date);
    }
});
