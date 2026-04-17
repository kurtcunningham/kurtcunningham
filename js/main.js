/**
 * main.js
 * Kurt Cunningham — Portfolio
 *
 *  - Sizes .hero-name and .footer-cta-text to fill the viewport width
 *  - Shrinks the hero name as the user scrolls past the hero section
 *  - Builds a mixed carousel of case studies and Unrelated news
 *  - Opens a slide-up popup with post details on card click
 */

'use strict';


/* ==========================================================================
   Data — Case Studies
   ========================================================================== */

const CLIENTS = [
  {
    name: 'EFI Foundation',
    image: 'https://unrelated.co/wp-content/uploads/2025/12/efi-feat-img-edited.jpg',
    url: 'https://unrelated.co/clients/efi-foundation/',
    category: 'Nonprofit',
    body: '<p>EFI Foundation is committed to accelerating the global transition to clean, affordable energy. Their mission spans policy advocacy, research, and coalition-building across the world\'s most complex energy markets. As their reach grew, they needed a digital presence that matched their impact.</p><p>Unrelated designed and developed a new digital experience for EFI Foundation — one that centers storytelling, elevates their research, and gives visitors a clear path to understanding their work.</p>'
  },
  {
    name: 'Dare2tri',
    image: 'https://unrelated.co/wp-content/uploads/2026/01/dare2tri-feat-img-edited.jpg',
    url: 'https://unrelated.co/clients/dare2tri/',
    category: 'Nonprofit',
    body: '<p>Dare2tri is a nonprofit that believes every person, regardless of ability, deserves access to competitive sports. They train hundreds of athletes with physical disabilities and visual impairments each year, fostering community and championing inclusion in triathlon.</p><p>Unrelated helped Dare2tri build a more welcoming, accessible digital experience — one that reflects their mission and makes it easier for athletes, volunteers, and donors to connect with the organization.</p>'
  },
  {
    name: 'The Onion',
    image: 'https://unrelated.co/wp-content/uploads/2026/01/onion-feat-img-edited.jpg',
    url: 'https://unrelated.co/clients/the-onion/',
    category: 'Media',
    body: '<p>The Onion is one of the most recognized satirical publishers in the world. When they needed to replatform their website, the challenge wasn\'t just technical — it was finding a solution that could handle their unique publishing workflow, audience scale, and iconic brand.</p><p>Unrelated led the engineering effort to migrate The Onion to a modern, high-performance platform — dramatically improving page speed, editorial workflows, and long-term scalability.</p>'
  },
  {
    name: 'Illinois Answers Project',
    image: 'https://unrelated.co/wp-content/uploads/2026/01/iap-feat-img-edited.jpg',
    url: 'https://unrelated.co/clients/illinois-answers-project/',
    category: 'Media',
    body: '<p>Illinois Answers Project is an independent, nonprofit newsroom producing investigative journalism that holds power accountable in Illinois. Their reporting requires a digital platform that reflects the rigor and credibility of their work.</p><p>Unrelated built a clean, fast, and accessible website for IAP — one designed to center their journalism and make complex investigations easy for readers to explore and share.</p>'
  },
  {
    name: 'CNTI',
    image: 'https://unrelated.co/wp-content/uploads/2026/01/cnti-feat-img-edited.jpg',
    url: 'https://unrelated.co/clients/center-for-news-technology-innovation/',
    category: 'Media',
    body: '<p>When the Center for News, Technology & Innovation (CNTI) partnered with Unrelated Studio, the goal was clear: build a digital platform that reflects CNTI\'s leadership in media research and innovation. Their work spans complex policy topics, original research, and deep analysis — but their previous website made it difficult for audiences to find and engage with that content effectively.</p><p>The solution is a redesigned WordPress site that strengthens CNTI\'s brand, modernizes its digital experience, and introduces a new AI-powered content chat system that helps users explore research and insights through natural language.</p>'
  },
  {
    name: 'Rocky Mountain Institute',
    image: 'https://unrelated.co/wp-content/uploads/2025/04/rmi-work-featured-img.jpg',
    url: 'https://unrelated.co/clients/rmi/',
    category: 'Clean Energy',
    body: '<p>Rocky Mountain Institute (RMI) is a global nonprofit driving the clean energy transition through research, partnerships, and influence. Their communications team needed a reliable design partner who could translate complex climate science into compelling, shareable visuals.</p><p>Unrelated developed a suite of story-driven graphics and visual assets for RMI — helping their research reach policymakers, corporate partners, and the public in a way that drives action.</p>'
  },
  {
    name: 'Current',
    image: 'https://unrelated.co/wp-content/uploads/2026/01/current-feat-img.jpg',
    url: 'https://unrelated.co/clients/current/',
    category: 'Media',
    body: '<p>Current is a public media organization dedicated to journalism about public broadcasting and the media industry. When they decided to rebuild their website, they saw an opportunity to invest in tools the broader public media community could benefit from.</p><p>Unrelated led the redesign and helped kickstart a community-led approach to shared WordPress development — making it easier for public media organizations to adopt and maintain high-quality digital tools.</p>'
  },
  {
    name: 'Urban Initiatives',
    image: 'https://unrelated.co/wp-content/uploads/2026/01/ui-feat-img-edited.jpg',
    url: 'https://unrelated.co/clients/urban-initiatives/',
    category: 'Nonprofit',
    body: '<p>Urban Initiatives uses the power of soccer to foster healthy development and social well-being in underserved Chicago youth. Their work is deeply community-rooted, and their website needed to reflect the energy and optimism of the kids they serve.</p><p>Unrelated designed and developed a modern website for Urban Initiatives — one that tells the story of their impact through photography, statistics, and clear pathways for donors and volunteers to get involved.</p>'
  },
  {
    name: 'The Foley Foundation',
    image: 'https://unrelated.co/wp-content/uploads/2026/01/foley-foundation-feat-img-edited.jpg',
    url: 'https://unrelated.co/clients/the-foley-foundation/',
    category: 'Nonprofit',
    body: '<p>The Foley Foundation supports emerging American diplomats through fellowships and programming that prepare the next generation of global leaders. As their alumni network grew, they needed a digital presence worthy of their mission.</p><p>Unrelated delivered a clean, modern website that positions The Foley Foundation as a premier institution in diplomatic education and reflects the ambition of the leaders they cultivate.</p>'
  },
  {
    name: 'BW Research',
    image: 'https://unrelated.co/wp-content/uploads/2026/03/bwresearch-feat-img-edited.jpg',
    url: 'https://unrelated.co/clients/bw-research/',
    category: 'Research',
    body: '<p>BW Research is a leading economic and workforce research firm, publishing reports and studies that shape policy decisions across industries. Their existing digital presence didn\'t match the quality of their research or the breadth of their publishing output.</p><p>Unrelated built a modern publishing platform that makes it easy for BW Research to share new work, helps readers navigate their archive, and presents their findings with the credibility they deserve.</p>'
  },
  {
    name: 'ASMFC',
    image: 'https://unrelated.co/wp-content/uploads/2025/12/asmfc-feat-img.jpg',
    url: 'https://unrelated.co/clients/asmfc/',
    category: 'Research',
    body: '<p>The Atlantic States Marine Fisheries Commission oversees the management of 27 fish species along the Atlantic Coast. Their work requires constant communication with fishermen, scientists, policymakers, and the public — and their digital platform wasn\'t keeping pace.</p><p>Unrelated rebuilt the ASMFC website with speed, clarity, and accessibility as core priorities — making it easier for stakeholders to find information and stay engaged with ongoing fisheries management.</p>'
  },
  {
    name: 'Coronado News',
    image: 'https://unrelated.co/wp-content/uploads/2025/04/beach-sign-scaled.jpg',
    url: 'https://unrelated.co/clients/coronado-news/',
    category: 'Media',
    body: '<p>Coronado News is a weekly print newspaper serving the Coronado, California community. As they looked to grow their digital presence and streamline their publishing workflow, they needed a modern system built for both print rhythm and digital updates.</p><p>Unrelated built a custom publishing platform for Coronado News — one designed for weekly print production cycles, daily digital updates, and long-term editorial continuity.</p>'
  }
];


