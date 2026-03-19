/* ── Cursor ── */
const curDot = document.getElementById('cur-dot');
const curTrail = document.getElementById('cur-trail');
let mx = -200, my = -200, tx = -200, ty = -200;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  curDot.style.left = mx + 'px'; curDot.style.top = my + 'px';
});

(function animTrail() {
  tx += (mx - tx) * 0.1; ty += (my - ty) * 0.1;
  curTrail.style.left = tx + 'px'; curTrail.style.top = ty + 'px';
  requestAnimationFrame(animTrail);
})();

function spawnSplash(x, y) {
  const el = document.createElement('div');
  const s = 2.5 + Math.random() * 3.5;
  el.style.cssText = `position:fixed;border-radius:50%;pointer-events:none;z-index:99996;
    width:${s}px;height:${s}px;
    left:${x + (Math.random() - .5) * 20}px;top:${y + (Math.random() - .5) * 20}px;
    background:var(--teal);opacity:0.4;
    transform:translate(-50%,-50%) scale(1);
    transition:opacity .55s ease,transform .55s ease;`;
  document.body.appendChild(el);
  requestAnimationFrame(() => { el.style.opacity = '0'; el.style.transform = 'translate(-50%,-50%) scale(2.8)'; });
  setTimeout(() => el.remove(), 650);
}

document.querySelectorAll('a,button,.project-card,.exp-row,.mde-card,.edu-activity-row').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cur-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cur-hover'));
});


/* ── URL deep-linking ── */
const sectionBase = { exp: '/experience', proj: '/projects', edu: '/education' };
const typeToUrl = { exp: 'experience', proj: 'project', edu: 'education' };
const urlToType = { experience: 'exp', project: 'proj', education: 'edu' };

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Build slug ↔ id lookup maps
const slugToId = { proj: {}, exp: {}, edu: {} };
Object.entries(data.proj).forEach(([id, item]) => {
  slugToId.proj[slugify(item.title)] = id;
});
Object.entries(data.expMeta).forEach(([id, meta]) => {
  slugToId.exp[slugify(meta.company)] = id;
});
Object.entries(data.eduMeta).forEach(([id, meta]) => {
  slugToId.edu[slugify(meta.company)] = id;
});

function idToSlug(type, id) {
  if (type === 'proj') return slugify(data.proj[id].title);
  if (type === 'exp') return slugify(data.expMeta[id].company);
  if (type === 'edu') return slugify(data.eduMeta[id].company);
  return id;
}

function setModalPath(type, id, view, replace) {
  const slug = idToSlug(type, id);
  const urlType = typeToUrl[type] || type;
  const path = (view && view !== 'short') ? `/${urlType}/${slug}/${view}` : `/${urlType}/${slug}`;
  if (replace) {
    history.replaceState({ modal: { type, id, view } }, '', path);
  } else {
    // Ensure back button returns to the correct section, not wherever the user was
    const base = sectionBase[type];
    if (base) history.replaceState(null, '', base);
    history.pushState({ modal: { type, id, view } }, '', path);
  }
}

window.addEventListener('popstate', e => {
  const modalEl = document.getElementById('modal');
  if (e.state && e.state.modal) {
    const { type, id, view } = e.state.modal;
    openModal(type, id, view || 'short', true);
  } else if (modalEl && modalEl.classList.contains('open')) {
    modalEl.classList.remove('open');
    document.body.style.overflow = '';
  }
});

let currentModal = null;

