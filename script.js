/**
 * PORTFOLIO — script.js
 * ─────────────────────────────────────────────
 * Modules:
 * 1.  Custom Cursor
 * 2.  Navbar Scroll Behaviour
 * 3.  Mobile Menu Toggle
 * 4.  Scroll Reveal (IntersectionObserver)
 * 5.  Skill Bar Animations
 * 6.  Animated Number Counter
 * 7.  Hero Parallax
 * 8.  Active Nav Link Highlight
 * 9.  Footer Year
 * ─────────────────────────────────────────────
 */


/* ──────────────────────────────────────────
   1. CUSTOM CURSOR
────────────────────────────────────────── */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  if (!cursor || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  // Snap the dot instantly to the mouse
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Smoothly lag the ring behind
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Grow both on hover over interactive elements
  const interactiveSelectors = 'a, button, .skill-card, .project-card, .stat-card, .contact-link';
  document.querySelectorAll(interactiveSelectors).forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  // Hide when leaving the window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    ring.style.opacity   = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    ring.style.opacity   = '1';
  });
})();


/* ──────────────────────────────────────────
   2. NAVBAR SCROLL BEHAVIOUR
────────────────────────────────────────── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
})();


/* ──────────────────────────────────────────
   3. MOBILE MENU TOGGLE
────────────────────────────────────────── */
(function initMobileMenu() {
  const btn        = document.getElementById('menuBtn');
  const menu       = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  if (!btn || !menu) return;

  function toggleMenu() {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    // Prevent body scroll while menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  btn.addEventListener('click', toggleMenu);

  // Close menu when a link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();


/* ──────────────────────────────────────────
   4. SCROLL REVEAL
────────────────────────────────────────── */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
})();


/* ──────────────────────────────────────────
   5. SKILL BAR ANIMATIONS
────────────────────────────────────────── */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar');
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar      = entry.target;
          const targetW  = bar.dataset.width || '0';
          // Small delay so the reveal animation fires first
          setTimeout(() => {
            bar.style.width = targetW + '%';
          }, 350);
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.4 }
  );

  bars.forEach((bar) => observer.observe(bar));
})();


/* ──────────────────────────────────────────
   6. ANIMATED NUMBER COUNTER
────────────────────────────────────────── */
(function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;

  /**
   * Eases from 0 → target over `duration` ms
   * using an ease-out-cubic curve.
   */
  function countUp(el, target, duration = 1400) {
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el     = entry.target;
          const target = parseInt(el.dataset.target, 10);
          if (!isNaN(target)) countUp(el, target);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.6 }
  );

  statNumbers.forEach((el) => observer.observe(el));
})();


/* ──────────────────────────────────────────
   7. HERO PARALLAX
────────────────────────────────────────── */
(function initParallax() {
  const heroBg    = document.querySelector('.hero-bg');
  const heroTitle = document.querySelector('.hero-title');

  if (!heroBg && !heroTitle) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (heroBg)    heroBg.style.transform    = `translateY(${y * 0.28}px)`;
        if (heroTitle) heroTitle.style.transform  = `translateY(${y * 0.12}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();


/* ──────────────────────────────────────────
   8. ACTIVE NAV LINK HIGHLIGHT
────────────────────────────────────────── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const active = link.getAttribute('href') === `#${id}`;
            link.style.color = active ? 'var(--text)' : '';
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((sec) => observer.observe(sec));
})();


/* ──────────────────────────────────────────
   9. FOOTER YEAR (auto-update)
────────────────────────────────────────── */
(function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
