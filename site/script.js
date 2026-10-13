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
let previousScrollY = window.scrollY;
function updateHeader() {
  const currentScrollY = window.scrollY;
  header.classList.toggle('is-scrolled', currentScrollY > 20);
  if (currentScrollY < 120 || header.classList.contains('menu-open') || currentScrollY < previousScrollY - 1) header.classList.remove('is-hidden');
  else if (currentScrollY > previousScrollY + 1) header.classList.add('is-hidden');
  previousScrollY = currentScrollY;
  const marker = innerHeight * .35;
  const currentSection = ['treatments', 'about', 'contact'].find((id) => {
    const bounds = document.getElementById(id).getBoundingClientRect();
    return bounds.top <= marker && bounds.bottom > marker;
  });
  document.querySelectorAll('.main-nav a').forEach((link) => {
    if (link.hash === `#${currentSection}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
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
const footerSection = document.querySelector('.site-footer');
function updateMobileActions() {
  mobileActions.hidden = heroSection.getBoundingClientRect().bottom > 0 || footerSection.getBoundingClientRect().top < innerHeight;
}
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

const treatmentTabs = [...document.querySelectorAll('.treatment-tab')];
const treatmentCards = [...document.querySelectorAll('.treatment-card')];
const viewAllTreatments = document.querySelector('.view-all');
let activeTreatmentCategory = 'injectables';
let allCategoryTreatmentsVisible = false;
let treatmentAnimationFrame;
function renderTreatments(animate = false) {
  cancelAnimationFrame(treatmentAnimationFrame);
  const matches = treatmentCards.filter((card) => card.dataset.category === activeTreatmentCategory);
  treatmentCards.forEach((card) => {
    card.classList.remove('is-entering');
    const categoryIndex = matches.indexOf(card);
    card.hidden = categoryIndex < 0 || (!allCategoryTreatmentsVisible && categoryIndex >= 4);
  });
  if (animate) treatmentAnimationFrame = requestAnimationFrame(() => {
    matches.filter((card) => !card.hidden).forEach((card, index) => {
      card.style.setProperty('--stagger', `${index * 50}ms`);
      card.classList.add('is-entering');
    });
  });
  treatmentTabs.forEach((tab) => tab.setAttribute('aria-pressed', String(tab.dataset.category === activeTreatmentCategory)));
  const category = treatmentTabs.find((tab) => tab.dataset.category === activeTreatmentCategory).textContent.trim().toLowerCase();
  viewAllTreatments.hidden = matches.length <= 4;
  viewAllTreatments.setAttribute('aria-expanded', String(allCategoryTreatmentsVisible));
  viewAllTreatments.textContent = allCategoryTreatmentsVisible ? `Show fewer ${category}` : `View all ${category}`;
}
function selectTreatmentCategory(category, focusTab = false) {
  if (category === activeTreatmentCategory) return;
  activeTreatmentCategory = category;
  allCategoryTreatmentsVisible = false;
  renderTreatments(true);
  const selectedTab = treatmentTabs.find((tab) => tab.dataset.category === category);
  if (focusTab) selectedTab.focus();
  if (matchMedia('(max-width: 767px)').matches) {
    const tabs = selectedTab.parentElement;
    tabs.scrollTo({ left: selectedTab.offsetLeft - tabs.offsetLeft - (tabs.clientWidth - selectedTab.clientWidth) / 2, behavior: 'smooth' });
    document.getElementById('treatment-grid').scrollLeft = 0;
  }
}
treatmentTabs.forEach((tab) => {
  tab.addEventListener('click', () => selectTreatmentCategory(tab.dataset.category));
  tab.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const step = event.key === 'ArrowRight' ? 1 : -1;
    const index = (treatmentTabs.indexOf(tab) + step + treatmentTabs.length) % treatmentTabs.length;
    selectTreatmentCategory(treatmentTabs[index].dataset.category, true);
  });
});
document.querySelector('.category-prev').addEventListener('click', () => {
  const index = (treatmentTabs.findIndex((tab) => tab.dataset.category === activeTreatmentCategory) - 1 + treatmentTabs.length) % treatmentTabs.length;
  selectTreatmentCategory(treatmentTabs[index].dataset.category);
});
document.querySelector('.category-next').addEventListener('click', () => {
  const index = (treatmentTabs.findIndex((tab) => tab.dataset.category === activeTreatmentCategory) + 1) % treatmentTabs.length;
  selectTreatmentCategory(treatmentTabs[index].dataset.category);
});
viewAllTreatments.addEventListener('click', () => {
  allCategoryTreatmentsVisible = !allCategoryTreatmentsVisible;
  renderTreatments();
});
document.querySelectorAll('.main-nav a[href^="#"]').forEach((link) => {
  const tab = document.querySelector(`.treatment-tab${link.getAttribute('href')}`);
  if (tab) link.addEventListener('click', () => tab.click());
});
renderTreatments();

const reviewViewport = document.querySelector('.review-viewport');
const reviewCards = [...document.querySelectorAll('.review-card')];
const reviewPrev = document.querySelector('.review-prev');
const reviewNext = document.querySelector('.review-next');
function reviewStep() { return reviewCards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(document.querySelector('.review-track')).gap || 0); }
function updateReviewArrows() {
  const max = reviewViewport.scrollWidth - reviewViewport.clientWidth;
  reviewPrev.disabled = reviewViewport.scrollLeft <= 2;
  reviewNext.disabled = reviewViewport.scrollLeft >= max - 2;
}
function moveReviews(direction) {
  reviewViewport.scrollBy({ left: reviewStep() * direction, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}
reviewPrev.addEventListener('click', () => moveReviews(-1));
reviewNext.addEventListener('click', () => moveReviews(1));
reviewViewport.addEventListener('scroll', updateReviewArrows, { passive: true });
addEventListener('resize', updateReviewArrows);
updateReviewArrows();