function openModal(type, id, view, fromHash) {
  view = view || 'short';
  fromHash = fromHash || false;
  const isLong = view === 'long';
  currentModal = { type, id, view };

  const item = data[type][id];
  const meta = data[type + 'Meta'] ? data[type + 'Meta'][id] : null;
  const body = document.getElementById('modal-body-content');

  let content = '';

  if (meta) {
    // Experience modal with metadata header
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = item.html || '';
    const images = tempDiv.querySelectorAll('img, iframe');
    const mediaHTML = Array.from(images).map(el => el.outerHTML).join('');
    images.forEach(img => img.remove());
    const htmlWithoutMedia = tempDiv.innerHTML;

    let htmlShortWithoutMedia = '';
    if (item.htmlShort) {
      const tempDiv2 = document.createElement('div');
      tempDiv2.innerHTML = item.htmlShort;
      const imagesShort = tempDiv2.querySelectorAll('img, iframe');
      imagesShort.forEach(img => img.remove());
      htmlShortWithoutMedia = tempDiv2.innerHTML;
    }

    const toggleHTML = item.htmlShort ? `
      <div class="exp-modal-toggle">
        <button class="exp-modal-toggle-btn exp-modal-toggle-short${isLong ? '' : ' active'}" data-format="short">highlights</button>
        <button class="exp-modal-toggle-btn exp-modal-toggle-long${isLong ? ' active' : ''}" data-format="long">in depth</button>
      </div>
      <div class="exp-modal-content exp-modal-short" style="display:${isLong ? 'none' : 'block'};">${htmlShortWithoutMedia}</div>
      <div class="exp-modal-content exp-modal-long" style="display:${isLong ? 'block' : 'none'};">${htmlWithoutMedia}${mediaHTML ? `<div class="exp-modal-media">${mediaHTML}</div>` : ''}</div>
    ` : `
      <div class="exp-modal-content">${htmlWithoutMedia}${mediaHTML ? `<div class="exp-modal-media">${mediaHTML}</div>` : ''}</div>
    `;

    content = `
      ${toggleHTML}
      <div class="modal-tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;
    document.getElementById('modal-title').textContent = meta.jobTitle;
    document.getElementById('modal-subtitle').innerHTML = `<a href="${meta.website}" target="_blank" class="modal-subtitle-company">${meta.company}</a>`;
    document.getElementById('modal-header-dates').textContent = meta.dates ? `📅 ${meta.dates}` : '';
    document.getElementById('modal-header-links').innerHTML = meta.location ? `<span class="modal-dates">📍 ${meta.location}</span>` : '';

    setTimeout(() => {
      const shortBtn = document.querySelector('.exp-modal-toggle-short');
      const longBtn = document.querySelector('.exp-modal-toggle-long');
      const shortContent = document.querySelector('.exp-modal-short');
      const longContent = document.querySelector('.exp-modal-long');
      if (shortBtn && longBtn) {
        shortBtn.addEventListener('click', () => {
          shortBtn.classList.add('active'); longBtn.classList.remove('active');
          shortContent.style.display = 'block'; longContent.style.display = 'none';
          setModalPath(type, id, 'short', true);
        });
        longBtn.addEventListener('click', () => {
          longBtn.classList.add('active'); shortBtn.classList.remove('active');
          shortContent.style.display = 'none'; longContent.style.display = 'block';
          setModalPath(type, id, 'long', true);
        });
      }
    }, 0);
  } else {
    // Project modal
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-subtitle').innerHTML = item.subtitle
      ? (item.subtitleUrl
          ? `<a href="${item.subtitleUrl}" target="_blank" class="modal-subtitle-company">${item.subtitle}</a>`
          : `<span class="modal-subtitle-company">${item.subtitle}</span>`)
      : '';
    document.getElementById('modal-header-dates').textContent = item.date ? `📅 ${item.date}` : '';
    document.getElementById('modal-header-links').innerHTML = (item.links && item.links.length)
      ? item.links.map(l => `<a href="${l.url}" target="_blank" class="modal-header-link">${l.emoji} ${l.label}</a>`).join('')
      : '';
    if (item.html) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = item.html;
      const media = Array.from(tempDiv.querySelectorAll('img, iframe'));
      const mediaItems = media.map(el => el.outerHTML);
      media.forEach(el => el.remove());

      const cleanDiv = document.createElement('div');
      cleanDiv.innerHTML = tempDiv.innerHTML;
      cleanDiv.querySelectorAll('div, section').forEach(el => {
        if (!el.textContent.trim() && !el.querySelector('img, iframe, video')) el.remove();
      });
      const cleanTextHTML = cleanDiv.innerHTML.trim();

      let mediaSection = '';
      if (mediaItems.length > 1) {
        mediaSection = `
          <div class="modal-carousel">
            <button class="modal-carousel-btn modal-carousel-prev" aria-label="Previous">&#8249;</button>
            <div class="modal-carousel-media">
              ${mediaItems.map((m, i) => `<div class="modal-carousel-item"${i > 0 ? ' style="display:none"' : ''}>${m}</div>`).join('')}
            </div>
            <button class="modal-carousel-btn modal-carousel-next" aria-label="Next">&#8250;</button>
          </div>
          <div class="modal-carousel-counter">1 / ${mediaItems.length}</div>
        `;
      } else if (mediaItems.length === 1) {
        mediaSection = `<div class="exp-modal-media">${mediaItems[0]}</div>`;
      }

      if (item.htmlShort) {
        content = `
          <div class="exp-modal-toggle">
            <button class="exp-modal-toggle-btn exp-modal-toggle-short${isLong ? '' : ' active'}">highlights</button>
            <button class="exp-modal-toggle-btn exp-modal-toggle-long${isLong ? ' active' : ''}">in depth</button>
          </div>
          <div class="exp-modal-content exp-modal-short" style="display:${isLong ? 'none' : 'block'};">${item.htmlShort}</div>
          <div class="exp-modal-content exp-modal-long" style="display:${isLong ? 'block' : 'none'};"><div class="modal-proj-text">${cleanTextHTML}</div>${mediaSection}</div>
          <div class="modal-tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        `;
      } else {
        content = `<div class="modal-proj-text">${cleanTextHTML}</div>${mediaSection}<div class="modal-tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`;
      }
    } else {
      content = `<div class="modal-proj-text"><p>${item.desc || ''}</p></div><div class="modal-tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`;
    }

    setTimeout(() => {
      const shortBtn = document.querySelector('.exp-modal-toggle-short');
      const longBtn = document.querySelector('.exp-modal-toggle-long');
      const shortContent = document.querySelector('.exp-modal-short');
      const longContent = document.querySelector('.exp-modal-long');
      if (shortBtn && longBtn) {
        shortBtn.addEventListener('click', () => {
          shortBtn.classList.add('active'); longBtn.classList.remove('active');
          shortContent.style.display = 'block'; longContent.style.display = 'none';
          setModalPath(type, id, 'short', true);
        });
        longBtn.addEventListener('click', () => {
          longBtn.classList.add('active'); shortBtn.classList.remove('active');
          shortContent.style.display = 'none'; longContent.style.display = 'block';
          setModalPath(type, id, 'long', true);
        });
      }
    }, 0);
  }

  body.innerHTML = content;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';

  if (!fromHash) setModalPath(type, id, view);

  // Initialize carousel if present
  setTimeout(() => {
    const carousel = document.querySelector('.modal-carousel');
    if (carousel) {
      const items = carousel.querySelectorAll('.modal-carousel-item');
      const counter = document.querySelector('.modal-carousel-counter');
      const prevBtn = carousel.querySelector('.modal-carousel-prev');
      const nextBtn = carousel.querySelector('.modal-carousel-next');
      let idx = 0;
      function showItem(n) {
        items[idx].style.display = 'none';
        idx = (n + items.length) % items.length;
        items[idx].style.display = 'block';
        if (counter) counter.textContent = `${idx + 1} / ${items.length}`;
      }
      if (prevBtn) prevBtn.addEventListener('click', () => showItem(idx - 1));
      if (nextBtn) nextBtn.addEventListener('click', () => showItem(idx + 1));
    }
  }, 0);

  const modalEl = document.getElementById('modal');
  if (modalEl) setTimeout(() => { modalEl.scrollTop = 0; }, 0);
}

