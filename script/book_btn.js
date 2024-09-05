function event1(eventName, eventImageSrc) {
    // Store event details in localStorage
    localStorage.setItem('eventName', eventName);
    localStorage.setItem('eventImageSrc', eventImageSrc);
    // Redirect to booking page
    window.location.href = "/pages/bookingPage.html";
}

function event2(eventName, eventImageSrc) {
    localStorage.setItem('eventName', eventName);
    localStorage.setItem('eventImageSrc', eventImageSrc);
    window.location.href = "/pages/bookingPage.html";
}

function event3(eventName, eventImageSrc) {
    localStorage.setItem('eventName', eventName);
    localStorage.setItem('eventImageSrc', eventImageSrc);
    window.location.href = "/pages/bookingPage.html";
}
