// ============================================
//   AURA RETOUCH — JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── CUSTOM CURSOR ──────────────────────────
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');

  if (cursor && follower) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effect on interactive elements
    const hoverEls = document.querySelectorAll('a, button, .port-card, .price-card, .review-card');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '16px';
        cursor.style.height = '16px';
        follower.style.width = '52px';
        follower.style.height = '52px';
        follower.style.borderColor = 'var(--accent)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        follower.style.width = '36px';
        follower.style.height = '36px';
        follower.style.borderColor = 'rgba(255,59,107,0.5)';
      });
    });
  }

  // ── NAVBAR SCROLL ──────────────────────────
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // ── MOBILE MENU ────────────────────────────
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  let menuOpen = false;

  burger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    burger.querySelectorAll('span')[0].style.transform = menuOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
    burger.querySelectorAll('span')[1].style.transform = menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      burger.querySelectorAll('span')[0].style.transform = '';
      burger.querySelectorAll('span')[1].style.transform = '';
    });
  });

  // ── SCROLL REVEAL ──────────────────────────
  const reveals = document.querySelectorAll('.section-title, .section-tag, .section-sub, .about__grid, .process__step, .price-card, .review-card, .port-card, .contact-link, .contact-form, .hero__stats');

  reveals.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ── PORTFOLIO FILTER ──────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portCards = document.querySelectorAll('.port-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      portCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ── FORM SUBMIT ───────────────────────────
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const original = btn.textContent;
      btn.textContent = '✓ Заявку відправлено!';
      btn.style.background = '#4ade80';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }

  // ── SMOOTH ANCHOR SCROLL ──────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── STAGGER REVEAL FOR GRIDS ──────────────
  const staggerGroups = [
    '.portfolio__grid .port-card',
    '.price__grid .price-card',
    '.reviews__grid .review-card',
    '.process__steps .process__step',
    '.hero__stats .stat',
  ];

  staggerGroups.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.08}s`;
    });
  });

});