function closeModal(e) { if (e.target.id === 'modal') closeModalDirect(); }
function closeModalDirect() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
  const base = (currentModal && sectionBase[currentModal.type]) || '/';
  currentModal = null;
  history.replaceState(null, '', base);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });

// Open modal from URL path on load (also handles 404 redirect via ?path= query param)
(function openModalFromPath() {
  const params = new URLSearchParams(window.location.search);
  const redirectPath = params.get('path');
  let path;

  if (redirectPath) {
    // Came via 404.html redirect — restore clean URL before opening modal
    history.replaceState(null, '', '/');
    history.pushState(null, '', redirectPath);
    path = redirectPath;
  } else {
    path = window.location.pathname;
  }

  const parts = path.replace(/^\//, '').split('/');
  const [urlType, slug, view] = parts;
  const type = urlToType[urlType] || urlType;

  const sectionMap = { experience: 'experience', projects: 'projects', skills: 'skills', education: 'education' };

  // Section-root path (e.g. /experience with no slug) — scroll to section or redirect if unknown
  if (urlType && !slug) {
    const sectionId = sectionMap[urlType];
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView();
    } else {
      history.replaceState(null, '', '/');
    }
    return;
  }

  const id = slugToId[type] && slugToId[type][slug];
  if (id && data[type] && data[type][id]) {
    // Scroll background to the relevant section before opening modal
    const sectionId = type === 'exp' ? 'experience' : type === 'proj' ? 'projects' : type === 'edu' ? 'education' : null;
    if (sectionId) {
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
      const scrollToSection = () => {
        const navOffset = document.querySelector('nav')?.offsetHeight || 0;
        const target = sectionEl.querySelector('.section-header') || sectionEl;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navOffset });
      };
      document.fonts.ready.then(scrollToSection);
    }
    }
    openModal(type, id, view || 'short', true);
  } else if (urlType) {
    // Unrecognised path — redirect to base
    history.replaceState(null, '', '/');
  }
})();

/* ── Nav section links ── */
document.querySelectorAll('a[data-section]').forEach(a => {
  a.addEventListener('click', e => {
    const sectionId = a.dataset.section;
    const el = document.getElementById(sectionId);
    if (el) {
      e.preventDefault();
      history.pushState(null, '', a.getAttribute('href'));
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ── Populate project cards ── */
document.querySelectorAll('[data-proj]').forEach(el => {
  const proj = data.proj[el.dataset.proj];
  if (!proj) return;
  el.querySelector('h3').textContent = proj.title;
  const tagEl = el.querySelector('.project-tag');
  if (tagEl && proj.tag) tagEl.textContent = proj.tag;
  const pEl = el.querySelector('p');
  if (pEl && proj.cardDesc) pEl.textContent = proj.cardDesc;
});

/* ── Populate experience metadata ── */
document.querySelectorAll('[data-meta]').forEach(el => {
  const metaId = el.dataset.meta;
  const meta = data.expMeta[metaId];
  if (meta) {
    if (el.classList.contains('exp-date')) {
      el.textContent = meta.dates;
    } else if (el.tagName === 'H3') {
      el.textContent = meta.jobTitle;
    } else if (el.classList.contains('exp-company')) {
      el.textContent = meta.company;
    } else if (el.tagName === 'P') {
      el.textContent = meta.tagline;
    }
  }
});
