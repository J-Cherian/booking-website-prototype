$(document).ready(function() {
    var events = [
        "Champions League Final",
        "Wimbledon",
        "European Professional Club Rugby Finals"
    ];

    $("#searchInput").autocomplete({
        source: events,
        select: function(event, ui) {
            var selectedEvent = ui.item.value;
            $('.details-container h2').removeClass('highlight'); // Remove highlight from all h2 tags
            $('#detailsContainer' + (events.indexOf(selectedEvent) + 1)).find('h2').addClass('highlight'); // Add highlight to selected event's h2 tag
        }
    });
});
