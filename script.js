/* ═══════════════════════════════════════════════════════════
   Portfolio Script — Dr. Phani Siginamsetty
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // ── Theme toggle ─────────────────────────────────────────
  const themeBtn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme') || 'dark';
  if (saved === 'light') {
    root.setAttribute('data-theme', 'light');
    themeBtn.querySelector('i').className = 'fa-solid fa-sun';
  }
  themeBtn?.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    const next = isLight ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    themeBtn.querySelector('i').className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    localStorage.setItem('theme', next);
    // Update chart grid/tick colors on theme switch
    updateChartTheme(next);
  });

  // ── Mobile sidebar ───────────────────────────────────────
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menuToggle');

  menuToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    const icon = menuToggle.querySelector('i');
    icon.className = sidebar.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
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
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 220) active = s.id; });
    navItems.forEach(n => n.classList.toggle('active', n.getAttribute('href') === `#${active}`));
  };
  window.addEventListener('scroll', spy, { passive: true });
  spy();

  // ── Counters ─────────────────────────────────────────────
  let countersRan = false;
  const runCounters = () => {
    if (countersRan) return;
    countersRan = true;
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = +el.dataset.count;
      const start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / 1400, 1);
        el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(tick); else el.textContent = target;
      };
      requestAnimationFrame(tick);
    });
  };

  // ── Research section counters ────────────────────────────
  let rsCountersRan = false;
  const runResearchCounters = () => {
    if (rsCountersRan) return;
    rsCountersRan = true;
    document.querySelectorAll('.rs-stat-num[data-count]').forEach(el => {
      const target = +el.dataset.count;
      const start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / 1000, 1);
        el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(tick); else el.textContent = target;
      };
      requestAnimationFrame(tick);
    });
  };

  // ── Skill bars ───────────────────────────────────────────
  const BAR_COLORS = {
    'c-blue':   'linear-gradient(90deg, #2d7dd2, #4f9eff)',
    'c-purple': 'linear-gradient(90deg, #7c5cbf, #a78bfa)',
    'c-cyan':   'linear-gradient(90deg, #0ea5c9, #22d3ee)',
    'c-green':  'linear-gradient(90deg, #10b981, #34d399)',
    'c-amber':  'linear-gradient(90deg, #d97706, #fbbf24)',
    'c-pink':   'linear-gradient(90deg, #db2777, #f472b6)',
  };
  let barsAnimated = false;
  const animateBars = () => {
    if (barsAnimated) return;
    barsAnimated = true;
    document.querySelectorAll('.sbar-item').forEach(item => {
      const fill = item.querySelector('.sbar-fill');
      if (!fill) return;
      // Apply color from class
      for (const [cls, grad] of Object.entries(BAR_COLORS)) {
        if (fill.classList.contains(cls)) {
          fill.style.background = grad;
          break;
        }
      }
      // Animate width
      requestAnimationFrame(() => {
        fill.style.width = item.dataset.pct + '%';
      });
    });
  };

  // ── Chart.js charts ──────────────────────────────────────
  let chartsBuilt = false;
  const buildCharts = () => {
    if (chartsBuilt || !window.Chart) return;
    chartsBuilt = true;

    // Expertise donut
    const ec = document.getElementById('expertiseDonut');
    if (ec) {
      const data = [
        { label: 'GenAI & Agents',      value: 22, color: '#4f9eff' },
        { label: 'LLMs & Fine-Tuning',  value: 18, color: '#a78bfa' },
        { label: 'Data Science & ML',   value: 16, color: '#34d399' },
        { label: 'MLOps & Cloud',       value: 14, color: '#22d3ee' },
        { label: 'Vision & Multimodal', value: 12, color: '#fbbf24' },
        { label: 'Data Infrastructure', value: 10, color: '#f472b6' },
        { label: 'NLP Research',        value:  8, color: '#818cf8' },
      ];
      new Chart(ec, {
        type: 'doughnut',
        data: {
          labels: data.map(d => d.label),
          datasets: [{ data: data.map(d => d.value), backgroundColor: data.map(d => d.color), borderWidth: 0, hoverOffset: 8 }]
        },
        options: {
          cutout: '72%',
          plugins: {
            legend: { display: false },
            tooltip: { backgroundColor: '#0c1220', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, titleColor: '#f1f5f9', bodyColor: '#94a3b8', padding: 10 }
          },
          animation: { duration: 1200 }
        }
      });
      const leg = document.getElementById('donutLegend');
      if (leg) data.forEach(d => {
        leg.innerHTML += `<div class="dl-item"><div class="dl-dot" style="background:${d.color}"></div>${d.label}</div>`;
      });
    }

    // Domain donut — actual domains from Phani's work
    const dc = document.getElementById('domainDonut');
    if (dc) {
      const data = [
        { label: 'Generative AI',     value: 22, color: '#4f9eff' },
        { label: 'NLP & Multilingual',value: 18, color: '#a78bfa' },
        { label: 'Healthcare AI',     value: 16, color: '#34d399' },
        { label: 'Multi-Agent Sys.',  value: 14, color: '#22d3ee' },
        { label: 'Computer Vision',   value: 12, color: '#fbbf24' },
        { label: 'MLOps & Cloud',     value: 10, color: '#f472b6' },
        { label: 'Quantum AI',        value:  8, color: '#818cf8' },
      ];
      new Chart(dc, {
        type: 'doughnut',
        data: { labels: data.map(d => d.label), datasets: [{ data: data.map(d => d.value), backgroundColor: data.map(d => d.color), borderWidth: 0, hoverOffset: 6 }] },
        options: { cutout: '68%', plugins: { legend: { display: false }, tooltip: { backgroundColor: '#0c1220', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, titleColor: '#f1f5f9', bodyColor: '#94a3b8', padding: 8 } }, animation: { duration: 1000 } }
      });
      const leg = document.getElementById('domainLegend');
      if (leg) data.forEach(d => { leg.innerHTML += `<div class="dl-item"><div class="dl-dot" style="background:${d.color}"></div>${d.label}</div>`; });
    }

    // Patent status donut
    const psc = document.getElementById('patentStatusChart');
    if (psc) {
      const pdata = [
        { label: 'Granted', value: 3, color: '#34d399' },
        { label: 'Filed', value: 8, color: '#4f9eff' },
      ];
      new Chart(psc, {
        type: 'doughnut',
        data: { labels: pdata.map(d => d.label), datasets: [{ data: pdata.map(d => d.value), backgroundColor: pdata.map(d => d.color), borderWidth: 0, hoverOffset: 8 }] },
        options: { cutout: '70%', plugins: { legend: { display: false }, tooltip: { backgroundColor: '#0c1220', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, titleColor: '#f1f5f9', bodyColor: '#94a3b8', padding: 10 } }, animation: { duration: 1200 } }
      });
      const pleg = document.getElementById('patentStatusLegend');
      if (pleg) pdata.forEach(d => { pleg.innerHTML += `<div class="dl-item"><div class="dl-dot" style="background:${d.color}"></div>${d.label}: ${d.value}</div>`; });
    }

    // Publications by venue bar
    const pvc = document.getElementById('pubVenueChart');
    if (pvc) {
      new Chart(pvc, {
        type: 'bar',
        data: {
          labels: ['Elsevier', 'Springer', 'IEEE', 'IJRTE'],
          datasets: [{ label: 'Papers', data: [2, 3, 1, 1], backgroundColor: ['rgba(79,158,255,0.75)', 'rgba(167,139,250,0.75)', 'rgba(34,211,238,0.75)', 'rgba(251,191,36,0.75)'], borderRadius: 6, borderSkipped: false }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { backgroundColor: '#0c1220', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, titleColor: '#f1f5f9', bodyColor: '#94a3b8', padding: 8 } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#64748b', font: { size: 11 } } },
            y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#64748b', font: { size: 11 }, stepSize: 1 }, beginAtZero: true }
          },
          animation: { duration: 1000 }
        }
      });
    }

    // Patents by year bar
    const pyc = document.getElementById('patentYearChart');
    if (pyc) {
      new Chart(pyc, {
        type: 'bar',
        data: {
          labels: ['2022', '2023', '2024', '2025'],
          datasets: [{ label: 'Patents', data: [1, 3, 6, 1], backgroundColor: ['rgba(52,211,153,0.5)', 'rgba(52,211,153,0.65)', 'rgba(52,211,153,0.85)', 'rgba(52,211,153,0.5)'], borderRadius: 6, borderSkipped: false }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { backgroundColor: '#0c1220', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, titleColor: '#f1f5f9', bodyColor: '#94a3b8', padding: 8 } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#64748b', font: { size: 11 } } },
            y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#64748b', font: { size: 11 }, stepSize: 1 }, beginAtZero: true }
          },
          animation: { duration: 1000 }
        }
      });
    }

    // Projects: tech stack donut
    const ptd = document.getElementById('projTechDonut');
    if (ptd) {
      const data = [
        { label: 'AWS Services',    value: 28, color: '#fbbf24' },
        { label: 'GenAI / LLMs',   value: 25, color: '#4f9eff' },
        { label: 'Vector DBs',      value: 18, color: '#a78bfa' },
        { label: 'Python / APIs',   value: 16, color: '#34d399' },
        { label: 'CV / PyTorch',    value: 13, color: '#f472b6' },
      ];
      new Chart(ptd, {
        type: 'doughnut',
        data: { labels: data.map(d => d.label), datasets: [{ data: data.map(d => d.value), backgroundColor: data.map(d => d.color), borderWidth: 0, hoverOffset: 8 }] },
        options: { cutout: '70%', plugins: { legend: { display: false }, tooltip: { backgroundColor: '#0c1220', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, titleColor: '#f1f5f9', bodyColor: '#94a3b8', padding: 10 } }, animation: { duration: 1200 } }
      });
      const leg = document.getElementById('projTechLegend');
      if (leg) data.forEach(d => { leg.innerHTML += `<div class="dl-item"><div class="dl-dot" style="background:${d.color}"></div>${d.label}</div>`; });
    }

    // Projects: domain coverage bar
    const pdb = document.getElementById('projDomainBar');
    if (pdb) {
      new Chart(pdb, {
        type: 'bar',
        data: {
          labels: ['EdTech', 'FinTech', 'Healthcare', 'Banking'],
          datasets: [{ label: 'Projects', data: [1, 1, 1, 1], backgroundColor: ['rgba(79,158,255,0.75)', 'rgba(167,139,250,0.75)', 'rgba(52,211,153,0.75)', 'rgba(251,191,36,0.75)'], borderRadius: 6, borderSkipped: false }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { backgroundColor: '#0c1220', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, titleColor: '#f1f5f9', bodyColor: '#94a3b8', padding: 8 } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#64748b', font: { size: 11 } } },
            y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#64748b', font: { size: 11 }, stepSize: 1 }, beginAtZero: true, max: 2 }
          },
          animation: { duration: 1000 }
        }
      });
    }

    // Projects: AI techniques radar-style horizontal bar
    const ptb = document.getElementById('projTechBar');
    if (ptb) {
      new Chart(ptb, {
        type: 'bar',
        data: {
          labels: ['RAG', 'Multi-Agent', 'Fine-Tuning', 'Computer Vision', 'Fraud Detection'],
          datasets: [{ label: 'Usage', data: [3, 2, 1, 1, 1], backgroundColor: 'rgba(79,158,255,0.7)', borderRadius: 6, borderSkipped: false }]
        },
        options: {
          indexAxis: 'y',
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { backgroundColor: '#0c1220', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, titleColor: '#f1f5f9', bodyColor: '#94a3b8', padding: 8 } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#64748b', font: { size: 11 }, stepSize: 1 }, beginAtZero: true },
            y: { grid: { display: false }, ticks: { color: '#94a3b8', font: { size: 11 } } }
          },
          animation: { duration: 1000 }
        }
      });
    }
  };

  // ── Scroll reveal ────────────────────────────────────────
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        if (e.target.id === 'hero')       { runCounters(); buildCharts(); }
        if (e.target.id === 'research')   { buildCharts(); runResearchCounters(); }
        if (e.target.id === 'projects')   buildCharts();
        if (e.target.id === 'skills')     animateBars();
        if (e.target.id === 'education') {
          setTimeout(() => { const f = document.getElementById('eduLineFill'); if (f) f.style.width = '100%'; }, 200);
        }
        if (e.target.id === 'experience') {
          setTimeout(() => { const f = document.getElementById('cpLineFill'); if (f) f.style.height = '100%'; }, 200);
        }
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

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
    const tick = () => {
      const word = roles[ri];
      if (!deleting) {
        typedEl.textContent = word.slice(0, ++ci);
        if (ci === word.length) { deleting = true; setTimeout(tick, 1800); return; }
      } else {
        typedEl.textContent = word.slice(0, --ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
      }
      setTimeout(tick, deleting ? 35 : 60);
    };
    tick();
  }

  // ── Experience accordion ─────────────────────────────────
  document.querySelectorAll('.exp-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.exp-card');
      const isOpen = card.classList.contains('open');
      document.querySelectorAll('.exp-card').forEach(c => c.classList.remove('open'));
      if (!isOpen) card.classList.add('open');
    });
  });

  // ── Career path toggle ───────────────────────────────────
  window.toggleCpCard = (header) => {
    const card = header.closest('.cp-card');
    const body = card.querySelector('.cp-card-body');
    const chevron = header.querySelector('.cp-chevron');
    const isOpen = body.classList.contains('open');
    document.querySelectorAll('.cp-card-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.cp-chevron').forEach(c => c.classList.remove('open'));
    document.querySelectorAll('.cp-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.cp-node').forEach(n => n.classList.remove('active'));
    if (!isOpen) {
      body.classList.add('open');
      chevron.classList.add('open');
      card.classList.add('active');
      header.closest('.cp-node')?.classList.add('active');
    }
  };

  document.querySelectorAll('.skill-row-header').forEach(header => {
    header.addEventListener('click', () => {
      const row = header.closest('.skill-row');
      const isOpen = row.classList.contains('open');
      document.querySelectorAll('.skill-row').forEach(r => r.classList.remove('open'));
      if (!isOpen) row.classList.add('open');
    });
  });

  // ── Research tabs ────────────────────────────────────────
  // ── Education pathway toggle ─────────────────────────────
  window.toggleEduCard = (card) => {
    const step = card.closest('.edu-step');
    const isActive = step.classList.contains('active');
    document.querySelectorAll('.edu-step').forEach(s => s.classList.remove('active'));
    if (!isActive) step.classList.add('active');
  };

  // ── Resume page selector ─────────────────────────────────
  window.selectResumePage = (page) => {
    document.querySelectorAll('.resume-page-thumb').forEach(t => t.classList.remove('active'));
    const thumb = document.querySelector(`.resume-page-thumb[data-page="${page}"]`);
    if (thumb) thumb.classList.add('active');
    // Google Docs viewer doesn't support page navigation via URL easily,
    // but we keep the UI for visual feedback
  };

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab)?.classList.add('active');
    });
  });

  // ── Cursor glow ──────────────────────────────────────────
  if (window.matchMedia('(pointer: fine)').matches) {
    const glow = document.createElement('div');
    Object.assign(glow.style, {
      position: 'fixed', pointerEvents: 'none', zIndex: '9999',
      width: '400px', height: '400px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(79,158,255,0.06) 0%, transparent 65%)',
      transform: 'translate(-50%,-50%)', top: '0', left: '0',
    });
    document.body.appendChild(glow);
    let tx = 0, ty = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
    const loop = () => {
      cx += (tx - cx) * 0.1; cy += (ty - cy) * 0.1;
      glow.style.left = cx + 'px'; glow.style.top = cy + 'px';
      requestAnimationFrame(loop);
    };
    loop();
  }

  // ── 3D tilt ──────────────────────────────────────────────
  document.querySelectorAll('.proj-card, .edu-card, .patent-card, .hsg-card').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 10;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * -10;
      el.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  // ── Hero canvas particles ────────────────────────────────
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W; this.y = Math.random() * H;
        this.r = Math.random() * 1.5 + .5;
        this.vx = (Math.random() - .5) * .4; this.vy = (Math.random() - .5) * .4;
        this.alpha = Math.random() * .5 + .1;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79,158,255,${this.alpha})`; ctx.fill();
      }
    }
    for (let i = 0; i < 80; i++) particles.push(new Particle());
    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 100) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79,158,255,${.12 * (1 - dist/100)})`; ctx.lineWidth = .5; ctx.stroke();
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

  // ── Chart theme updater ──────────────────────────────────
  const registeredCharts = [];
  const _origChart = window.Chart;

  // Patch Chart constructor to track instances
  if (window.Chart) {
    const OrigChart = window.Chart;
    window.Chart = function(...args) {
      const instance = new OrigChart(...args);
      registeredCharts.push(instance);
      return instance;
    };
    Object.assign(window.Chart, OrigChart);
    window.Chart.prototype = OrigChart.prototype;
  }

  const updateChartTheme = (theme) => {
    const isLight = theme === 'light';
    const gridColor  = isLight ? 'rgba(0,0,0,0.06)'  : 'rgba(255,255,255,0.04)';
    const tickColor  = isLight ? '#64748b'            : '#64748b';
    const tooltipBg  = isLight ? '#ffffff'            : '#0c1220';
    const tooltipTitle = isLight ? '#0f172a'          : '#f1f5f9';
    const tooltipBody  = isLight ? '#475569'          : '#94a3b8';
    const tooltipBorder = isLight ? 'rgba(0,0,0,0.1)': 'rgba(255,255,255,0.08)';

    document.querySelectorAll('canvas').forEach(canvas => {
      const chart = Chart.getChart(canvas);
      if (!chart) return;
      // Update scales
      if (chart.options.scales) {
        ['x','y'].forEach(axis => {
          if (chart.options.scales[axis]) {
            if (chart.options.scales[axis].grid) chart.options.scales[axis].grid.color = gridColor;
            if (chart.options.scales[axis].ticks) chart.options.scales[axis].ticks.color = tickColor;
          }
        });
      }
      // Update tooltip
      if (chart.options.plugins?.tooltip) {
        chart.options.plugins.tooltip.backgroundColor = tooltipBg;
        chart.options.plugins.tooltip.titleColor = tooltipTitle;
        chart.options.plugins.tooltip.bodyColor = tooltipBody;
        chart.options.plugins.tooltip.borderColor = tooltipBorder;
      }
      chart.update('none');
    });
  };

  // Apply saved theme to charts after they're built
  if (saved === 'light') {
    setTimeout(() => updateChartTheme('light'), 100);
  }

  // ── Smooth scroll ────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

});
