/* =========================================================
   Identities — edit this list to change text or colour.
   `verb` labels the identity's progress bar; `line` is the short
   sentence under the big word.
   `section` + `sectionLabel`: where the hero's jump link and index row
   lead for this identity (leave unset until the section exists);
   keep `accent` in sync with the section's data-accent.
   ========================================================= */
const ROLES = [
  { title: 'Student',            verb: 'Learning',  line: 'Always learning.',                   accent: '#2563eb', section: '#student', sectionLabel: 'Education & Personal Learning' },
  { title: 'Software Architect', verb: 'Building',  line: 'Building, end to end.',              accent: '#7c3aed', section: '#architect', sectionLabel: 'Projects & AI' },
  { title: 'Hardware Engineer',  verb: 'Wiring',    line: 'Wiring ideas into the real world.',  accent: '#ea580c', section: '#hardware', sectionLabel: 'Deployment & Competitions' },
  { title: 'Server O&M',         verb: 'Hosting',   line: 'Keeping things running.',            accent: '#059669', section: '#server', sectionLabel: 'The Homelab' },
  { title: 'Technical Writer',   verb: 'Explaining', line: 'Making hard things clear.',          accent: '#e11d48', section: '#writing', sectionLabel: 'The Book & Translations' },
];

const root = document.documentElement;
const hero = document.getElementById('hero');
const stage = document.getElementById('roleStage');
const progress = document.getElementById('progress');
const roleLine = document.getElementById('roleLine');
const nav = document.getElementById('nav');
const jump = document.getElementById('jump');
const jumpText = document.getElementById('jumpText');
const jumpKicker = document.getElementById('jumpKicker');
const jumpTitle = document.getElementById('jumpTitle');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const pad = (n) => String(n).padStart(2, '0');

let current = -1;
let heroInView = true;

const bars = ROLES.map((role, i) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'progress__item';
  btn.setAttribute('role', 'tab');
  btn.setAttribute('aria-label', role.title);
  btn.innerHTML = `<span class="progress__fill"></span><span class="progress__label">${role.verb}</span>`;
  btn.addEventListener('click', () => setRole(i));
  // Advance when the active bar finishes filling — this keeps
  // the timer in sync with the bars and makes pausing trivial.
  btn.querySelector('.progress__fill').addEventListener('animationend', () => {
    if (i === current) setRole((current + 1) % ROLES.length);
  });
  progress.append(btn);
  return btn;
});

/* ---------- Rotating word ---------- */
function buildWord(text) {
  const word = document.createElement('span');
  word.className = 'role__word is-entering';
  [...text].forEach((ch, i) => {
    const c = document.createElement('span');
    c.className = 'char';
    c.style.setProperty('--i', i);
    c.textContent = ch === ' ' ? ' ' : ch;
    word.append(c);
  });
  return word;
}

function swapWord(text) {
  stage.querySelectorAll('.role__word:not(.is-leaving)').forEach((old) => {
    old.classList.add('is-leaving');
    setTimeout(() => old.remove(), 800);
  });

  const word = buildWord(text);
  stage.append(word);
  void word.offsetWidth; // commit the "entering" state before transitioning out of it
  word.classList.remove('is-entering');
}

/* ---------- Jump link: follows the current identity ---------- */
function updateJump(role, i, instant) {
  const hasSection = Boolean(role.section && document.querySelector(role.section));

  const apply = () => {
    jumpKicker.textContent = hasSection ? `Jump to · ${pad(i + 1)}` : `Section ${pad(i + 1)}`;
    jumpTitle.textContent = hasSection ? role.sectionLabel || role.title : 'Coming soon';
    if (hasSection) jump.setAttribute('href', role.section);
    else jump.removeAttribute('href');
    jump.classList.toggle('is-disabled', !hasSection);
    jump.setAttribute('aria-disabled', String(!hasSection));
    jump.setAttribute('aria-label', hasSection ? `Jump to ${role.title}: ${jumpTitle.textContent}` : `${role.title} section coming soon`);
  };

  if (instant) return apply();
  jumpText.classList.add('is-swapping');
  setTimeout(() => {
    apply();
    jumpText.classList.remove('is-swapping');
  }, 250);
}

