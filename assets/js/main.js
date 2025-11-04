// ====== PRELOADER ======
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.transition = 'opacity 0.6s ease';
  preloader.style.opacity = 0;
  setTimeout(() => preloader.style.display = 'none', 600);
});

// ====== HERO TYPED TAGLINE ======
const taglines = ["Fast Delivery", "Sleek Design", "Pro Support"];
const taglineEl = document.getElementById('animated-tagline');
let tIndex = 0, charIndex = 0, deleting = false;

function typeTagline() {
  const current = taglines[tIndex];
  taglineEl.textContent = deleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  if (!deleting && charIndex === current.length + 1) {
    deleting = true;
    setTimeout(typeTagline, 1500);
  } else if (deleting && charIndex === -1) {
    deleting = false;
    tIndex = (tIndex + 1) % taglines.length;
    setTimeout(typeTagline, 300);
  } else {
    setTimeout(typeTagline, deleting ? 50 : 100);
  }
}
typeTagline();

// ====== HERO BUTTON RIPPLE ======
document.querySelectorAll('.hero .btn, .hero .btn.secondary').forEach(btn => {
  btn.addEventListener('click', e => {
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    const rect = btn.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// ====== SERVICE MODALS ======
const services = [
  {
    title: "Website Creation",
    pricing: [
      { tier: "Basic", price: "R2000", features: ["1 page website", "Basic SEO", "Email support"] },
      { tier: "Pro", price: "R4000", features: ["Up to 5 pages", "SEO optimized", "1 month support"] },
      { tier: "Premium", price: "R7000", features: ["10+ pages", "Advanced SEO", "3 months support"] }
    ]
  },
  {
    title: "Analytics Engineering",
    pricing: [
      { tier: "Basic", price: "R1500", features: ["Dashboard setup", "Google Analytics integration"] },
      { tier: "Pro", price: "R3500", features: ["Custom dashboards", "Reports automation"] },
      { tier: "Premium", price: "R6000", features: ["Full analytics stack", "Ongoing monitoring"] }
    ]
  },
  {
    title: "Laptop & PC Repairs",
    pricing: [
      { tier: "Basic", price: "R300", features: ["Virus removal", "OS optimization"] },
      { tier: "Pro", price: "R700", features: ["Hardware diagnostics", "Upgrade RAM/SSD"] },
      { tier: "Premium", price: "R1500", features: ["Full repair & cleaning", "Warranty included"] }
    ]
  }
];

const modal = document.createElement('div');
modal.classList.add('service-modal');
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2 id="modal-title"></h2>
    <div class="pricing-cards" id="pricing-cards"></div>
  </div>
`;
document.body.appendChild(modal);

document.querySelectorAll('.service').forEach((s, idx) => {
  s.addEventListener('click', () => {
    const modalTitle = modal.querySelector('#modal-title');
    const pricingContainer = modal.querySelector('#pricing-cards');
    modalTitle.textContent = services[idx].title;
    pricingContainer.innerHTML = '';
    services[idx].pricing.forEach(p => {
      const card = document.createElement('div');
      card.classList.add('pricing-card');
      card.innerHTML = `
        <h4>${p.tier}</h4>
        <p><strong>${p.price}</strong></p>
        <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
        <a href="#contact" class="btn">Select</a>
      `;
      pricingContainer.appendChild(card);
    });
    modal.style.display = 'flex';
  });
});

modal.querySelector('.close').addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });

// ====== PORTFOLIO FILTER ======
document.querySelectorAll('.portfolio-filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.portfolio-filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('#portfolio-list li').forEach(item => {
      item.style.display = filter === 'all' || item.dataset.type === filter ? 'block' : 'none';
    });
  });
});

// ====== TESTIMONIAL SLIDER ======
const slides = document.querySelectorAll('.testimonial');
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);

// ====== FAQ ACCORDION ======
document.querySelectorAll('.faq-item h5').forEach(h => {
  h.addEventListener('click', () => h.parentElement.classList.toggle('active'));
});

// ====== MOBILE MENU TOGGLE ======
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
