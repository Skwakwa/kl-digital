// ======================
// PRELOADER
// ======================
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.transition = 'opacity 0.6s ease';
  preloader.style.opacity = '0';
  setTimeout(() => preloader.style.display = 'none', 600);
});

// ======================
// TYPED / ROTATING TAGLINE
// ======================
const taglines = ["Website Creation", "Analytics Engineer", "Laptop & PC Repairs"];
let taglineIndex = 0;
let charIndex = 0;
const taglineEl = document.getElementById('animated-tagline');

function typeTagline() {
  taglineEl.textContent = taglines[taglineIndex].substring(0, charIndex + 1);
  charIndex++;
  if (charIndex > taglines[taglineIndex].length) {
    setTimeout(() => {
      charIndex = 0;
      taglineIndex = (taglineIndex + 1) % taglines.length;
      typeTagline();
    }, 1500);
    return;
  }
  setTimeout(typeTagline, 100);
}

typeTagline();

// ======================
// FADE-IN ON SCROLL
// ======================
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(f => appearOnScroll.observe(f));

// ======================
// PORTFOLIO FILTERING
// ======================
document.querySelectorAll('.portfolio-filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.portfolio-filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('#portfolio-list li').forEach(item => {
      item.style.display = (filter === 'all' || item.dataset.type === filter) ? 'block' : 'none';
    });
  });
});

// ======================
// TESTIMONIAL SLIDER
// ======================
const slides = document.querySelectorAll('.testimonial');
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);

// ======================
// MOBILE MENU TOGGLE
// ======================
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// ======================
// FAQ ACCORDION
// ======================
document.querySelectorAll('.faq-item h5').forEach(header => {
  header.addEventListener('click', () => {
    header.parentElement.classList.toggle('active');
  });
});

// ======================
// SERVICE MODAL
// ======================
document.querySelectorAll('.service').forEach(service => {
  service.addEventListener('click', () => {
    const modal = document.getElementById('serviceModal');
    if(modal) modal.style.display = 'flex';
  });
});

const serviceModalClose = document.querySelector('.service-modal .close');
if(serviceModalClose) {
  serviceModalClose.addEventListener('click', () => {
    const modal = document.getElementById('serviceModal');
    if(modal) modal.style.display = 'none';
  });
}

// ======================
// SMOOTH SCROLL
// ======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ======================
// OPTIONAL: CLICK OUTSIDE MODAL TO CLOSE
// ======================
window.addEventListener('click', e => {
  const modal = document.getElementById('serviceModal');
  if(modal && e.target === modal) {
    modal.style.display = 'none';
  }
});
