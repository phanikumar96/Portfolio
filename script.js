/* ═══════════════════════════════════════════════════════════
   Portfolio Script — Dr. Phani Siginamsetty
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile sidebar ───────────────────────────────────────
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menuToggle');

  menuToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    const icon = menuToggle.querySelector('i');
    icon.className = sidebar.classList.contains('open')
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars';
  });

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 860) {
        sidebar.classList.remove('open');
        const icon = menuToggle?.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });
  });

  // ── ScrollSpy ────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id], .hero[id]');
  const navItems = document.querySelectorAll('.nav-item');

  const spy = () => {
    let active = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 220) active = s.id;
    });
    navItems.forEach(n => {
      n.classList.toggle('active', n.getAttribute('href') === `#${active}`);
    });
  };

  window.addEventListener('scroll', spy, { passive: true });
  spy();

  // ── Scroll reveal ────────────────────────────────────────
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // ── Animated counters ────────────────────────────────────
  let countersRan = false;

  const runCounters = () => {
    if (countersRan) return;
    countersRan = true;
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = +el.dataset.count;
      let n = 0;
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        // ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        n = Math.round(eased * target);
        el.textContent = n;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
    });
  };

  const heroObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) runCounters();
  }, { threshold: 0.3 });

  const heroEl = document.getElementById('hero');
  if (heroEl) heroObs.observe(heroEl);

  // ── Typed role rotator ───────────────────────────────────
  const roles = [
    'Autonomous AI Agents',
    'Multi-Agent Systems',
    'RAG Pipelines',
    'LLM Fine-Tuning',
    'Data Science Solutions',
    'Generative AI Products',
    'Agentic Workflows',
  ];
  const typedEl = document.getElementById('typedRole');
  if (typedEl) {
    let ri = 0, ci = 0, deleting = false;
    const typeSpeed = 60, deleteSpeed = 35, pauseMs = 1800;
    const tick = () => {
      const word = roles[ri];
      if (!deleting) {
        typedEl.textContent = word.slice(0, ++ci);
        if (ci === word.length) { deleting = true; setTimeout(tick, pauseMs); return; }
      } else {
        typedEl.textContent = word.slice(0, --ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
      }
      setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    };
    tick();
  }
  document.querySelectorAll('.skill-row-header').forEach(header => {
    header.addEventListener('click', () => {
      const row = header.closest('.skill-row');
      const isOpen = row.classList.contains('open');
      // close all
      document.querySelectorAll('.skill-row').forEach(r => r.classList.remove('open'));
      // toggle clicked
      if (!isOpen) row.classList.add('open');
    });
  });

  // ── Research tabs ────────────────────────────────────────
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab)?.classList.add('active');
    });
  });

  // ── Cursor glow (desktop) ────────────────────────────────
  if (window.matchMedia('(pointer: fine)').matches) {
    const glow = Object.assign(document.createElement('div'), {});
    Object.assign(glow.style, {
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: '9999',
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(79,158,255,0.06) 0%, transparent 65%)',
      transform: 'translate(-50%,-50%)',
      top: '0', left: '0',
      transition: 'opacity .4s',
    });
    document.body.appendChild(glow);

    let tx = 0, ty = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });

    const loop = () => {
      cx += (tx - cx) * 0.1;
      cy += (ty - cy) * 0.1;
      glow.style.left = cx + 'px';
      glow.style.top  = cy + 'px';
      requestAnimationFrame(loop);
    };
    loop();
  }

  // ── 3D tilt on cards ────────────────────────────────────
  const tiltEls = document.querySelectorAll('.proj-card, .edu-card, .patent-card');

  tiltEls.forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 8;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * -8;
      el.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-5px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  // ── Hero particle canvas ─────────────────────────────────
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 1.5 + .5;
        this.vx = (Math.random() - .5) * .4;
        this.vy = (Math.random() - .5) * .4;
        this.alpha = Math.random() * .5 + .1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79,158,255,${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79,158,255,${.12 * (1 - dist/100)})`;
            ctx.lineWidth = .5;
            ctx.stroke();
          }
        }
      }
    };

    const animCanvas = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      drawLines();
      requestAnimationFrame(animCanvas);
    };
    animCanvas();
  }

  // ── Smooth scroll for anchor links ──────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
