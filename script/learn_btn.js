    // Define event descriptions
const eventDescriptions = {
    "Champions League Final": "The Champions League Final is the pinnacle of European club football, where the continent's top teams battle it out for glory.",
    "Wimbledon": "Wimbledon is the oldest tennis tournament in the world and is widely regarded as the most prestigious.",
    "European Professional Club Rugby Finals": "The European Professional Club Rugby Finals feature the top rugby clubs from across Europe competing for the coveted title."
};

const maps = {
    "Champions League Final": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.665922609881!2d-0.2821926237612022!3d51.55602467182435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761181d57a876d%3A0xa64f9f185de8e097!2sWembley%20Stadium!5e0!3m2!1sen!2suk!4v1715467782673!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    "Wimbledon": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39802.8495878964!2d-0.26504942533768644!3d51.4273395793118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487608b7738a00c5%3A0x260eae2ec8a63d71!2sWimbledon%2C%20London!5e0!3m2!1sen!2suk!4v1715467948308!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    "European Professional Club Rugby Finals": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.036463455968!2d-0.06879802375791501!3d51.604220471835426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761e98d5d88ec3%3A0x572dd66a0e5f79bf!2sTottenham%20Hotspur%20Stadium!5e0!3m2!1sen!2suk!4v1715467996014!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
}

// Function to handle click event for showing more info
function showEventInfo(eventName, eventImageSrc) {
    localStorage.setItem('eventName', eventName);
    localStorage.setItem('eventImageSrc', eventImageSrc);
    localStorage.setItem('eventDescription', eventDescriptions[eventName]); // Get event description based on eventName
    localStorage.setItem('eventMapSrc', maps[eventName]); // Get event map based on eventName
    window.location.href = "/pages/learnMorePage.html";
}
