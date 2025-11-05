/* ===========================
   KL Digital Main JS
   =========================== */

// === PARTICLES INIT ===
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00b4d8" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00b4d8",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// === THEME TOGGLE ===
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// === SERVICE CARD ANIMATION ===
document.querySelectorAll(".service").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", () => {
  /* === 1. Theme Toggle === */
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  const currentTheme = localStorage.getItem("theme");

  // Load saved theme
  if (currentTheme === "light") {
    body.setAttribute("data-theme", "light");
    toggleBtn.textContent = "🌙";
  } else {
    body.removeAttribute("data-theme");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "light") {
      body.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
    } else {
      body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
    }
  });

  /* === 2. Animated Tagline === */
  const tagline = document.getElementById("animated-tagline");
  const phrases = [
    "Innovating your digital world...",
    "Design. Develop. Dominate.",
    "Smart tech for bold creators.",
    "Turning ideas into reality."
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    tagline.textContent = currentPhrase.substring(0, charIndex);

    if (!deleting && charIndex < currentPhrase.length) {
      charIndex++;
      setTimeout(typeEffect, 70);
    } else if (deleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 35);
    } else {
      deleting = !deleting;
      if (!deleting) phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 1000);
    }
  }
  typeEffect();

  /* === 3. Scroll Fade Animation === */
  const fadeEls = document.querySelectorAll(".fade-in");

  function revealOnScroll() {
    fadeEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) el.classList.add("visible");
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* === 4. Mobile Menu Toggle === */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  /* === 5. WhatsApp Floating Button === */
  const whatsapp = document.createElement("a");
  whatsapp.id = "whatsapp-btn";
  whatsapp.href = "https://wa.me/27710000000"; // replace with your number
  whatsapp.target = "_blank";
  whatsapp.innerHTML = "💬";
  document.body.appendChild(whatsapp);
});

/* ===========================
   6. Particles Background Config
   =========================== */

window.onload = () => {
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80 },
        color: { value: "#ffd700" },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: 3 },
        line_linked: {
          enable: true,
          distance: 120,
          color: "#ffd700",
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          out_mode: "bounce"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          grab: { distance: 150, line_linked: { opacity: 0.5 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }
};
