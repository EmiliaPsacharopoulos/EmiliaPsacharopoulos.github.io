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

// Build slug ↔ id lookup maps from pre-rendered DOM elements
const slugToId = { proj: {}, exp: {}, edu: {} };
document.querySelectorAll('[id^="modal-data-proj-"]').forEach(el => {
  const id = el.id.replace('modal-data-proj-', '');
  slugToId.proj[slugify(el.dataset.title)] = id;
});
document.querySelectorAll('[id^="modal-data-exp-"]').forEach(el => {
  const id = el.id.replace('modal-data-exp-', '');
  slugToId.exp[slugify(el.dataset.company)] = id;
});
document.querySelectorAll('[id^="modal-data-edu-"]').forEach(el => {
  const id = el.id.replace('modal-data-edu-', '');
  slugToId.edu[slugify(el.dataset.company)] = id;
});

function idToSlug(type, id) {
  const el = document.getElementById(`modal-data-${type}-${id}`);
  if (!el) return id;
  if (type === 'proj') return slugify(el.dataset.title);
  return slugify(el.dataset.company);
}

function setModalPath(type, id, view, replace) {
  const slug = idToSlug(type, id);
  const urlType = typeToUrl[type] || type;
  const path = (view && view !== 'short') ? `/${urlType}/${slug}/${view}` : `/${urlType}/${slug}`;
  if (replace) {
    history.replaceState({ modal: { type, id, view } }, '', path);
  } else {
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

  const dataEl = document.getElementById(`modal-data-${type}-${id}`);
  if (!dataEl) return;

  const htmlShortEl = dataEl.querySelector('[data-slot="htmlShort"]');
  const htmlLongEl = dataEl.querySelector('[data-slot="html"]');
  const tags = JSON.parse(dataEl.dataset.tags || '[]');
  const body = document.getElementById('modal-body-content');
  let content = '';

  if (type === 'exp' || type === 'edu') {
    // Experience / education modal
    const jobTitle = dataEl.dataset.jobTitle;
    const company = dataEl.dataset.company;
    const companyUrl = dataEl.dataset.companyUrl;
    const location = dataEl.dataset.location;
    const dates = dataEl.dataset.dates;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlLongEl ? htmlLongEl.innerHTML : '';
    const images = tempDiv.querySelectorAll('img, iframe');
    const mediaHTML = Array.from(images).map(el => el.outerHTML).join('');
    images.forEach(img => img.remove());
    const htmlWithoutMedia = tempDiv.innerHTML;

    let htmlShortWithoutMedia = '';
    if (htmlShortEl) {
      const tempDiv2 = document.createElement('div');
      tempDiv2.innerHTML = htmlShortEl.innerHTML;
      const imagesShort = tempDiv2.querySelectorAll('img, iframe');
      imagesShort.forEach(img => img.remove());
      htmlShortWithoutMedia = tempDiv2.innerHTML;
    }

    const toggleHTML = htmlShortEl ? `
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
      <div class="modal-tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;
    document.getElementById('modal-title').textContent = jobTitle;
    document.getElementById('modal-subtitle').innerHTML = `<a href="${companyUrl}" target="_blank" class="modal-subtitle-company">${company}</a>`;
    document.getElementById('modal-header-dates').textContent = dates ? `📅 ${dates}` : '';
    document.getElementById('modal-header-links').innerHTML = location ? `<span class="modal-dates">📍 ${location}</span>` : '';

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
    const title = dataEl.dataset.title;
    const subtitle = dataEl.dataset.subtitle;
    const subtitleUrl = dataEl.dataset.subtitleUrl;
    const date = dataEl.dataset.date;
    const links = dataEl.dataset.links ? JSON.parse(dataEl.dataset.links) : null;

    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-subtitle').innerHTML = subtitle
      ? (subtitleUrl
          ? `<a href="${subtitleUrl}" target="_blank" class="modal-subtitle-company">${subtitle}</a>`
          : `<span class="modal-subtitle-company">${subtitle}</span>`)
      : '';
    document.getElementById('modal-header-dates').textContent = date ? `📅 ${date}` : '';
    document.getElementById('modal-header-links').innerHTML = (links && links.length)
      ? links.map(l => `<a href="${l.url}" target="_blank" class="modal-header-link">${l.emoji} ${l.label}</a>`).join('')
      : '';

    if (htmlLongEl) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlLongEl.innerHTML;
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

      if (htmlShortEl) {
        content = `
          <div class="exp-modal-toggle">
            <button class="exp-modal-toggle-btn exp-modal-toggle-short${isLong ? '' : ' active'}">highlights</button>
            <button class="exp-modal-toggle-btn exp-modal-toggle-long${isLong ? ' active' : ''}">in depth</button>
          </div>
          <div class="exp-modal-content exp-modal-short" style="display:${isLong ? 'none' : 'block'};">${htmlShortEl.innerHTML}</div>
          <div class="exp-modal-content exp-modal-long" style="display:${isLong ? 'block' : 'none'};"><div class="modal-proj-text">${cleanTextHTML}</div>${mediaSection}</div>
          <div class="modal-tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        `;
      } else {
        content = `<div class="modal-proj-text">${cleanTextHTML}</div>${mediaSection}<div class="modal-tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`;
      }
    } else {
      content = `<div class="modal-proj-text"><p></p></div><div class="modal-tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`;
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
    history.replaceState(null, '', '/');
    history.pushState(null, '', redirectPath);
    path = redirectPath;
  } else {
    path = window.location.pathname;
  }

  const parts = path.replace(/^\//, '').split('/');
  const [urlType, slug, view] = parts;
  const type = urlToType[urlType] || urlType;

  const sectionMap = { experience: 'experience', projects: 'projects', skills: 'skills', education: 'education', about: null };

  if (urlType && !slug) {
    if (urlType in sectionMap) {
      const sectionId = sectionMap[urlType];
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          document.fonts.ready.then(() => {
            const navOffset = document.querySelector('nav')?.offsetHeight || 0;
            const target = el.querySelector('.section-header') || el;
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navOffset });
          });
        }
      }
    } else {
      history.replaceState(null, '', '/');
    }
    return;
  }

  const id = slugToId[type] && slugToId[type][slug];
  if (id && document.getElementById(`modal-data-${type}-${id}`)) {
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