/* ---------- Main switch ---------- */
function setRole(next) {
  if (next === current) return;
  const prev = current;
  current = next;
  const role = ROLES[next];

  if (heroInView) root.style.setProperty('--accent', role.accent);
  swapWord(role.title);

  updateJump(role, next, prev < 0);

  // The short line under the word
  roleLine.classList.add('is-swapping');
  setTimeout(() => {
    roleLine.textContent = role.line;
    roleLine.classList.remove('is-swapping');
  }, prev < 0 ? 0 : 250);

  // Progress bars
  bars.forEach((b, i) => {
    b.classList.remove('is-active');
    b.classList.toggle('is-done', i < next);
    b.setAttribute('aria-selected', String(i === next));
  });
  void bars[next].offsetWidth; // restart fill animation
  bars[next].classList.add('is-active');
}

/* ---------- Pause while hovering the image, tab hidden, or scrolled away ---------- */
const pauseReasons = new Set();
function setPaused(reason, on) {
  on ? pauseReasons.add(reason) : pauseReasons.delete(reason);
  hero.classList.toggle('is-paused', pauseReasons.size > 0);
}
// Hovering the word, the bars or the button freezes the identity, so it can't change under the cursor
[stage, progress, jump].forEach((el) => {
  el.addEventListener('pointerenter', (e) => e.pointerType === 'mouse' && setPaused('hover', true));
  el.addEventListener('pointerleave', () => setPaused('hover', false));
});
document.addEventListener('visibilitychange', () => setPaused('hidden', document.hidden));

/* =========================================================
   Sections
   ========================================================= */
const sections = [...document.querySelectorAll('.section[data-accent]')];
const navLinks = [...document.querySelectorAll('.nav__links a[data-section]')];
sections.forEach((s) => s.style.setProperty('--accent', s.dataset.accent));

// Whatever crosses the middle of the viewport owns the page accent
// (nav dot, selection colour…). The hero keeps rotating only while it owns it.
const accentObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      heroInView = entry.target === hero;
      setPaused('offscreen', !heroInView);
      hero.classList.toggle('is-offscreen', !heroInView);
      // Nav: mark the link of the section being read
      navLinks.forEach((a) => {
        const on = !heroInView && a.dataset.section === entry.target.id;
        a.classList.toggle('is-active', on);
        on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current');
      });
      root.style.setProperty(
        '--accent',
        heroInView ? ROLES[current].accent : entry.target.dataset.accent
      );
      // The page background takes a faint tint of that colour (none for the neutral sections)
      root.style.setProperty('--tint', heroInView ? '2%' : entry.target.dataset.tint || '3%');
    });
  },
  { rootMargin: '-50% 0px -50% 0px' }
);
[hero, ...sections].forEach((el) => accentObserver.observe(el));

