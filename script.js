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

    closeNav();
};

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("name").textContent = ""; 
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("name").textContent = "Brandon Winecoor"; 
}


function siteTitle1() {
    document.getElementById(".site-title1").style.display = "block";
}

function siteTitle1() {
    document.getElementById(".site-title1").style.display = "block";
}


// Function to change skillsimg background image based on scroll
document.addEventListener('DOMContentLoaded', function() {
    const skillsImg = document.getElementById('skillsimg');

    // Event listener for scroll
    window.addEventListener('scroll', function() {
        // Get the scroll position
        const scrollPosition = window.scrollY;

        // Define the scroll threshold to trigger the class change
        const scrollThreshold = window.innerHeight * 0.5; // Change 0.5 to adjust when to trigger the change

        // Check if scroll position is below the scroll threshold
        if (scrollPosition >= scrollThreshold) {
            // Add a new class to skillsimg with updated background image
            skillsImg.classList.add('skillsimg2');
        } else {
            // Remove the added class to revert to the original background image
            skillsImg.classList.remove('skillsimg2');
        }
    });
});
