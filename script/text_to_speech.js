$(document).ready(function() {
    // Function to speak event details
    $('.speakIcon').click(function() {
        var eventId = $(this).data('event');
        speakEventDetails(eventId);
    });

    $('.allSpeakIcon').click(function() {
        speakPageContent();
    });

    $('.speakBookingIcon').click(function() {
        speakBookingContent();
    });

    $('.speakBookingDetailsIcon').click(function() {
        speakBookingDetails();
    });

    $('.speakFAQ').click(function() {
        speakFAQContent();
    });

    function speakEventDetails(eventId) {
        var eventDetails = $('#detailsContainer' + eventId).text().trim();
        speakText(eventDetails);
    }

    function speakPageContent() {
        var containerContent = $('.container').clone(); 
        containerContent.find('script').remove(); 
        containerContent = containerContent.text().trim(); 
        speakText(containerContent);
    }    

    function speakBookingContent() {
        var bookingContent = $('.booking-container').text().trim();
    
        speakText(bookingContent);
    }

    function speakBookingDetails() {
        var bookingDetailsContent = $('#bookingDetails').text().trim();
    
        speakText(bookingDetailsContent);
    }

    function speakFAQContent() {
        var faqContent = $('.accordion-body').map(function() {
            return $(this).text().trim();
        }).get().join('. ');

        speakText(faqContent);
    }

    function speakText(text) {
        const message = new SpeechSynthesisUtterance();
        message.text = text;
        const speechSynthesis = window.speechSynthesis;
        speechSynthesis.speak(message);
    }
});