/* ==========================================================================
   Data — News API
   ========================================================================== */

const NEWS_API = 'https://unrelated.co/wp-json/wp/v2/posts?per_page=10&_embed&_fields=title,link,date,content,_links,_embedded';


/* ==========================================================================
   Header CTA marquee
   ========================================================================== */

/**
 * Constrains the marquee wrapper to exactly one copy of the text so only
 * one instance is visible at a time.
 *
 * Uses a hidden probe inside the track to measure the plain text width with
 * the correct inherited font styles, avoiding the trailing &nbsp; gap that
 * makes scrollWidth/2 slightly too wide.
 */
function initHeaderMarquee() {
  const wrap  = document.querySelector('.header-cta-track-wrap');
  const track = document.querySelector('.header-cta-track');
  if (!wrap || !track) return;

  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;';
  probe.textContent   = "LET'S WORK TOGETHER";
  track.appendChild(probe);
  const textWidth = probe.offsetWidth;
  track.removeChild(probe);

  wrap.style.maxWidth = textWidth + 'px';
}


/* ==========================================================================
   Hero name — viewport fill
   ========================================================================== */

let heroNameMaxSize = 0;
let heroNameMinSize = 0;

/**
 * Computes both the max and min font sizes for the hero name.
 *
 * Max: fills 75% of the viewport (left portion of the header).
 * Min: fills the space to the left of the hero photo (~44% of the
 *      viewport, since the photo occupies 54%). The name never shrinks
 *      below this — it always fills that column.
 */