/* ---------- Hero ink: the pointer leaves a soft wake of colour that fades away ---------- */
{
  const canvas = hero.querySelector('.hero__ink');
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    const SCALE = 0.25; // the stamps are soft, so a quarter-size canvas looks the same and costs little
    const LIFE = 1900; // ms a stamp stays
    const STEP = 22; // px of travel between stamps
    const MAX = 220;
    let stamps = [];
    let head = null; // where the pointer is now (it always carries a little light)
    let last = null;
    let raf = 0;

    const resize = () => {
      const r = hero.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(r.width * SCALE));
      canvas.height = Math.max(1, Math.round(r.height * SCALE));
    };
    new ResizeObserver(resize).observe(hero);
    resize();

    // The identity's colour, plus a few neighbours on the colour wheel
    const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
    const shifted = (hex, turn) => {
      const [r, g, b] = hexToRgb(hex).map((v) => v / 255);
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const l = (max + min) / 2;
      const d = max - min;
      let h = 0;
      let s = 0;
      if (d) {
        s = d / (1 - Math.abs(2 * l - 1));
        h = max === r ? ((g - b) / d + 6) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      h = (h + turn + 360) % 360;
      const L = Math.min(0.72, l + 0.06);
      const C = (1 - Math.abs(2 * L - 1)) * s;
      const X = C * (1 - Math.abs(((h / 60) % 2) - 1));
      const m = L - C / 2;
      const [rr, gg, bb] = [[C, X, 0], [X, C, 0], [0, C, X], [0, X, C], [X, 0, C], [C, 0, X]][Math.floor(h / 60) % 6];
      return [rr + m, gg + m, bb + m].map((v) => Math.round(v * 255));
    };
    const TURNS = [0, 0, -34, 38];
    const pick = () => shifted(ROLES[current].accent, TURNS[Math.floor(Math.random() * TURNS.length)]);

    const stamp = (x, y, boost = 1) => {
      stamps.push({ x, y, t0: performance.now(), r: 150 + Math.random() * 70, c: pick(), boost });
      if (stamps.length > MAX) stamps.shift();
    };

    const soft = (x, y, r, [R, G, B], a) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${R},${G},${B},${a})`);
      g.addColorStop(1, `rgba(${R},${G},${B},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    };

    const draw = (now) => {
      raf = 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stamps = stamps.filter((s) => now - s.t0 < LIFE);
      for (const s of stamps) {
        const k = 1 - (now - s.t0) / LIFE;
        soft(s.x * SCALE, s.y * SCALE, s.r * SCALE, s.c, 0.05 * s.boost * k * k);
      }
      if (head) soft(head.x * SCALE, head.y * SCALE, 130 * SCALE, hexToRgb(ROLES[current].accent), 0.16);
      if (stamps.length || head) raf = requestAnimationFrame(draw);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };

    document.addEventListener(
      'pointermove',
      (e) => {
        const r = hero.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        if (x < 0 || y < 0 || x > r.width || y > r.height) {
          head = null;
          last = null;
          return;
        }
        head = { x, y };
        if (!last) {
          stamp(x, y);
          last = { x, y };
        } else {
          const dx = x - last.x;
          const dy = y - last.y;
          const dist = Math.hypot(dx, dy);
          if (dist >= STEP) {
            const n = Math.ceil(dist / STEP);
            for (let i = 1; i <= n; i++) stamp(last.x + (dx * i) / n, last.y + (dy * i) / n);
            last = { x, y };
          }
        }
        kick();
      },
      { passive: true }
    );
    // A tap (or a press) splashes colour too, which is what touch screens get
    hero.addEventListener(
      'pointerdown',
      (e) => {
        const r = hero.getBoundingClientRect();
        for (let i = 0; i < 4; i++) stamp(e.clientX - r.left + (Math.random() - 0.5) * 60, e.clientY - r.top + (Math.random() - 0.5) * 60, 1.6);
        kick();
      },
      { passive: true }
    );
    const leave = () => {
      head = null;
      last = null;
    };
    document.documentElement.addEventListener('pointerleave', leave);
    document.addEventListener('pointercancel', leave);
    document.addEventListener('visibilitychange', () => document.hidden && leave());
  }
}

/* ---------- Phone menu ---------- */
const navToggle = document.querySelector('.nav__toggle');
const setMenu = (open) => {
  nav.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
};
navToggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
navLinks.forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));
document.addEventListener('pointerdown', (e) => !nav.contains(e.target) && setMenu(false));
window.matchMedia('(min-width: 641px)').addEventListener('change', () => setMenu(false));

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      entry.target.querySelectorAll('[data-count]').forEach(countUp);
      revealObserver.unobserve(entry.target);
    });
  },
  { rootMargin: '0px 0px -12% 0px' }
);
document.querySelectorAll('.fade-up').forEach((el) => revealObserver.observe(el));

/* ---------- Carousels (several screenshots in one frame) ---------- */
document.querySelectorAll('[data-carousel]').forEach((root) => {
  const slides = [...root.querySelectorAll('.carousel__slide')];
  const caption = root.querySelector('.carousel__caption');
  const dotsWrap = root.querySelector('.carousel__dots');
  let index = 0;
  let timer = null;

  const dots = slides.map((slide, n) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel__dot';
    dot.setAttribute('aria-label', `Show screenshot: ${slide.dataset.caption}`);
    dot.addEventListener('click', () => show(n));
    dotsWrap.append(dot);
    return dot;
  });

  function show(n) {
    index = n;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === n));
    dots.forEach((d, k) => d.classList.toggle('is-active', k === n));
    caption.textContent = slides[n].dataset.caption;
  }

  const stop = () => clearInterval(timer);
  const start = () => {
    stop();
    if (!reduceMotion) timer = setInterval(() => step(1), 3500);
  };

  const step = (delta) => show((index + delta + slides.length) % slides.length);
  root.querySelector('.carousel__nav--prev').addEventListener('click', () => step(-1));
  root.querySelector('.carousel__nav--next').addEventListener('click', () => step(1));

  // Hold still while the pointer is over it, so a slide can be read or clicked
  root.addEventListener('pointerenter', stop);
  root.addEventListener('pointerleave', start);

  show(0);
  start();
});

