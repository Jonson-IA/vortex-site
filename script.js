/* ============================================================
   VORTEX ROCKET DESIGN — script.js
   Vanilla ES2020. Zero dependência.
   - Loader fade-out
   - Cursor customizado (skip em touch)
   - Scroll progress
   - Nav scrolled state + mobile burger
   - Split text (hero h1 + section titles)
   - IntersectionObserver reveal + stagger
   - Counter-up
   - Timeline draw on scroll
   - Tilt 3D nos cards
   - Magnetic buttons
   - Parallax do hero video + mosaico do time
   ============================================================ */

(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  /* ---------- 1. Loader ---------- */
  const loader = document.getElementById('loader');
  if (loader) {
    if (reduced) {
      loader.classList.add('is-done');
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('is-done'), 1200);
      });
      // Failsafe se 'load' demorar
      setTimeout(() => loader.classList.add('is-done'), 3500);
    }
  }

  /* ---------- 2. Scroll progress + nav state ---------- */
  const nav = document.getElementById('nav');
  const progress = document.getElementById('scroll-progress');
  const onScroll = () => {
    const y = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (y / docH) * 100 : 0;
    if (progress) progress.style.width = pct + '%';
    if (nav) nav.classList.toggle('is-scrolled', y > 24);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 4. Mobile nav burger ---------- */
  const burger = document.getElementById('nav-burger');
  const menu = document.getElementById('nav-menu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- 5. Split text — preserva acentos e estrutura ---------- */
  const splitText = (el) => {
    const text = el.textContent;
    el.textContent = '';
    const words = text.split(/(\s+)/);
    let charIndex = 0;
    words.forEach(token => {
      if (/^\s+$/.test(token)) {
        el.appendChild(document.createTextNode(' '));
        return;
      }
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      [...token].forEach(ch => {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        charSpan.style.transitionDelay = (charIndex * 22) + 'ms';
        charSpan.textContent = ch;
        wordSpan.appendChild(charSpan);
        charIndex++;
      });
      el.appendChild(wordSpan);
    });
  };
  document.querySelectorAll('[data-split]').forEach(splitText);

  /* ---------- 6. IntersectionObserver — reveal + split text + counter ---------- */
  const stagger = (el) => {
    if (!el.hasAttribute('data-stagger')) return;
    [...el.children].forEach((child, i) => {
      child.style.setProperty('--reveal-delay', (i * 90) + 'ms');
    });
  };
  document.querySelectorAll('[data-stagger]').forEach(stagger);

  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    if (isNaN(target)) return;
    const duration = 1400;
    const start = performance.now();
    const startVal = 0;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = startVal + (target - startVal) * eased;
      el.textContent = Number.isInteger(target) ? Math.round(val) : val.toFixed(2);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    if (reduced) { el.textContent = target; return; }
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const t = entry.target;
      t.classList.add('is-visible');

      // Trigger split chars dentro
      t.querySelectorAll('.char').forEach((ch, i) => {
        setTimeout(() => ch.classList.add('is-in'), i * 22);
      });

      // Counter-up dentro
      t.querySelectorAll('[data-count]').forEach(animateCount);

      io.unobserve(t);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  // Observe both [data-reveal] e elementos com [data-split] como blocos
  document.querySelectorAll('[data-reveal], [data-split]').forEach(el => io.observe(el));
  // Hero é especial — dispara imediatamente
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) {
    setTimeout(() => {
      heroTitle.classList.add('is-visible');
      heroTitle.querySelectorAll('.char').forEach((ch, i) => {
        setTimeout(() => ch.classList.add('is-in'), 600 + i * 22);
      });
    }, reduced ? 0 : 800);
  }
  // Hero metrics: dispara junto com o load
  document.querySelectorAll('.hero [data-count]').forEach(el => {
    setTimeout(() => animateCount(el), 1400);
  });

  /* ---------- 7. Timeline — desenhar a linha conforme scroll ---------- */
  const timeline = document.getElementById('timeline');
  const timelineLine = document.getElementById('timeline-line');
  if (timeline && timelineLine && !reduced) {
    const span = timelineLine.querySelector('span');
    const onTimelineScroll = () => {
      const rect = timeline.getBoundingClientRect();
      const winH = window.innerHeight;
      const total = rect.height;
      const passed = Math.min(Math.max(winH * 0.5 - rect.top, 0), total);
      const pct = (passed / total) * 100;
      span.style.height = pct + '%';
    };
    document.addEventListener('scroll', onTimelineScroll, { passive: true });
    onTimelineScroll();
  } else if (timelineLine) {
    timelineLine.querySelector('span').style.height = '100%';
  }

  /* ---------- 8. Tilt 3D nos cards de projeto ---------- */
  if (!isTouch && !reduced) {
    document.querySelectorAll('[data-tilt]').forEach(card => {
      const damp = 12;
      let rafId = null;
      let tx = 0, ty = 0;

      const apply = () => {
        card.style.transform = `perspective(900px) rotateX(${ty}deg) rotateY(${tx}deg)`;
        rafId = null;
      };

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const cx = e.clientX - rect.left - rect.width / 2;
        const cy = e.clientY - rect.top - rect.height / 2;
        tx = (cx / rect.width) * damp;
        ty = -(cy / rect.height) * damp;
        if (!rafId) rafId = requestAnimationFrame(apply);
      });
      card.addEventListener('mouseleave', () => {
        tx = 0; ty = 0;
        card.style.transform = '';
      });
    });
  }

  /* ---------- 9. Magnetic buttons ---------- */
  if (!isTouch && !reduced) {
    document.querySelectorAll('[data-magnetic]').forEach(btn => {
      const radius = 80;
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const cx = e.clientX - rect.left - rect.width / 2;
        const cy = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${cx * 0.18}px, ${cy * 0.25}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* ---------- 10. Parallax — hero video + team mosaic ---------- */
  if (!reduced) {
    const heroVideo = document.getElementById('hero-video');
    const parallaxItems = document.querySelectorAll('[data-parallax]');

    const onParallax = () => {
      const y = window.scrollY;
      if (heroVideo) {
        const offset = Math.min(y * 0.18, 120);
        heroVideo.style.transform = `translateY(${offset}px) scale(1.05)`;
      }
      parallaxItems.forEach(el => {
        const rect = el.getBoundingClientRect();
        const winH = window.innerHeight;
        if (rect.bottom < 0 || rect.top > winH) return;
        const speed = parseFloat(el.dataset.parallax) || 0.05;
        const center = rect.top + rect.height / 2 - winH / 2;
        const offset = -center * speed;
        const img = el.querySelector('img');
        if (img) img.style.transform = `translateY(${offset}px) scale(1.08)`;
      });
    };
    let pTicking = false;
    document.addEventListener('scroll', () => {
      if (pTicking) return;
      pTicking = true;
      requestAnimationFrame(() => { onParallax(); pTicking = false; });
    }, { passive: true });
    onParallax();
  }

  /* ---------- 11. Scrollspy — destaca link ativo no nav ---------- */
  const navLinks = document.querySelectorAll('.nav__menu a[href^="#"]');
  if (navLinks.length) {
    const sections = [...navLinks]
      .map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    const setActive = (id) => {
      navLinks.forEach(a => {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
      });
    };

    const spyIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-15% 0px -75% 0px', threshold: 0 });

    sections.forEach(s => spyIo.observe(s));
  }

  /* ---------- 12. Smooth scroll com offset do nav ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navH = window.matchMedia('(max-width: 959px)').matches ? 64 : 72;
      const y = target.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
    });
  });

  /* ---------- 13. Pause hero video se fora da viewport (econ. CPU) ---------- */
  const heroVideo = document.getElementById('hero-video');
  if (heroVideo) {
    const heroIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) heroVideo.play().catch(() => {});
        else heroVideo.pause();
      });
    }, { threshold: 0.1 });
    heroIo.observe(heroVideo);
  }

})();