function fitHeroText() {
  const el = document.getElementById('heroName');
  if (!el) return;

  const vw = window.innerWidth;

  // — Max size: 75% of viewport
  const maxTarget = Math.round(vw * 0.75) - 20;
  let lo = 10, hi = 800, mid;
  for (let i = 0; i < 24; i++) {
    mid = (lo + hi) / 2;
    el.style.fontSize = mid + 'px';
    el.scrollWidth > maxTarget ? (hi = mid) : (lo = mid);
  }
  heroNameMaxSize = lo;

  // — Min size: fill the space next to the hero photo (~44% of viewport)
  const minTarget = Math.round(vw * 0.44) - 20;
  lo = 10; hi = heroNameMaxSize;
  for (let i = 0; i < 24; i++) {
    mid = (lo + hi) / 2;
    el.style.fontSize = mid + 'px';
    el.scrollWidth > minTarget ? (hi = mid) : (lo = mid);
  }
  heroNameMinSize = lo;

  // Start at max
  el.style.fontSize = heroNameMaxSize + 'px';
}


/* ==========================================================================
   Footer CTA — viewport fill
   ========================================================================== */

/**
 * Same sizing algorithm applied to the footer CTA text.
 */
function fitFooterText() {
  const el = document.getElementById('footerCtaText');
  if (!el) return;

  const target = Math.round(window.innerWidth * 0.95);
  let lo = 10, hi = 800, mid;

  for (let i = 0; i < 24; i++) {
    mid = (lo + hi) / 2;
    el.style.fontSize = mid + 'px';
    el.scrollWidth > target ? (hi = mid) : (lo = mid);
  }

  el.style.fontSize = lo + 'px';
}


/* ==========================================================================
   Name scroll animation
   ========================================================================== */

/**
 * Shrinks the hero name from its full size down to heroNameMinSize
 * (the size that fills the space next to the hero photo) as the user
 * scrolls. Animation completes exactly when the hero section bottom
 * scrolls behind the sticky header — i.e. when the carousel comes
 * into view.
 */