/* ---------- Lightbox (images open full size) ---------- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox__img');

function openLightbox(img) {
  lightboxImg.src = img.currentSrc || img.src;
  lightboxImg.alt = img.alt;
  lightbox.showModal();
}

document.querySelectorAll('[data-lightbox]').forEach((btn) => {
  // In a carousel, open whichever slide is showing
  btn.addEventListener('click', () => openLightbox(btn.querySelector('img.is-active') || btn.querySelector('img')));
});

// "Show credential": opens the verification URL in a new tab when one is set,
// otherwise falls back to showing the certificate image.
document.querySelectorAll('[data-credential]').forEach((btn) => {
  const url = btn.dataset.credential.trim();
  if (url) {
    btn.href = url;
    btn.target = '_blank';
    btn.rel = 'noopener';
    return;
  }
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const img = btn.closest('.tile')?.querySelector('.tile__media img');
    if (img) openLightbox(img);
  });
});
lightbox.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close());
// Click on the dimmed backdrop (the dialog element itself, outside the image) closes it
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.close();
});

// Links whose destination isn't built yet: clicking does nothing (hovering shows "Coming soon")
document.querySelectorAll('a[data-placeholder]').forEach((a) => {
  a.addEventListener('click', (e) => e.preventDefault());
});

/* ---------- Beyond the five: colours drift only while on screen; hovering a topic lets its colour lead ---------- */
{
  const curious = document.getElementById('curious');
  if (curious) {
    new IntersectionObserver(([entry]) => curious.classList.toggle('is-live', entry.isIntersecting)).observe(curious);
    const lead = (key) => (key ? (curious.dataset.active = key) : delete curious.dataset.active);
    curious.querySelectorAll('.topic').forEach((li) => {
      li.addEventListener('pointerenter', (e) => e.pointerType === 'mouse' && lead(li.dataset.topic));
      li.addEventListener('pointerleave', () => lead(''));
      li.addEventListener('focusin', () => lead(li.dataset.topic));
      li.addEventListener('focusout', () => lead(''));
    });
  }
}

/* ---------- Book: cover and callouts drift with the pointer, at different depths ---------- */
if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.book__visual').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      el.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--px', 0);
      el.style.setProperty('--py', 0);
    });
  });
}

/* ---------- Copy the email address ---------- */
document.querySelectorAll('[data-copy]').forEach((btn) => {
  const label = btn.textContent;
  let timer = 0;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = 'Copied ✓';
    } catch {
      // No clipboard access (e.g. an insecure origin): select the text so Ctrl+C works
      btn.textContent = btn.dataset.copy;
    }
    clearTimeout(timer);
    timer = setTimeout(() => (btn.textContent = label), 2000);
  });
});

