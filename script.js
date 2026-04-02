document.addEventListener('DOMContentLoaded', () => {

  // Mobile Menu Toggle logic
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (sidebar.classList.contains('open')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
      } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
      }
    });
  }

  // Close sidebar on link click (Mobile)
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if(window.innerWidth <= 900) {
        sidebar.classList.remove('open');
        document.querySelector('.mobile-menu-toggle i').classList.replace('fa-xmark', 'fa-bars');
      }
    });
  });

  // ScrollSpy - highlight active nav item based on scroll position
  const sections = document.querySelectorAll('.dashboard-section');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

  // Animated KPI Counters
  const counters = document.querySelectorAll('.counter');
  const speed = 20; // Lower is faster

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 40);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  // Dashboard Tabs (Research: Patents vs Publications)
  const tabBtns = document.querySelectorAll('.dash-tab-btn');
  const tabContents = document.querySelectorAll('.dash-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active to current
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Scroll Reveal Animations
  const fadeElements = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Trigger counter animation when Overview section is visible
        if (entry.target.id === 'overview') {
          animateCounters();
        }
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  fadeElements.forEach(el => appearOnScroll.observe(el));
});