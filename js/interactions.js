/**
 * ==============================================================================
 * 🔬 PORTFOLIO INTERACTIVITY, FX & MODAL ENGINE (interactions.js)
 * ==============================================================================
 * Controls molecular canvas, dynamic typing, theme switcher, and entry generator.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMolecularCanvas();
  initTypewriter();
  initMobileMenu();
  initFilters();
  initEntryGeneratorModal();
  initScrollSpy();
});

/* ----------------------------------------------------------------------------
 * 1. THEME TOGGLE (QUANTUM SLATE DARK / ACADEMIC LIGHT)
 * ---------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem('ps_research_theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('ps_research_theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Quantum Slate (Dark)' : 'Academic Paper (Light)'} Mode`);
    });
  }

  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

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
      ctx.fillStyle = '#10b981';
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
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.22 * (1 - dist / maxDistance)})`;
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
 * 6. "ADD ENTRY" MASTER CODE GENERATOR MODAL
 * ---------------------------------------------------------------------------- */
function initEntryGeneratorModal() {
  const modal = document.getElementById('achievement-modal');
  const openBtn1 = document.getElementById('open-achievement-modal-btn');
  const openBtn2 = document.getElementById('open-achievement-modal-btn-2');
  const closeBtn = document.getElementById('close-achievement-modal-btn');
  const copyBtn = document.getElementById('copy-code-btn');
  const previewBtn = document.getElementById('preview-achievement-btn');
  const guideLink = document.getElementById('open-edit-guide-link');

  const typeSelect = document.getElementById('entry-type-select');
  const titleInput = document.getElementById('ach-input-title');
  const orgInput = document.getElementById('ach-input-org');
  const dateInput = document.getElementById('ach-input-date');
  const catInput = document.getElementById('ach-input-category');
  const badgeInput = document.getElementById('ach-input-badge');
  const descInput = document.getElementById('ach-input-desc');
  const linkInput = document.getElementById('ach-input-link');
  const snippetBox = document.getElementById('generated-code-snippet');

  function openModal() {
    if (modal) modal.classList.add('active');
    updateSnippet();
  }

  function closeModal() {
    if (modal) modal.classList.remove('active');
  }

  if (openBtn1) openBtn1.addEventListener('click', openModal);
  if (openBtn2) openBtn2.addEventListener('click', openModal);
  if (guideLink) guideLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  const inputs = [typeSelect, titleInput, orgInput, dateInput, catInput, badgeInput, descInput, linkInput];
  inputs.forEach(input => {
    if (input) input.addEventListener('input', updateSnippet);
  });

  function getFormData() {
    return {
      section: typeSelect ? typeSelect.value : 'certificates',
      id: "entry-" + Date.now(),
      title: titleInput.value.trim() || "Title of Paper / Certificate / Project",
      org: orgInput.value.trim() || "Organization / Journal Name",
      date: dateInput.value.trim() || new Date().getFullYear().toString(),
      category: catInput.value.trim() || "Research",
      badge: badgeInput.value.trim() || "Credential",
      desc: descInput.value.trim() || "Brief description of the methodology, significance, or scope.",
      link: linkInput.value.trim() || null
    };
  }

  function updateSnippet() {
    const data = getFormData();
    let formatted = "";

    if (data.section === 'publications') {
      formatted = `    // Add inside publications: [ ... ] in portfolio-data.js
    {
      id: "${data.id}",
      title: "${data.title.replace(/"/g, '\\"')}",
      authors: ["Pankaj Sharma", "Collaborators"],
      journal: "${data.org.replace(/"/g, '\\"')}",
      year: "${data.date}",
      doi: ${data.link ? `"${data.link}"` : 'null'},
      type: "Journal Article",
      badge: "${data.badge || 'Published'}",
      abstract: "${data.desc.replace(/"/g, '\\"')}",
      bibtex: \`@article{sharma${data.date},
  title={${data.title}},
  author={Sharma, Pankaj},
  journal={${data.org}},
  year={${data.date}}
}\`
    },`;
    } else if (data.section === 'githubProjects') {
      formatted = `    // Add inside githubProjects: [ ... ] in portfolio-data.js
    {
      id: "${data.id}",
      title: "${data.title.replace(/"/g, '\\"')}",
      tagline: "${data.org.replace(/"/g, '\\"')}",
      description: "${data.desc.replace(/"/g, '\\"')}",
      tags: ["Python", "JavaScript", "AI Tools"],
      githubUrl: ${data.link ? `"${data.link}"` : '"https://github.com/punitsharma16042003"'},
      stars: "${data.badge || 'Tool'}",
      status: "Active"
    },`;
    } else {
      formatted = `    // Add inside ${data.section}: [ ... ] in portfolio-data.js
    {
      id: "${data.id}",
      title: "${data.title.replace(/"/g, '\\"')}",
      organization: "${data.org.replace(/"/g, '\\"')}",
      date: "${data.date}",
      category: "${data.category.replace(/"/g, '\\"')}",
      badge: "${data.badge.replace(/"/g, '\\"')}",
      description: "${data.desc.replace(/"/g, '\\"')}",
      link: ${data.link ? `"${data.link}"` : 'null'},
      highlight: true
    },`;
    }

    if (snippetBox) {
      snippetBox.textContent = formatted;
    }
    return formatted;
  }

  // Copy code snippet to clipboard
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = updateSnippet();
      navigator.clipboard.writeText(code).then(() => {
        showToast("Code copied! Paste it into portfolio-data.js");
      });
    });
  }

  // Live preview without saving
  if (previewBtn) {
    previewBtn.addEventListener('click', () => {
      const data = getFormData();
      if (!titleInput.value.trim() || !orgInput.value.trim()) {
        showToast("Please enter at least a Title and Institution/Journal.");
        return;
      }

      if (typeof PORTFOLIO_DATA !== 'undefined') {
        if (data.section === 'publications') {
          PORTFOLIO_DATA.publications.unshift({
            id: data.id,
            title: data.title,
            authors: ["Pankaj Sharma"],
            journal: data.org,
            year: data.date,
            doi: data.link,
            type: "Article",
            badge: data.badge || "Preview",
            abstract: data.desc,
            bibtex: null
          });
          if (typeof renderPublications === 'function') {
            renderPublications(PORTFOLIO_DATA.publications);
          }
          closeModal();
          showToast("🎉 Preview card added to Publications section!");
          document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' });
        } else if (data.section === 'githubProjects') {
          PORTFOLIO_DATA.githubProjects.unshift({
            id: data.id,
            title: data.title,
            tagline: data.org,
            description: data.desc,
            tags: ["New Project"],
            githubUrl: data.link || "https://github.com/punitsharma16042003",
            stars: data.badge || "New",
            status: "Active"
          });
          if (typeof renderGitHubProjects === 'function') {
            renderGitHubProjects(PORTFOLIO_DATA.githubProjects);
          }
          closeModal();
          showToast("🎉 Preview card added to GitHub Projects section!");
          document.getElementById('github-projects')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          PORTFOLIO_DATA.certificates.unshift({
            id: data.id,
            title: data.title,
            organization: data.org,
            date: data.date,
            category: data.category,
            badge: data.badge,
            description: data.desc,
            link: data.link,
            highlight: true
          });
          if (typeof renderCertificates === 'function') {
            renderCertificates(PORTFOLIO_DATA.certificates);
          }
          closeModal();
          showToast("🎉 Preview card added to Certificates section!");
          document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}

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
