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

/* ── Modal helpers ── */

function stripMedia(htmlEl) {
  const div = document.createElement('div');
  div.innerHTML = htmlEl ? htmlEl.innerHTML : '';
  const mediaEls = Array.from(div.querySelectorAll('img, iframe'));
  const mediaItems = mediaEls.map(el => el.outerHTML);
  mediaEls.forEach(el => el.remove());
  return { textHTML: div.innerHTML, mediaItems };
}

function buildToggleHTML(isLong, shortHTML, longHTML) {
  return `
    <div class="exp-modal-toggle">
      <button class="exp-modal-toggle-btn exp-modal-toggle-short${isLong ? '' : ' active'}" data-format="short">highlights</button>
      <button class="exp-modal-toggle-btn exp-modal-toggle-long${isLong ? ' active' : ''}" data-format="long">in depth</button>
    </div>
    <div class="exp-modal-content exp-modal-short" style="display:${isLong ? 'none' : 'block'};">${shortHTML}</div>
    <div class="exp-modal-content exp-modal-long" style="display:${isLong ? 'block' : 'none'};">${longHTML}</div>
  `;
}

function buildCarouselHTML(mediaItems) {
  if (mediaItems.length > 1) {
    return `
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
    return `<div class="exp-modal-media">${mediaItems[0]}</div>`;
  }
  return '';
}

function buildTagsHTML(tags) {
  return `<div class="modal-tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`;
}

function setModalHeader({ title, subtitle, dates, links }) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-subtitle').innerHTML = subtitle;
  document.getElementById('modal-header-dates').textContent = dates;
  document.getElementById('modal-header-links').innerHTML = links;
}

function buildExpContent(htmlShortEl, htmlLongEl, tags, isLong) {
  const { textHTML: longText, mediaItems } = stripMedia(htmlLongEl);
  const { textHTML: shortText } = stripMedia(htmlShortEl);
  const mediaHTML = mediaItems.join('');
  const longHTML = `${longText}${mediaHTML ? `<div class="exp-modal-media">${mediaHTML}</div>` : ''}`;
  const body = htmlShortEl
    ? buildToggleHTML(isLong, shortText, longHTML)
    : `<div class="exp-modal-content">${longHTML}</div>`;
  return body + buildTagsHTML(tags);
}

function buildProjContent(htmlShortEl, htmlLongEl, tags, isLong) {
  if (!htmlLongEl) {
    return `<div class="modal-proj-text"><p></p></div>${buildTagsHTML(tags)}`;
  }
  const { textHTML, mediaItems } = stripMedia(htmlLongEl);
  const cleanDiv = document.createElement('div');
  cleanDiv.innerHTML = textHTML;
  cleanDiv.querySelectorAll('div, section').forEach(el => {
    if (!el.textContent.trim() && !el.querySelector('img, iframe, video')) el.remove();
  });
  const mediaSection = buildCarouselHTML(mediaItems);
  const longHTML = `<div class="modal-proj-text">${cleanDiv.innerHTML.trim()}</div>${mediaSection}`;
  const body = htmlShortEl
    ? buildToggleHTML(isLong, htmlShortEl.innerHTML, longHTML)
    : longHTML;
  return body + buildTagsHTML(tags);
}

function bindToggle(type, id) {
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

function initCarousel() {
  setTimeout(() => {
    const carousel = document.querySelector('.modal-carousel');
    if (!carousel) return;
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
  }, 0);
}

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
  let content = '';

  if (type === 'exp' || type === 'edu') {
    const links = dataEl.dataset.links ? JSON.parse(dataEl.dataset.links) : null;
    setModalHeader({
      title: dataEl.dataset.jobTitle,
      subtitle: `<a href="${dataEl.dataset.companyUrl}" target="_blank" class="modal-subtitle-company">${dataEl.dataset.company}</a>`,
      dates: dataEl.dataset.dates ? `📅 ${dataEl.dataset.dates}` : '',
      links: dataEl.dataset.location ? `<span class="modal-dates">📍 ${dataEl.dataset.location}</span>` : '',
    });
    content = buildExpContent(htmlShortEl, htmlLongEl, tags, isLong);
  } else {
    const links = dataEl.dataset.links ? JSON.parse(dataEl.dataset.links) : null;
    setModalHeader({
      title: dataEl.dataset.title,
      subtitle: dataEl.dataset.subtitle
        ? (dataEl.dataset.subtitleUrl
            ? `<a href="${dataEl.dataset.subtitleUrl}" target="_blank" class="modal-subtitle-company">${dataEl.dataset.subtitle}</a>`
            : `<span class="modal-subtitle-company">${dataEl.dataset.subtitle}</span>`)
        : '',
      dates: dataEl.dataset.date ? `📅 ${dataEl.dataset.date}` : '',
      links: (links && links.length)
        ? links.map(l => `<a href="${l.url}" target="_blank" class="modal-header-link">${l.emoji} ${l.label}</a>`).join('')
        : '',
    });
    content = buildProjContent(htmlShortEl, htmlLongEl, tags, isLong);
  }

  document.getElementById('modal-body-content').innerHTML = content;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';

  if (!fromHash) setModalPath(type, id, view);
  if (htmlShortEl) bindToggle(type, id);
  initCarousel();
  setTimeout(() => { document.getElementById('modal').scrollTop = 0; }, 0);
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