function initNameScroll() {
  const nameEl      = document.getElementById('heroName');
  const heroSection = document.getElementById('heroSection');
  if (!nameEl || !heroSection) return;

  let ticking = false;

  function update() {
    if (!heroNameMaxSize || !heroNameMinSize) return;
    const siteHeader = document.getElementById('siteHeader');
    const headerH    = siteHeader ? siteHeader.offsetHeight : 0;
    const rect       = heroSection.getBoundingClientRect();
    // `bottom` = distance from sticky header bottom to hero section bottom.
    // Starts at heroSection.offsetHeight at scrollY=0; reaches 0 when hero is fully scrolled away.
    const bottom   = rect.bottom - headerH;
    const progress = Math.min(1, Math.max(0, 1 - bottom / heroSection.offsetHeight));
    const size     = heroNameMaxSize - (heroNameMaxSize - heroNameMinSize) * progress;
    nameEl.style.fontSize = size + 'px';

    if (progress >= 1) {
      // Hero section has scrolled away — translate the name up so it clips out
      // of the header's overflow:hidden boundary, giving the illusion it scrolled off.
      const heroEndScrollY = heroSection.offsetTop + heroSection.offsetHeight - headerH;
      const extraScroll    = Math.max(0, window.scrollY - heroEndScrollY);
      nameEl.style.transform = 'translateY(-' + extraScroll + 'px)';
    } else {
      nameEl.style.transform = '';
    }

    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
}


/* ==========================================================================
   News helpers
   ========================================================================== */

function categoryFromUrl(url) {
  try {
    const slug = new URL(url).pathname.replace(/^\/|\/$/g, '').split('/')[0];
    const map  = { amplify: 'Amplify', company: 'Company', insights: 'Insights', media: 'Media' };
    return map[slug] || 'News';
  } catch (_) {
    return 'News';
  }
}

function stripHtml(html) {
  const el = document.createElement('div');
  el.innerHTML = html;
  return (el.textContent || el.innerText || '').trim();
}

/**
 * Returns the first `count` <p> elements from an HTML string as HTML.
 * Falls back to a plain-text excerpt if no paragraphs are found.
 */
function extractParagraphs(html, count) {
  const div = document.createElement('div');
  div.innerHTML = html;
  const ps = Array.from(div.querySelectorAll('p')).slice(0, count);
  if (!ps.length) {
    return '<p>' + stripHtml(html).substring(0, 500) + '</p>';
  }
  return ps.map(function (p) { return p.outerHTML; }).join('');
}


/* ==========================================================================
   News fetch
   ========================================================================== */

/**
 * Fetches the 10 most recent Unrelated posts.
 * Returns an empty array on failure so the carousel still renders.
 */
async function fetchNews() {
  try {
    const res = await fetch(NEWS_API);
    if (!res.ok) throw new Error('HTTP ' + res.status);

    const posts = await res.json();

    return posts.map(function (post) {
      const url   = post.link || '';
      const media = post._embedded?.['wp:featuredmedia']?.[0];
      const image = media?.media_details?.sizes?.large?.source_url
                 || media?.source_url
                 || '';

      // Prefer the category name embedded in the post
      const termName = post._embedded?.['wp:term']?.[0]?.[0]?.name;
      const category = termName || categoryFromUrl(url);

      return {
        type:     'news',
        name:     stripHtml(post.title?.rendered || ''),
        url,
        image,
        category,
        body:     extractParagraphs(post.content?.rendered || '', 2)
      };
    });
  } catch (err) {
    console.warn('Unrelated news could not be loaded:', err);
    return [];
  }
}


/* ==========================================================================
   Carousel
   ========================================================================== */

// Keyed store for popup data — avoids encoding large bodies in the DOM.
const CARD_DATA = {};
let cardIdSeed = 0;

/**
 * Interleaves two arrays: [a0, b0, a1, b1, ...]
 */
function interleave(a, b) {
  const out = [];
  const len = Math.max(a.length, b.length);
  for (let i = 0; i < len; i++) {
    if (i < a.length) out.push(a[i]);
    if (i < b.length) out.push(b[i]);
  }
  return out;
}

/**
 * Creates a single carousel card element and registers its popup data.
 */
function makeCard(item) {
  const id = 'c' + (++cardIdSeed);
  CARD_DATA[id] = item;

  const btn = document.createElement('button');
  btn.type      = 'button';
  btn.className = 'carousel-card';
  btn.dataset.cardId = id;

  btn.innerHTML =
    '<span class="card-label">' + escapeHtml(item.category) + '</span>' +
    '<h3 class="card-title">' + escapeHtml(item.name) + '</h3>' +
    '<div class="card-img-wrap">' +
      '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.name) + '" loading="lazy">' +
    '</div>';

  btn.addEventListener('click', function () {
    openPopup(CARD_DATA[btn.dataset.cardId]);
  });

  return btn;
}

/**
 * Builds and inserts the carousel: interleaved case studies + news,
 * duplicated for a seamless CSS marquee loop.
 */
function buildCarousel(newsItems) {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  const clientItems = CLIENTS.map(function (c) {
    return { type: 'case-study', name: c.name, image: c.image, url: c.url, category: c.category, body: c.body };
  });

  const mixed = interleave(clientItems, newsItems);

  // Two identical passes so translateX(-50%) loops seamlessly
  mixed.concat(mixed).forEach(function (item) {
    track.appendChild(makeCard(item));
  });
}


/* ==========================================================================
   Popup
   ========================================================================== */

function openPopup(item) {
  const popup    = document.getElementById('cardPopup');
  const img      = document.getElementById('popupImage');
  const category = document.getElementById('popupCategory');
  const title    = document.getElementById('popupTitle');
  const body     = document.getElementById('popupBody');
  const btn      = document.getElementById('popupBtn');
  if (!popup) return;

  img.src          = item.image;
  img.alt          = item.name;
  category.textContent = item.category.toUpperCase();
  title.textContent    = item.name;
  body.innerHTML       = item.body;
  btn.href             = item.url;
  btn.textContent      = item.type === 'case-study' ? 'View Case Study' : 'Read Article';

  popup.classList.add('is-open');
  popup.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  const popup = document.getElementById('cardPopup');
  if (!popup) return;
  popup.classList.remove('is-open');
  popup.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initPopup() {
  document.getElementById('popupClose')?.addEventListener('click', closePopup);
  document.getElementById('popupBackdrop')?.addEventListener('click', closePopup);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePopup();
  });
}


/* ==========================================================================
   Utility
   ========================================================================== */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}


/* ==========================================================================
   Init
   ========================================================================== */

async function init() {
  // Wait for Geist to load before any text measurements
  await document.fonts.ready;

  initHeaderMarquee();
  fitHeroText();
  fitFooterText();
  initNameScroll();
  initPopup();

  const newsItems = await fetchNews();
  buildCarousel(newsItems);

  window.addEventListener('resize', function () {
    initHeaderMarquee();
    fitHeroText();
    fitFooterText();
  });
}

init();
