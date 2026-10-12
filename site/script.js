/* Progressive enhancement only: navigation, header, and a quiet entrance. */
document.documentElement.classList.add('js');
const header = document.querySelector('.site-header');
const menu = document.querySelector('.main-nav');
const toggle = document.querySelector('.menu-toggle');
toggle.hidden = false;

function closeMenu(returnFocus = false) {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open menu');
  menu.classList.remove('is-open');
  header.classList.remove('menu-open');
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menu.classList.toggle('is-open', open);
  header.classList.toggle('menu-open', open);
});
menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', (event) => {
  if (!header.contains(event.target)) closeMenu();
});
matchMedia('(min-width: 961px)').addEventListener('change', () => closeMenu());
function updateHeader() { header.classList.toggle('is-scrolled', window.scrollY > 20); }
addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// A real poster is the first paint. Never fetch motion for reduced-motion/data-saving users.
const heroVideo = document.querySelector('.hero-video');
const videoToggle = document.querySelector('.motion-toggle');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let videoPausedByUser = false;
function allowHeroVideo() {
  const connection = navigator.connection;
  if (reducedMotion.matches || connection?.saveData) return false;
  if (matchMedia('(max-width: 767px)').matches) {
    return Boolean(connection && connection.effectiveType === '4g' && connection.downlink >= 2);
  }
  return !connection || !['slow-2g', '2g', '3g'].includes(connection.effectiveType);
}
function startHeroVideo() {
  if (!allowHeroVideo() || videoPausedByUser) return;
  if (!heroVideo.getAttribute('src')) heroVideo.src = heroVideo.dataset.src;
  heroVideo.play().catch(() => { videoToggle.hidden = true; });
}
heroVideo.addEventListener('playing', () => {
  heroVideo.classList.add('is-playing');
  videoToggle.hidden = false;
  videoToggle.textContent = 'Pause video';
});
videoToggle.addEventListener('click', () => {
  videoPausedByUser = !heroVideo.paused;
  if (videoPausedByUser) { heroVideo.pause(); videoToggle.textContent = 'Play video'; }
  else startHeroVideo();
});
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) { heroVideo.pause(); heroVideo.classList.remove('is-playing'); videoToggle.hidden = true; }
  else startHeroVideo();
});
addEventListener('load', () => {
  if ('requestIdleCallback' in window) requestIdleCallback(startHeroVideo, { timeout: 3000 });
  else setTimeout(startHeroVideo, 1500);
});

const mobileActions = document.querySelector('.mobile-actions');
const heroSection = document.querySelector('.hero');
function updateMobileActions() { mobileActions.hidden = heroSection.getBoundingClientRect().bottom > 0; }
addEventListener('scroll', updateMobileActions, { passive: true });
addEventListener('resize', updateMobileActions);
updateMobileActions();
// Category anchors also work while the legacy directory is closed.
document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', () => {
  const target = document.getElementById(link.hash.slice(1));
  const details = target?.closest('details');
  if (details) details.open = true;
}));

const mapFrame = document.querySelector('.contact-map iframe');
const mapFallback = document.querySelector('.map-fallback');
let mapLoaded = false;
let mapInView = false;
function updateMapFallback() { mapFallback.hidden = mapLoaded && mapInView; }
mapFrame.addEventListener('load', () => { mapLoaded = true; updateMapFallback(); });
mapFrame.addEventListener('error', () => { mapLoaded = false; updateMapFallback(); });
// Google can suspend offscreen map rendering. Keep a useful address card in that state.
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => { mapInView = entry.isIntersecting; updateMapFallback(); }).observe(mapFrame);
} else { mapInView = true; }

const treatmentRows = [...document.querySelectorAll('.treatment-row')];
const treatmentFilters = document.querySelector('.treatment-filters');
const treatmentStatus = document.querySelector('#treatment-status');
treatmentFilters.hidden = false;
function filterTreatments(value, concern = false) {
  let count = 0;
  treatmentRows.forEach((row) => {
    const show = value === 'all' || (concern ? row.dataset.concerns.split(' ').includes(value) : row.dataset.category === value);
    row.hidden = !show;
    if (show) count++;
  });
  treatmentFilters.querySelectorAll('button').forEach((button) => button.setAttribute('aria-pressed', String(!concern && button.dataset.category === value)));
  const label = concern ? document.querySelector(`[data-concern="${value}"] .tile-title`).textContent : value === 'all' ? 'All treatments' : value.charAt(0).toUpperCase() + value.slice(1);
  treatmentStatus.textContent = `${label} · ${count} ${count === 1 ? 'option' : 'options'}`;
}
treatmentFilters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (button) filterTreatments(button.dataset.category);
});
document.querySelectorAll('[data-concern]').forEach((link) => link.addEventListener('click', () => {
  filterTreatments(link.dataset.concern, true);
  document.querySelector('#treatment-list').focus({ preventScroll: true });
}));
function handleCategoryHash() {
  const category = location.hash.slice(1);
  if (['injectables', 'skin', 'wellness'].includes(category)) filterTreatments(category);
  if (category === 'treatments') filterTreatments('all');
}
addEventListener('hashchange', handleCategoryHash);
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => {
  const category = link.hash.slice(1);
  if (['injectables', 'skin', 'wellness'].includes(category)) filterTreatments(category);
  else if (category === 'treatments') filterTreatments('all');
}));
handleCategoryHash();

const reviewsSection = document.querySelector('.reviews');
const reviewPause = document.querySelector('.review-pause');
let reviewsPausedByUser = false;
document.querySelectorAll('.marquee-group').forEach((group) => {
  const copy = group.cloneNode(true);
  copy.classList.add('marquee-clone');
  copy.setAttribute('aria-hidden', 'true');
  copy.inert = true;
  group.parentElement.append(copy);
});
reviewsSection.classList.add('marquee-ready');
function syncReviewMotion() {
  reviewPause.hidden = reducedMotion.matches;
  reviewsSection.classList.toggle('is-paused', reviewsPausedByUser || reducedMotion.matches);
}
reviewPause.addEventListener('click', () => {
  reviewsPausedByUser = !reviewsPausedByUser;
  reviewPause.setAttribute('aria-pressed', String(reviewsPausedByUser));
  reviewPause.textContent = reviewsPausedByUser ? 'Play reviews' : 'Pause reviews';
  syncReviewMotion();
});
reducedMotion.addEventListener('change', syncReviewMotion);
syncReviewMotion();
