window.onload = function() {
    // Get the current hour
    var hour = new Date().getHours();

    // Get the greeting based on the time of the day
    var greeting;
    if (hour >= 5 && hour < 12) {
        greeting = "Good morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    // Update the text in the HTML
    document.getElementById("greeting").textContent = greeting;
};