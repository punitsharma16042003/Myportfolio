/**
 * ==============================================================================
 * 🔬 MASTER PORTFOLIO RENDERING ENGINE (app.js)
 * ==============================================================================
 * Reads data from PORTFOLIO_DATA (portfolio-data.js) and populates all 10 sections.
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO_DATA === 'undefined') {
    console.error('PORTFOLIO_DATA is not defined. Ensure portfolio-data.js is loaded.');
    return;
  }

  renderPersonalInfo(PORTFOLIO_DATA.personalInfo);
  renderAbout(PORTFOLIO_DATA.about);
  renderResearchInterests(PORTFOLIO_DATA.researchInterests);
  renderProjects(PORTFOLIO_DATA.projects);
  renderGitHubProjects(PORTFOLIO_DATA.githubProjects);
  renderPublications(PORTFOLIO_DATA.publications);
  renderExperience(PORTFOLIO_DATA.experience);
  renderSkills(PORTFOLIO_DATA.skills);
  renderCertificates(PORTFOLIO_DATA.certificates);
  renderContact(PORTFOLIO_DATA.personalInfo);

  // Set copyright year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

/**
 * 1. Render Personal Info & Hero Stats
 */
function renderPersonalInfo(info) {
  if (!info) return;

  const nameEl = document.getElementById('hero-name-display');
  if (nameEl) nameEl.textContent = info.name;

  const statusEl = document.getElementById('hero-status-pill');
  if (statusEl && info.statusPill) statusEl.textContent = info.statusPill;

  const taglineEl = document.getElementById('hero-tagline-display');
  if (taglineEl && info.tagline) taglineEl.textContent = info.tagline;

  const summaryEl = document.getElementById('hero-summary-display');
  if (summaryEl && info.summary) summaryEl.textContent = info.summary;

  const resumeBtn = document.getElementById('download-resume-btn');
  const navCvBtn = document.getElementById('nav-cv-btn');
  if (info.resumePdfUrl) {
    if (resumeBtn) resumeBtn.href = info.resumePdfUrl;
    if (navCvBtn) navCvBtn.href = info.resumePdfUrl;
  }

  const heroImg = document.getElementById('hero-profile-image');
  if (heroImg && info.profileImageUrl) {
    heroImg.src = info.profileImageUrl;
  }

  // Render Stats
  const statsContainer = document.getElementById('hero-stats-grid');
  if (statsContainer && info.stats) {
    statsContainer.innerHTML = info.stats.map(stat => `
      <div class="stat-card">
        <div class="stat-value">${escapeHtml(stat.value)}</div>
        <div class="stat-label">${escapeHtml(stat.label)}</div>
      </div>
    `).join('');
  }
}

/**
 * 2. Render About Section
 */
function renderAbout(about) {
  if (!about) return;

  const leadEl = document.getElementById('about-lead');
  if (leadEl && about.leadParagraph) {
    leadEl.textContent = about.leadParagraph;
  }

  const paraContainer = document.getElementById('about-paragraphs');
  if (paraContainer && about.bioParagraphs) {
    paraContainer.innerHTML = about.bioParagraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('');
  }

  const pillarsContainer = document.getElementById('about-pillars');
  if (pillarsContainer && about.pillars) {
    const iconMap = {
      atom: '⚛️',
      microscope: '🔬',
      terminal: '💻',
      code: '⚙️'
    };

    pillarsContainer.innerHTML = about.pillars.map(pillar => `
      <div class="glass-card about-pillar-card">
        <div class="about-pillar-icon">
          ${iconMap[pillar.icon] || '🧪'}
        </div>
        <div>
          <h3 class="about-pillar-title">${escapeHtml(pillar.title)}</h3>
          <p class="about-pillar-desc">${escapeHtml(pillar.description)}</p>
        </div>
      </div>
    `).join('');
  }
}

/**
 * 3. Render Research Focus Areas
 */
