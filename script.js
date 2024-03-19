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


// document.addEventListener("DOMContentLoaded", function() {
//     var element = document.getElementById('element');
//     var originalClass = 'navbar';
//     var switchedClass = 'navbar2';
//     var scrollThreshold = 500; // Adjust this value according to your needs
    
//     window.addEventListener('scroll', function() {
//       if (window.scrollY > scrollThreshold && !element.classList.contains(switchedClass)) {
//         element.classList.remove(originalClass);
//         element.classList.add(switchedClass);
//       } else if (window.scrollY <= scrollThreshold && !element.classList.contains(originalClass)) {
//         element.classList.remove(switchedClass);
//         element.classList.add(originalClass);
//       }
//     });
//   });

function siteTitle1() {
    document.getElementById(".site-title1").style.display = "block";
}
