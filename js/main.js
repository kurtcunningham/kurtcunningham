(function () {

  // ===== Marquee =====

  const trackWrap = document.querySelector('.site-header__cta-track-wrap');
  const track     = document.querySelector('.site-header__cta-track');

  function sizeMarquee() {
    if (!trackWrap || !track) return;

    // Release constraints so we can measure the natural rendered width
    trackWrap.style.width    = 'max-content';
    trackWrap.style.overflow = 'visible';

    // Track contains two identical copies — divide by 2 for one copy's width
    const singleWidth = track.scrollWidth / 2;

    trackWrap.style.overflow = 'hidden';
    trackWrap.style.width    = singleWidth + 'px';
  }


  // ===== Name animation + parallax =====

  const nameEl    = document.querySelector('.site-header__name');
  const nameClone = document.querySelector('.site-header__name-clone');
  const headerEl  = document.querySelector('.site-header');
  const textCol   = document.querySelector('.site-main__text');
  const texts     = document.querySelectorAll('.project__text');
  const FACTOR    = 0.2;
  const GUTTER    = 16;
  let   ticking   = false;
  let   nameHome  = null;

  function computeClamp(minPx, vwCoeff, maxPx) {
    return Math.min(maxPx, Math.max(minPx, vwCoeff * window.innerWidth / 100));
  }

  function measureHome() {
    if (!nameEl || !nameClone) return;
    const rect = nameEl.getBoundingClientRect();
    nameHome = {
      docTop:   rect.top + window.scrollY,
      left:     rect.left,
      fontSize: computeClamp(44, 9, 180)
    };

    // Hand off rendering to the clone; h1 becomes a layout spacer only
    nameEl.style.visibility      = 'hidden';
    nameClone.style.visibility   = 'visible';
    nameClone.style.fontSize     = nameHome.fontSize + 'px';
    nameClone.style.top          = rect.top + 'px';
    nameClone.style.left         = rect.left + 'px';
  }

  function updateAll() {
    // --- Parallax ---
    texts.forEach(function (text) {
      var offset = text.getBoundingClientRect().top * FACTOR;
      text.style.transform = 'translateY(' + offset + 'px)';
    });

    // --- Name animation ---
    if (nameHome && nameClone && headerEl && textCol) {
      const scrollY     = window.scrollY;
      const scrollRange = headerEl.offsetHeight;
      const progress    = Math.min(1, Math.max(0, scrollY / scrollRange));

      const largeFontSize = nameHome.fontSize;
      const smallFontSize = computeClamp(24, 4.5, 64);

      const colRect     = textCol.getBoundingClientRect();
      const homeViewTop = nameHome.docTop - scrollY;

      const currentFontSize = largeFontSize + (smallFontSize - largeFontSize) * progress;
      const currentTop      = homeViewTop  + (GUTTER - homeViewTop) * progress;
      const currentLeft     = nameHome.left + (colRect.left - nameHome.left) * progress;

      nameClone.style.fontSize = currentFontSize + 'px';
      nameClone.style.top      = currentTop + 'px';
      nameClone.style.left     = currentLeft + 'px';

      // Drop behind text blocks once fully scaled
      nameClone.style.zIndex        = progress >= 1 ? '0' : '10';
      nameClone.style.pointerEvents = progress >= 1 ? 'none' : 'auto';
    }

    ticking = false;
  }

  // ===== Word explosion =====

  var WORDS = [
    'Designer', 'Developer', 'Journalist', 'Partner',
    'Thinker', 'Storyteller', 'Builder', 'Hawkeye',
    'Writer', 'Strategist', 'Intentional', 'Creative',
    'Maker', 'Curious', 'Resilient', 'Collaborative', 'Snowboarder',
    'Skateboarder', 'Dog Lover', 'Coffee Drinker'
  ];

  var COLORS = [
    'var(--secondary-aqua)',
    'var(--secondary-blue)',
    'var(--secondary-green)',
    'var(--secondary-salmon)'
  ];

  function explodeWords(x, y) {
    var words = shuffle(WORDS.slice()).slice(0, 2);

    words.forEach(function (word, i) {
      var el         = document.createElement('span');
      el.className   = 'name-word';
      el.textContent = word;

      var side  = i === 0 ? -1 : 1;
      var vx    = side * (50 + Math.random() * 60);
      var vyUp  = -(80 + Math.random() * 80);
      var vyDown = 280 + Math.random() * 180;

      el.style.left            = x + 'px';
      el.style.top             = y + 'px';
      el.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      el.style.setProperty('--vx', vx + 'px');
      el.style.setProperty('--vy-up', vyUp + 'px');
      el.style.setProperty('--vy-down', vyDown + 'px');
      el.style.animationDelay  = (i * 60) + 'ms';

      document.body.appendChild(el);
      el.addEventListener('animationend', function () { el.remove(); });
    });
  }

  if (textCol) {
    textCol.addEventListener('click', function (e) {
      explodeWords(e.clientX, e.clientY);
    });
  }


  // Rough initial measure so there's no invisible-name flash before fonts load
  measureHome();
  updateAll();

  // Refined measure once fonts are fully rendered
  document.fonts.ready.then(function () {
    sizeMarquee();

    measureHome();
    updateAll();
  });

  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateAll);
  }, { passive: true });

  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      sizeMarquee();
  
      measureHome();
      updateAll();
    }, 100);
  });


  // ===== Popup =====

  var popupEl       = document.getElementById('popup');
  var popupImg      = document.getElementById('popupImage');
  var popupCat      = document.getElementById('popupCategory');
  var popupTitleEl  = document.getElementById('popupTitle');
  var popupBody     = document.getElementById('popupBody');
  var popupBtn      = document.getElementById('popupBtn');
  var popupBackdrop = document.getElementById('popupBackdrop');

  function openPopup(item) {
    popupImg.src          = item.imgUrl;
    popupImg.alt          = item.imgAlt || item.title;
    popupCat.textContent  = item.category;
    popupTitleEl.innerHTML   = item.title;
    popupBody.innerHTML   = item.body;
    popupBtn.href         = item.link;
    popupBtn.textContent  = item.type === 'work' ? 'View Case Study' : 'View Post';
    popupEl.classList.add('is-open');
    popupEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closePopup() {
    popupEl.classList.remove('is-open');
    popupEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (popupBackdrop) popupBackdrop.addEventListener('click', closePopup);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePopup();
  });


  // ===== Content feed =====

  var API   = 'https://unrelated.co/wp-json/wp/v2';
  var EMBED = '&_embed';
  var mediaFigs = document.querySelectorAll('.site-main__media .project__media');

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  function decodeHtml(str) {
    var d = document.createElement('div');
    d.innerHTML = str;
    return d.textContent || '';
  }

  function normalise(post) {
    var media  = post._embedded && post._embedded['wp:featuredmedia'];
    var terms  = post._embedded && post._embedded['wp:term'];
    var imgUrl = media && media[0] && media[0].source_url || '';
    var imgAlt = media && media[0] && media[0].alt_text   || '';

    var category = '';
    if (terms) {
      if (post.type === 'work') {
        for (var t = 0; t < terms.length; t++) {
          if (terms[t] && terms[t][0] && terms[t][0].taxonomy === 'vertical') {
            category = decodeHtml(terms[t][0].name);
            break;
          }
        }
      } else {
        for (var t = 0; t < terms.length; t++) {
          if (terms[t] && terms[t][0] && terms[t][0].name) {
            category = decodeHtml(terms[t][0].name);
            break;
          }
        }
      }
    }

    var content = post.content && post.content.rendered || '';
    var body    = '';

    if (content) {
      var parsed      = new DOMParser().parseFromString(content, 'text/html');
      var firstSection = parsed.querySelector('section');
      var source      = firstSection || parsed.body;
      var allParas    = source.querySelectorAll('p');
      var collected   = [];

      for (var pi = 0; pi < allParas.length && collected.length < 2; pi++) {
        var text = allParas[pi].textContent.trim();
        if (text.length > 30) {
          collected.push('<p>' + allParas[pi].innerHTML + '</p>');
        }
      }

      body = collected.join('');
    }

    return {
      id:       post.id,
      type:     post.type,
      title:    post.title.rendered,
      body:     body,
      link:     post.link,
      category: category,
      imgUrl:   imgUrl,
      imgAlt:   imgAlt
    };
  }

  function renderMedia(items) {
    items.forEach(function (item, i) {
      var fig = mediaFigs[i + 1]; // slot 0 is the hardcoded hero image
      if (!fig) return;
      var img = fig.querySelector('.project__image');
      if (img && item.imgUrl) {
        img.src = item.imgUrl;
        img.alt = item.imgAlt || item.title;
      }
      fig.classList.add('project__media--feed');
      fig.style.cursor   = 'pointer';
      fig.dataset.postId   = item.id;
      fig.dataset.postType = item.type;
      fig.addEventListener('click', function () { openPopup(item); });
    });
  }

  Promise.all([
    fetch(API + '/work?per_page=10'  + EMBED).then(function (r) { return r.json(); }),
    fetch(API + '/posts?per_page=10' + EMBED).then(function (r) { return r.json(); })
  ]).then(function (results) {
    var work  = Array.isArray(results[0]) ? results[0].map(normalise) : [];
    var posts = Array.isArray(results[1]) ? results[1].map(normalise) : [];
    var mixed = shuffle(work.concat(posts)).slice(0, 8);
    window._feedItems = mixed;
    renderMedia(mixed);
  }).catch(function (err) {
    console.warn('Content feed failed:', err);
  });

}());