/* ---------- Homelab uptime: counts up from data-boot, once a second ---------- */
document.querySelectorAll('[data-boot]').forEach((el) => {
  const boot = Date.parse(el.dataset.boot);
  const fields = {};
  const ROLL_MS = 550;

  // Each digit is a tiny column: the old digit slides up and the new one rises into place
  const cell = (ch) => {
    const s = document.createElement('span');
    s.className = 'ops__dg-cell';
    s.textContent = ch;
    return s;
  };
  const buildDigits = (f, text) => {
    f.sizer.textContent = text;
    f.roll.replaceChildren();
    f.digits = [...text].map((ch) => {
      const dg = document.createElement('span');
      dg.className = 'ops__dg';
      const strip = document.createElement('span');
      strip.className = 'ops__dg-strip';
      strip.append(cell(ch));
      dg.append(strip);
      f.roll.append(dg);
      return { strip, ch, timer: 0 };
    });
    f.text = text;
  };
  const settle = (d) => {
    clearTimeout(d.timer);
    d.strip.classList.add('is-reset');
    d.strip.classList.remove('is-rolling');
    d.strip.replaceChildren(cell(d.ch));
  };
  el.querySelectorAll('[data-uptime]').forEach((n) => {
    const f = { n, sizer: document.createElement('span'), roll: document.createElement('span') };
    f.sizer.className = 'ops__sizer';
    f.roll.className = 'ops__roll';
    f.roll.setAttribute('aria-hidden', 'true');
    const start = n.textContent.trim();
    n.replaceChildren(f.sizer, f.roll);
    buildDigits(f, start);
    fields[n.dataset.uptime] = f;
  });

  const set = (key, text) => {
    const f = fields[key];
    if (!f || f.text === text) return;
    if (reduceMotion || text.length !== f.digits.length) {
      buildDigits(f, text); // first fill, or the number gained a digit
      return;
    }
    f.sizer.textContent = text;
    [...text].forEach((ch, i) => {
      const d = f.digits[i];
      if (d.ch === ch) return;
      settle(d);
      d.strip.append(cell(ch));
      void d.strip.offsetWidth; // start the roll from the settled state
      d.strip.classList.remove('is-reset');
      d.strip.classList.add('is-rolling');
      d.ch = ch;
      d.timer = setTimeout(() => settle(d), ROLL_MS + 60);
    });
    f.text = text;
  };

  const render = () => {
    const s = Math.max(0, Math.floor((Date.now() - boot) / 1000));
    set('days', String(Math.floor(s / 86400)));
    set('hours', pad(Math.floor((s % 86400) / 3600)));
    set('minutes', pad(Math.floor((s % 3600) / 60)));
    set('seconds', pad(s % 60));
  };
  render();
  setInterval(render, 1000);

  // One bar per week since boot, like a status page
  const bars = el.querySelector('.ops__bars');
  if (bars) {
    const WEEK = 7 * 86400 * 1000;
    const count = Math.floor((Date.now() - boot) / WEEK) + 1;
    const incidents = (el.dataset.incidents || '')
      .split(',')
      .map((d) => Date.parse(d.trim()))
      .filter(Number.isFinite);
    const fmt = (t) => new Date(t).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Australia/Brisbane' });
    for (let i = 0; i < count; i++) {
      const start = boot + i * WEEK;
      const bad = incidents.some((t) => t >= start && t < start + WEEK);
      const bar = document.createElement('i');
      bar.className = 'ops__bar';
      if (i < 7) bar.classList.add('tip-start');
      if (i >= count - 7) bar.classList.add('tip-end');
      if (bad) bar.classList.add('is-incident');
      if (i === count - 1) bar.classList.add('is-now');
      bar.style.setProperty('--i', i);
      bar.dataset.tip = `${i === count - 1 ? 'This week' : `Week of ${fmt(start)}`} · ${bad ? 'incident' : 'operational'}`;
      bars.append(bar);
    }
    const since = el.querySelector('[data-since]');
    if (since) since.textContent = new Date(boot).toLocaleDateString('en-AU', { month: 'short', year: 'numeric', timeZone: 'Australia/Brisbane' });
    const summary = el.querySelector('[data-summary]');
    if (summary && incidents.length) summary.textContent = `${count - incidents.length} of ${count} weeks fully operational`;
  }
});

/* ---------- Number count-up (e.g. GPA) ---------- */
function countUp(el) {
  if (reduceMotion) return;
  const target = parseFloat(el.dataset.count);
  const decimals = Number(el.dataset.decimals || 0);
  const duration = 1600;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = (target * eased).toFixed(decimals);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------- Timeline rail: ends at the last node, fills as you scroll ---------- */
const timelines = [...document.querySelectorAll('.timeline')];

function layoutTimelines() {
  timelines.forEach((tl) => {
    const nodes = tl.querySelectorAll('.tl-item__node');
    const last = nodes[nodes.length - 1];
    if (!last) return;
    // Sum offsetTop up to .timeline — unlike getBoundingClientRect,
    // this ignores the fade-up transforms on not-yet-revealed items.
    let top = 0;
    for (let el = last; el && el !== tl; el = el.offsetParent) top += el.offsetTop;
    const lastCenter = top + last.offsetHeight / 2;
    tl.querySelector('.timeline__rail').style.bottom = `${tl.offsetHeight - lastCenter}px`;
  });
}

function updateTimelines() {
  const line = window.innerHeight * 0.6; // fill up to 60% down the viewport
  timelines.forEach((tl) => {
    const r = tl.querySelector('.timeline__rail').getBoundingClientRect();
    const p = Math.min(Math.max((line - r.top) / r.height, 0), 1);
    tl.style.setProperty('--progress', p.toFixed(3));
  });
}

/* ---------- Nav background + timelines on scroll ---------- */
const onScroll = () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 8);
  updateTimelines();
};
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', () => {
  layoutTimelines();
  updateTimelines();
});
layoutTimelines();
onScroll();
// Webfonts can change card heights after first layout
document.fonts?.ready.then(() => {
  layoutTimelines();
  updateTimelines();
});

/* ---------- Start ---------- */
setRole(0);
void document.body.offsetWidth; // commit initial styles so the entrance transition runs
document.body.classList.add('is-loaded');