function renderResearchInterests(interests) {
  const container = document.getElementById('research-grid');
  if (!container || !interests) return;

  const iconMap = {
    atom: '⚛️',
    droplet: '💧',
    'clipboard-check': '📋',
    code: '💻',
    flame: '🔥',
    activity: '📊'
  };

  container.innerHTML = interests.map(item => `
    <div class="glass-card research-card">
      <div class="research-card-icon">
        ${iconMap[item.icon] || '🔬'}
      </div>
      <div class="research-category">${escapeHtml(item.category)}</div>
      <h3 class="research-title">${escapeHtml(item.title)}</h3>
      <p class="research-desc">${escapeHtml(item.description)}</p>
      ${item.tags ? `
        <div class="research-tags">
          ${item.tags.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');
}

/**
 * 4. Render Laboratory & Applied Projects
 */
function renderProjects(projects) {
  const container = document.getElementById('projects-grid');
  if (!container || !projects) return;

  container.innerHTML = projects.map(proj => `
    <div class="glass-card lab-project-card">
      <div class="lab-project-category">${escapeHtml(proj.category)}</div>
      <h3 class="lab-project-title">${escapeHtml(proj.title)}</h3>
      <div class="lab-project-org">🏛️ ${escapeHtml(proj.institution)} &bull; ⏱️ ${escapeHtml(proj.period)}</div>
      <p class="lab-project-desc">${escapeHtml(proj.description)}</p>
      
      ${proj.highlights && proj.highlights.length ? `
        <ul class="project-highlights">
          ${proj.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
        </ul>
      ` : ''}

      <div class="research-tags" style="margin-top: auto; padding-top: 0.85rem; border-top: 1px solid var(--bg-card-border);">
        ${(proj.tags || []).map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/**
 * 5. Render GitHub & Computational Projects (Vibe Coding)
 */
function renderGitHubProjects(githubProjects) {
  const container = document.getElementById('github-projects-grid');
  if (!container || !githubProjects) return;

  container.innerHTML = githubProjects.map(proj => `
    <div class="glass-card github-project-card">
      <div class="github-project-header">
        <h3 class="github-project-title">${escapeHtml(proj.title)}</h3>
        <span class="github-project-status">${escapeHtml(proj.stars || 'Tool')}</span>
      </div>
      <div class="github-project-tagline">${escapeHtml(proj.tagline)}</div>
      <p class="github-project-desc">${escapeHtml(proj.description)}</p>
      
      <div class="github-project-tags">
        ${(proj.tags || []).map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
      </div>

      <div class="github-project-footer">
        <a href="${escapeHtml(proj.githubUrl)}" target="_blank" rel="noopener noreferrer" class="github-link">
          <span>🐙 View Repository</span> &rarr;
        </a>
        <span style="font-size: 0.78rem; color: var(--accent-primary); font-family: var(--font-mono); font-weight: 600;">
          ${escapeHtml(proj.status || 'Active')}
        </span>
      </div>
    </div>
  `).join('');
}

/**
 * 6. Render Publications & Preprints (With Abstract Accordion & BibTeX Copy)
 */
function renderPublications(publications) {
  const container = document.getElementById('publications-list');
  if (!container || !publications) return;

  container.innerHTML = publications.map((pub, index) => {
    // Format authors: highlight Pankaj Sharma in bold
    const formattedAuthors = (pub.authors || []).map(a => {
      return a.includes('Pankaj Sharma') ? `<strong>${escapeHtml(a)}</strong>` : escapeHtml(a);
    }).join(', ');

    return `
      <div class="glass-card publication-card" id="pub-card-${index}">
        <div class="pub-meta-bar">
          <span class="pub-type-badge">${escapeHtml(pub.badge || pub.type)}</span>
          <span class="pub-year">🗓️ ${escapeHtml(pub.year)}</span>
        </div>

        <h3 class="pub-title">${escapeHtml(pub.title)}</h3>
        <div class="pub-authors">${formattedAuthors}</div>
        <div class="pub-journal">${escapeHtml(pub.journal)}</div>

        ${pub.abstract ? `
          <div class="pub-abstract-box" id="pub-abstract-${index}">
            <strong>Abstract:</strong> ${escapeHtml(pub.abstract)}
          </div>
        ` : ''}

        <div class="pub-actions">
          ${pub.abstract ? `
            <button class="btn btn-secondary btn-sm toggle-abstract-btn" data-target="pub-abstract-${index}">
              <span>📖 Abstract</span>
            </button>
          ` : ''}
          ${pub.bibtex ? `
            <button class="btn btn-secondary btn-sm copy-bibtex-btn" data-bibtex="${encodeURIComponent(pub.bibtex)}">
              <span>📋 Copy BibTeX</span>
            </button>
          ` : ''}
          ${pub.doi ? `
            <a href="${escapeHtml(pub.doi)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <span>🔗 DOI Link</span>
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  // Bind Abstract Accordion Toggles
  container.querySelectorAll('.toggle-abstract-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const abstractBox = document.getElementById(targetId);
      if (abstractBox) {
        abstractBox.classList.toggle('active');
        btn.classList.toggle('active');
      }
    });
  });

  // Bind BibTeX Copy Buttons
  container.querySelectorAll('.copy-bibtex-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const bibtex = decodeURIComponent(btn.getAttribute('data-bibtex'));
      navigator.clipboard.writeText(bibtex).then(() => {
        if (typeof showToast === 'function') {
          showToast('BibTeX citation copied to clipboard!');
        }
      });
    });
  });
}

/**
 * 7. Render Experience Timeline
 */
function renderExperience(experience) {
  const container = document.getElementById('experience-timeline');
  if (!container || !experience) return;

  container.innerHTML = experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="glass-card">
        <div class="timeline-header">
          <h3 class="timeline-role">${escapeHtml(exp.role)}</h3>
          <span class="timeline-period">${escapeHtml(exp.period)}</span>
        </div>
        <div class="timeline-org">🏛️ ${escapeHtml(exp.organization)} &bull; 📍 ${escapeHtml(exp.location)}</div>
        <ul class="timeline-bullets">
          ${(exp.bullets || []).map(b => `<li>${escapeHtml(b)}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/**
 * 8. Render Skills Matrix
 */
function renderSkills(skills) {
  const container = document.getElementById('skills-grid');
  if (!container || !skills) return;

  const categories = [
    {
      title: 'Laboratory Instrumentation',
      icon: '⚗️',
      items: skills.instrumentation || []
    },
    {
      title: 'Analytical Parameters & Testing',
      icon: '🧪',
      items: skills.analyticalParameters || []
    },
    {
      title: 'AI & Vibe Coding Stack',
      icon: '💻',
      items: skills.computationalAndVibeCoding || []
    },
    {
      title: 'Scientific Software & Tools',
      icon: '🖥️',
      items: skills.scientificSoftware || []
    }
  ];

  container.innerHTML = categories.map(cat => `
    <div class="glass-card skill-category-card">
      <div class="skill-category-header">
        <span class="skill-category-icon">${cat.icon}</span>
        <h3 class="skill-category-title">${escapeHtml(cat.title)}</h3>
      </div>
      <div class="skill-chips">
        ${cat.items.map(item => `
          <span class="skill-chip">${escapeHtml(item)}</span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/**
 * 9. Render Certificates & Specialized Training
 */
function renderCertificates(certificates, filter = 'all') {
  const container = document.getElementById('certificates-grid');
  if (!container || !certificates) return;

  const filtered = filter === 'all'
    ? certificates
    : certificates.filter(c => c.category.toLowerCase() === filter.toLowerCase());

  let cardsHtml = filtered.map(cert => `
    <div class="glass-card achievement-card ${cert.highlight ? 'highlight' : ''}" data-category="${escapeHtml(cert.category)}">
      <div class="achievement-header">
        <span class="achievement-badge">${escapeHtml(cert.badge || 'Credential')}</span>
        <span class="achievement-date">${escapeHtml(cert.date)}</span>
      </div>
      <h3 class="achievement-title">${escapeHtml(cert.title)}</h3>
      <div class="achievement-org">🏛️ ${escapeHtml(cert.organization)}</div>
      <p class="achievement-desc">${escapeHtml(cert.description)}</p>
      <div class="achievement-footer">
        <span class="achievement-category-tag">🏷️ ${escapeHtml(cert.category)}</span>
        ${cert.link ? `
          <a href="${escapeHtml(cert.link)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="padding: 0.25rem 0.65rem; font-size: 0.78rem;">
            Verify &rarr;
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');

  // Quick Add Card at the end
  const quickAddCard = `
    <div class="quick-add-card" id="quick-add-trigger">
      <div class="quick-add-icon">➕</div>
      <h4 class="quick-add-title">Add New Certificate</h4>
      <p class="quick-add-desc">Earned a new award or credential? Click here to generate code for <code>portfolio-data.js</code>.</p>
    </div>
  `;

  container.innerHTML = cardsHtml + quickAddCard;

  const quickAddBtn = document.getElementById('quick-add-trigger');
  if (quickAddBtn) {
    quickAddBtn.addEventListener('click', () => {
      const modal = document.getElementById('achievement-modal');
      if (modal) modal.classList.add('active');
    });
  }
}

/**
 * 10. Render Contact Section
 */
function renderContact(info) {
  const container = document.getElementById('contact-cards-grid');
  if (!container || !info) return;

  const cards = [
    {
      type: 'Email Address',
      value: info.email,
      icon: '✉️',
      action: `mailto:${info.email}`,
      copyable: true
    },
    {
      type: 'Phone / WhatsApp',
      value: info.phone,
      icon: '📱',
      action: `tel:${info.phone}`,
      copyable: true
    },
    {
      type: 'Location',
      value: info.location,
      icon: '📍',
      action: null,
      copyable: false
    },
    {
      type: 'GitHub Profile',
      value: info.githubUsername,
      icon: '🐙',
      action: info.githubUrl,
      copyable: false
    },
    {
      type: 'LinkedIn Profile',
      value: 'punitsharma16042003',
      icon: '💼',
      action: info.linkedinUrl,
      copyable: false
    },
    {
      type: 'Google Scholar',
      value: 'Pankaj Sharma',
      icon: '🎓',
      action: info.googleScholarUrl,
      copyable: false
    }
  ];

  container.innerHTML = cards.map(c => `
    <div class="glass-card contact-card" data-copy="${c.copyable ? escapeHtml(c.value) : ''}">
      <div class="contact-icon">${c.icon}</div>
      <div class="contact-type">${escapeHtml(c.type)}</div>
      ${c.action ? `
        <a href="${escapeHtml(c.action)}" target="_blank" rel="noopener noreferrer" class="contact-value">
          ${escapeHtml(c.value)}
        </a>
      ` : `
        <div class="contact-value">${escapeHtml(c.value)}</div>
      `}
      ${c.copyable ? `<div style="font-size: 0.75rem; color: var(--accent-primary); margin-top: 0.35rem;">Click card to copy</div>` : ''}
    </div>
  `).join('');

  // Add click to copy listener
  container.querySelectorAll('.contact-card[data-copy]').forEach(card => {
    const textToCopy = card.getAttribute('data-copy');
    if (textToCopy) {
      card.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') {
          navigator.clipboard.writeText(textToCopy).then(() => {
            if (typeof showToast === 'function') {
              showToast(`Copied to clipboard: ${textToCopy}`);
            }
          });
        }
      });
    }
  });

  const directEmailBtn = document.getElementById('direct-email-btn');
  if (directEmailBtn && info.email) {
    directEmailBtn.href = `mailto:${info.email}?subject=Research%20Collaboration%20Inquiry`;
  }
}

/**
 * Utility: Safe HTML Escaping
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
