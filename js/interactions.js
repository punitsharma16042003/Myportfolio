/**
 * ==============================================================================
 * 🔬 PORTFOLIO INTERACTIVITY, FX & MODAL ENGINE (interactions.js)
 * ==============================================================================
 * Controls molecular canvas, dynamic typing, theme switcher, and entry generator.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure theme is always clean academic light mode
  document.documentElement.removeAttribute('data-theme');
  try {
    localStorage.removeItem('ps_research_theme');
    localStorage.removeItem('ps_portfolio_theme');
  } catch (e) {}

  initMolecularCanvas();
  initTypewriter();
  initMobileMenu();
  initFilters();
  initGalleryInteractions();
  initScrollSpy();
});

/* ----------------------------------------------------------------------------
 * 2. MOLECULAR / ATOM PARTICLE CANVAS (CHEMISTRY THEME)
 * ---------------------------------------------------------------------------- */
function initMolecularCanvas() {
  const canvas = document.getElementById('molecular-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  const particleCount = 48;
  const maxDistance = 145;

  const mouse = { x: null, y: null, radius: 160 };

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.75;
      this.vy = (Math.random() - 0.5) * 0.75;
      this.radius = Math.random() * 2.4 + 1.6;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 2.2;
          this.y -= (dy / dist) * force * 2.2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#059669';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      // Draw chemical bonds between close nodes
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(5, 150, 105, ${0.18 * (1 - dist / maxDistance)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ----------------------------------------------------------------------------
 * 3. DYNAMIC TYPEWRITER EFFECT
 * ---------------------------------------------------------------------------- */
function initTypewriter() {
  const textEl = document.getElementById('typing-text');
  if (!textEl) return;

  const titles = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.personalInfo && PORTFOLIO_DATA.personalInfo.titles) 
    ? PORTFOLIO_DATA.personalInfo.titles 
    : ['Research Chemist', 'Applied Nanochemist', 'Environmental Analyst', 'Vibe Coder'];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      textEl.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      delay = 40;
    } else {
      textEl.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      delay = 90;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      delay = 1800; // Pause at end of title
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      delay = 400; // Pause before next title
    }

    setTimeout(type, delay);
  }

  type();
}

/* ----------------------------------------------------------------------------
 * 4. MOBILE NAVIGATION
 * ---------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

/* ----------------------------------------------------------------------------
 * 5. CERTIFICATES CATEGORY FILTER
 * ---------------------------------------------------------------------------- */
function initFilters() {
  const filterContainer = document.getElementById('certificate-filters');
  if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const filter = e.target.getAttribute('data-filter');
        if (typeof renderCertificates === 'function' && typeof PORTFOLIO_DATA !== 'undefined') {
          renderCertificates(PORTFOLIO_DATA.certificates, filter);
        }
      }
    });
  }
}

/* ----------------------------------------------------------------------------
 * 6. RESEARCH MEMORIES GALLERY FILTERS & LIGHTBOX
 * ---------------------------------------------------------------------------- */
let currentLightboxIndex = 0;

function initGalleryInteractions() {
  // Category Filter clicks
  const filterContainer = document.getElementById('gallery-filters');
  if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const filter = e.target.getAttribute('data-filter');
        window.activeGalleryFilter = filter;
        if (typeof displayGalleryCards === 'function' && window.allGalleryItems) {
          displayGalleryCards(window.allGalleryItems, filter);
        }
      }
    });
  }

  // Lightbox UI buttons
  const closeBtn = document.getElementById('lightbox-close-btn');
  const overlay = document.getElementById('lightbox-overlay');
  const nextBtn = document.getElementById('lightbox-next-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (overlay) overlay.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevLightbox);

  // Keyboard navigation for Lightbox
  window.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('gallery-lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevLightbox();
      }
    }
  });
}

function openLightbox(index) {
  const items = window.filteredGalleryItems || window.allGalleryItems || [];
  if (!items || items.length === 0 || index < 0 || index >= items.length) return;

  currentLightboxIndex = index;
  updateLightboxContent();

  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox) {
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function updateLightboxContent() {
  const items = window.filteredGalleryItems || window.allGalleryItems || [];
  if (!items || items.length === 0) return;

  const item = items[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightbox-image');
  const title = document.getElementById('lightbox-title');
  const caption = document.getElementById('lightbox-caption');
  const category = document.getElementById('lightbox-category');
  const date = document.getElementById('lightbox-date');
  const location = document.getElementById('lightbox-location');

  if (img) {
    img.src = item.image;
    img.alt = item.title;
  }
  if (title) title.textContent = item.title;
  if (caption) caption.textContent = item.caption || '';
  if (category) category.textContent = item.category || 'Research Memory';
  
  if (date) {
    const dateVal = date.querySelector('.meta-val');
    if (dateVal) {
      dateVal.textContent = item.date || 'Lab Memory';
      date.style.display = item.date ? 'inline-flex' : 'none';
    }
  }

  if (location) {
    const locVal = location.querySelector('.meta-val');
    if (locVal) {
      locVal.textContent = item.location || 'IIT Ropar';
      location.style.display = item.location ? 'inline-flex' : 'none';
    }
  }
}

function nextLightbox() {
  const items = window.filteredGalleryItems || window.allGalleryItems || [];
  if (!items || items.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % items.length;
  updateLightboxContent();
}

function prevLightbox() {
  const items = window.filteredGalleryItems || window.allGalleryItems || [];
  if (!items || items.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + items.length) % items.length;
  updateLightboxContent();
}

// Expose globally for app.js card click events
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

/* ----------------------------------------------------------------------------
 * 7. SCROLL SPY FOR NAVIGATION
 * ---------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ----------------------------------------------------------------------------
 * 8. TOAST NOTIFICATION HELPER
 * ---------------------------------------------------------------------------- */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
