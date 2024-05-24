window.onload = function() {
    
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
        const scrollThreshold = window.innerHeight * 0.8; // Change 0.5 to adjust when to trigger the change

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





// -----------------{game code}----------------------------

// script.js
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(`Canvas resized to: ${canvas.width}x${canvas.height}`);
}

resizeCanvas();

let particles = [];
const numParticles = 100;

function init() {
    particles = [];
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }
    console.log("Particles initialized:", particles);
}

function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.radius = 3;
}

Particle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
}

Particle.prototype.update = function(mouse) {
    if (mouse.x !== null && mouse.y !== null) {
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
            this.x += dx / distance * 3;
            this.y += dy / distance * 3;
        }
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
    if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
}

function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'; // Increased opacity
                ctx.lineWidth = 1; // Increased line width
                ctx.stroke();
            }
        }
    }
}

let mouse = {
    x: null,
    y: null
};

canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

canvas.addEventListener('mouseleave', function() {
    mouse.x = null;
    mouse.y = null;
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update(mouse);
        p.draw();
    });
    connectParticles();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', function() {
    resizeCanvas();
    init();
});

init();
animate();
