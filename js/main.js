/* ============================================
   Electric Youssef – Main JavaScript
   Navigation, animations, forms, FAQ
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Translation & Language Switching ───
  let currentLang = localStorage.getItem('electric_youssef_lang') || 'en';

  const setLanguage = (lang) => {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('electric_youssef_lang', lang);

    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        // Special case for placeholders (like in forms)
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update active state in dropdown
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Update main Lang button text
    const langBtnText = document.querySelector('.lang-btn .current-lang');
    if (langBtnText) {
      langBtnText.textContent = lang.toUpperCase();
    }
  };

  // Initialize Language
  if (typeof translations !== 'undefined') {
    setLanguage(currentLang);
  }

  // Language Dropdown Toggle
  const langBtn = document.querySelector('.lang-btn');
  const langDropdown = document.querySelector('.lang-dropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        setLanguage(lang);
        langDropdown.classList.remove('show');
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.lang-switcher')) {
        langDropdown.classList.remove('show');
      }
    });
  }

  // ─── Sticky Navbar ───
  const navbar = document.querySelector('.navbar');
  const handleScroll = () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 40);
    const btt = document.querySelector('.back-to-top');
    btt?.classList.toggle('visible', window.scrollY > 600);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ─── Mobile Menu ───
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.nav-overlay');

  const toggleMenu = (open) => {
    const isOpen = typeof open === 'boolean' ? open : !navLinks.classList.contains('open');
    navLinks?.classList.toggle('open', isOpen);
    hamburger?.classList.toggle('active', isOpen);
    overlay?.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburger?.addEventListener('click', () => toggleMenu());
  overlay?.addEventListener('click', () => toggleMenu(false));

  navLinks?.querySelectorAll('a:not(.btn)').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // ─── Active Nav Link ───
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks?.querySelectorAll('a:not(.btn)').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ─── Scroll Reveal ───
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ─── Counter Animation ───
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          const duration = 2000;
          const start = performance.now();

          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  // ─── FAQ Accordion ───
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item.active').forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!wasActive) item.classList.add('active');
    });
  });

  // ─── Booking Form ───
  const bookingForm = document.getElementById('booking-form');
  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData);

    // Build WhatsApp message
    let msg = `🔧 *New Repair Booking Request*\n\n`;
    msg += `👤 *Name:* ${data.name}\n`;
    msg += `📱 *Phone:* ${data.phone}\n`;
    if (data.email) msg += `📧 *Email:* ${data.email}\n`;
    msg += `📱 *Device:* ${data.device}\n`;
    msg += `🛠️ *Service:* ${data.service}\n`;
    if (data.message) msg += `💬 *Details:* ${data.message}\n`;

    const waUrl = `https://wa.me/212771863888?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');

    showToast('Redirecting to WhatsApp...');
    bookingForm.reset();
  });

  // ─── Contact Form ───
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent successfully! We\'ll get back to you soon.');
    contactForm.reset();
  });

  // ─── Toast Notification ───
  function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>✓</span> ${message}`;
    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  // ─── Back to Top ───
  document.querySelector('.back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── Smooth Hash Links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ─── Parallax-like tilt on hero phone ───
  const phoneMockup = document.querySelector('.hero-phone-mockup');
  if (phoneMockup && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      phoneMockup.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });
  }

});
