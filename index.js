
 document.addEventListener("DOMContentLoaded", () => {

  // hamburger menu 
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');

  hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show')
 // Toggle between ☰ and ✖
    hamburgerBtn.innerHTML = navLinks.classList.contains('show') ? '&times;' : '&#9776;';
})
 
// hero particles animation 
  tsParticles.load("hero-particles", {
     fullScreen: { enable: false },
    particles: {
      number: {
        value: 50,
        density: { enable: true, area: 800 }
      },
      color: { value: "#fff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.7,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "bottom",
        outMode: "out"
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: { onhover: { enable: false } }
    },
    retina_detect: true
  });

  // services particle animation
   tsParticles.load("services-particles", {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
      number: {
        value: 60,
        density: { enable: true, area: 800 }
      },
      color: {
        value: "#011222" // dark gray/black circles
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.4,
        random: true
      },
      size: {
        value: 2.5,
        random: true
      },
      move: {
        enable: true,
        speed: 0.3,
        direction: "none",
        outModes: {
          default: "out"
        }
      }
    }
  });


 })