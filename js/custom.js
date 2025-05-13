let lastScrollTop = 0;
const header = document.querySelector('header');

// Scroll event to adjust header opacity
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down, decrease opacity
    if (currentScroll > lastScrollTop) {
        header.style.opacity = '0.5'; // Opacity when scrolling down
    } else {
        header.style.opacity = '1'; // Full opacity when scrolling up
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
});

// Ensure particles.js initialization
document.addEventListener("DOMContentLoaded", function () {
    console.log("Particles.js Initialization Started");

    // Initialize particles.js after the DOM is ready
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 1000,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": { "value": "#2C59CA" }, // Set particle color to #2C59CA
            "shape": {
                "type": "circle",
                "stroke": { "width": 1, "color": " #2C59CA" }
            },
            "opacity": {
                "value": 1,
                "random": true
            },
            "size": {
                "value": 2,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 20,
                "color": "#2C59CA", // Set line color to #2C59CA
                "opacity": 70,
                "width": 0.9
            },
            "move": {
                "enable": true,
                "speed": 2
            }
            
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" }
            },
            "modes": {
                "grab": { "distance": 150, "line_linked": { "opacity": 1 } }
            }
        },
        "retina_detect": true
    });
});

// Run particles.js on page load in case the user refreshes
window.addEventListener("load", initParticles);

    // Select the portfolio title
    const portfolioElement = document.querySelector('.portfolio-title');

   