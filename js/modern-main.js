/* ============================================
   ELECTRO YOUSSEF - Modern JavaScript
   Author: AISSAM LAKHYARI
   Navigation, animations, i18n, FAQ
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  
  // ===== TRANSLATION DICTIONARY =====
  const translations = {
    en: {
      brand_name: "Electro Youssef",
      nav_home: "Home",
      nav_services: "Services",
      nav_about: "About",
      nav_contact: "Contact",
      nav_book: "Book Repair",
      nav_pricing: "Pricing",
      lang_en: "English (EN)",
      lang_fr: "Français (FR)",
      lang_ar: "العربية (AR)",
      hero_badge: "Open Today · ZERARDA",
      hero_title1: "Fast & Reliable",
      hero_title2: "Phone Repair",
      hero_desc: "Expert smartphone repairs with genuine parts and quick turnarounds. Your device is in safe hands at Electro Youssef.",
      btn_book: "📅 Book Repair",
      btn_call: "📞 Call Now",
      btn_quote: "💰 Get Quote",
      stat_devices: "Devices Fixed",
      stat_rate: "Success Rate",
      stat_time: "Avg. Repair",
      features_heading: "Premium Quality Service",
      features_sub: "We combine expertise with genuine parts to deliver exceptional repair experiences.",
      feat_warranty: "3-Month Warranty",
      feat_warranty_desc: "All repairs come with a comprehensive 3-month warranty covering parts and labor.",
      feat_speed: "Express Service",
      feat_speed_desc: "Most repairs completed in 30-60 minutes while you wait.",
      feat_genuine: "Genuine Parts",
      feat_genuine_desc: "We use only OEM and high-quality replacement parts.",
      feat_expert: "Expert Technicians",
      feat_expert_desc: "Certified technicians with years of experience in phone repairs.",
      feat_location: "Convenient Location",
      feat_location_desc: "Easy to find in ZERARDA with parking available.",
      feat_support: "24/7 Support",
      feat_support_desc: "Get in touch anytime via WhatsApp for quick assistance.",
      services_heading: "Our Repair Services",
      services_sub: "From cracked screens to water damage, we fix it all.",
      srv_screen: "Screen Replacement",
      srv_screen_desc: "Premium quality LCD and OLED screen replacements for all major brands.",
      srv_battery: "Battery Replacement",
      srv_battery_desc: "Restore your phone's battery life with genuine replacement batteries.",
      srv_port: "Charging Port Repair",
      srv_port_desc: "Fix charging issues with professional port repair or replacement.",
      srv_water: "Water Damage Recovery",
      srv_water_desc: "Specialized treatment to recover devices from liquid exposure.",
      srv_data: "Data Recovery",
      time_min: "min",
      time_hours: "hours",
      view_all_services: "View All Services →",
      pricing_heading: "Repair Prices in DZD",
      pricing_sub: "No hidden fees. No surprises. Get a clear estimate before we start any repair.",
      price_screen: "2,000 – 8,000",
      price_battery: "1,500 – 4,000",
      price_data: "3,000 – 10,000",
      currency_dzd: "DZD",
      price_note: "Varies by device model",
      fe_genuine: "Genuine parts",
      fe_warranty: "3-month warranty",
      fe_express: "Express turnaround",
      fe_specialized: "Specialized tools",
      fe_confidential: "Confidential handling",
      fe_diagnostic: "Free diagnostic",
      badge_common: "Most Common",
      comparison_heading: "Open-Boudayri vs Youssef-Claw",
      comparison_sub: "Choose the right solution for your business needs.",
      badge_recommended: "⭐ Recommended",
      comp_verdict_title: "Best For:",
      comp_verdict_boudayri: "Photographers needing a dynamic, feature-rich portfolio with admin dashboard.",
      comp_verdict_youssef: "Local businesses needing a fast, easy-to-deploy website with minimal setup.",
      testimonials_heading: "What Our Customers Say",
      testimonials_sub: "Real reviews from real customers in ZERARDA.",
      t1_text: "Fixed my iPhone screen in just 25 minutes! The quality is amazing and price was very fair. Highly recommend Electro Youssef!",
      t1_name: "Ahmed K.",
      t1_role: "iPhone 14 Pro – Screen Repair",
      t2_text: "My Samsung was water damaged and I thought it was done for. They recovered all my data and fixed the phone completely. Incredible service!",
      t2_name: "Sara B.",
      t2_role: "Samsung S23 – Water Damage",
      t3_text: "Professional, fast, and honest. They told me exactly what was wrong before starting the repair. Best repair shop in the area!",
      t3_name: "Mohamed R.",
      t3_role: "Huawei P50 – Battery Replacement",
      faq_heading: "Frequently Asked Questions",
      faq_sub: "Got questions? We've got answers.",
      faq1_q: "How long does a typical screen repair take?",
      faq1_a: "Most screen replacements take between 30–60 minutes depending on device model. We offer express service for common models like iPhone and Samsung Galaxy.",
      faq2_q: "Do you offer a warranty on repairs?",
      faq2_a: "Yes! All our repairs come with a 3-month warranty covering parts and labour. If anything goes wrong during this period, we'll fix it for free.",
      faq3_q: "Do you use genuine parts?",
      faq3_a: "We use high-quality OEM and genuine replacement parts for all repairs. We believe in quality over shortcuts to ensure your device performs like new.",
      faq4_q: "Can you recover data from a broken phone?",
      faq4_a: "In most cases, yes. We have specialized tools for data recovery from devices with screen damage, water damage, or software issues. Success rate depends on extent of damage.",
      faq5_q: "What phone brands do you repair?",
      faq5_a: "We repair all major brands including Apple (iPhone), Samsung, Huawei, Xiaomi, Oppo, Realme, Vivo, OnePlus, and many more. Contact us to check your specific model.",
      cta_title: "Ready to Get Your Device Fixed?",
      cta_sub: "Book your repair today and get your phone back in perfect condition.",
      footer_services: "Services",
      footer_company: "Company",
      footer_contact: "Contact",
      footer_phone: "+212 690 99 27 67",
      footer_location: "ZERARDA, Algeria",
      footer_whatsapp: "WhatsApp",
      footer_desc: "Fast, reliable smartphone repair in ZERARDA. Your device in safe hands.",
      footer_rights: "All rights reserved.",
      footer_made: "Developed by AISSAM LAKHYARI"
    },
    
    fr: {
      brand_name: "Electro Youssef",
      nav_home: "Accueil",
      nav_services: "Services",
      nav_about: "À propos",
      nav_contact: "Contact",
      nav_book: "Réserver",
      nav_pricing: "Tarifs",
      lang_en: "English (EN)",
      lang_fr: "Français (FR)",
      lang_ar: "العربية (AR)",
      hero_badge: "Ouvert Aujourd'hui · ZERARDA",
      hero_title1: "Réparation Rapide",
      hero_title2: "de Téléphone",
      hero_desc: "Réparations d'experts avec des pièces authentiques. Votre appareil est entre de bonnes mains.",
      btn_book: "📅 Réserver",
      btn_call: "📞 Appeler",
      btn_quote: "💰 Devis",
      stat_devices: "Appareils Réparés",
      stat_rate: "Taux de Réussite",
      stat_time: "Temps Moyen",
      features_heading: "Service Premium",
      features_sub: "Nous combinons l'expertise avec des pièces authentiques.",
      feat_warranty: "Garantie 3 Mois",
      feat_warranty_desc: "Toutes les réparations incluent une garantie complète de 3 mois.",
      feat_speed: "Service Express",
      feat_speed_desc: "La plupart des réparations en 30-60 minutes.",
      feat_genuine: "Pièces Authentiques",
      feat_genuine_desc: "Nous utilisons uniquement des pièces OEM de haute qualité.",
      feat_expert: "Techniciens Experts",
      feat_expert_desc: "Des techniciens certifiés avec des années d'expérience.",
      feat_location: "Emplacement Pratique",
      feat_location_desc: "Facile à trouver à ZERARDA avec parking disponible.",
      feat_support: "Support 24/7",
      feat_support_desc: "Contactez-nous à tout moment via WhatsApp.",
      services_heading: "Nos Services de Réparation",
      services_sub: "Des écrans fissurés aux dommages d'eau, nous réparons tout.",
      srv_screen: "Remplacement d'Écran",
      srv_screen_desc: "Remplacements d'écran LCD et OLED de qualité premium.",
      srv_battery: "Remplacement de Batterie",
      srv_battery_desc: "Restaurez la durée de vie de votre batterie.",
      srv_port: "Réparation du Port",
      srv_port_desc: "Réparez les problèmes de charge professionnellement.",
      srv_water: "Récupération des Dommages d'Eau",
      srv_water_desc: "Traitement spécialisé pour les appareils exposés à l'eau.",
      srv_data: "Récupération de Données",
      time_min: "min",
      time_hours: "heures",
      view_all_services: "Voir Tous les Services →",
      pricing_heading: "Tarifs de Réparation en DZD",
      pricing_sub: "Pas de frais cachés. Pas de surprises.",
      price_screen: "2 000 – 8 000",
      price_battery: "1 500 – 4 000",
      price_data: "3 000 – 10 000",
      currency_dzd: "DZD",
      price_note: "Varie selon le modèle",
      fe_genuine: "Pièces authentiques",
      fe_warranty: "Garantie 3 mois",
      fe_express: "Service express",
      fe_specialized: "Outils spécialisés",
      fe_confidential: "Traitement confidentiel",
      fe_diagnostic: "Diagnostic gratuit",
      badge_common: "Plus Courant",
      comparison_heading: "Open-Boudayri vs Youssef-Claw",
      comparison_sub: "Choisissez la bonne solution pour vos besoins.",
      badge_recommended: "⭐ Recommandé",
      comp_verdict_title: "Idéal Pour:",
      comp_verdict_boudayri: "Les photographes ayant besoin d'un portfolio dynamique avec tableau de bord.",
      comp_verdict_youssef: "Les entreprises locales ayant besoin d'un site rapide et facile à déployer.",
      testimonials_heading: "Ce Que Disent Nos Clients",
      testimonials_sub: "Avis réels de clients à ZERARDA.",
      t1_text: "Réparé mon écran iPhone en seulement 25 minutes! Qualité incroyable et prix très correct.",
      t1_name: "Ahmed K.",
      t1_role: "iPhone 14 Pro – Réparation d'Écran",
      t2_text: "Mon Samsung a eu des dommages d'eau. Ils ont récupéré toutes mes données. Service incroyable!",
      t2_name: "Sara B.",
      t2_role: "Samsung S23 – Dommages d'Eau",
      t3_text: "Professionnel, rapide et honnête. Ils m'ont expliqué le problème avant de commencer.",
      t3_name: "Mohamed R.",
      t3_role: "Huawei P50 – Remplacement de Batterie",
      faq_heading: "Questions Fréquentes",
      faq_sub: "Des questions? Nous avons des réponses.",
      faq1_q: "Combien de temps prend une réparation d'écran?",
      faq1_a: "La plupart des remplacements d'écran prennent entre 30–60 minutes selon le modèle.",
      faq2_q: "Offrez-vous une garantie?",
      faq2_a: "Oui! Toutes nos réparations incluent une garantie de 3 mois sur pièces et main d'œuvre.",
      faq3_q: "Utilisez-vous des pièces authentiques?",
      faq3_a: "Nous utilisons des pièces OEM et de haute qualité pour toutes les réparations.",
      faq4_q: "Pouvez-vous récupérer des données?",
      faq4_a: "Dans la plupart des cas, oui. Nous avons des outils spécialisés pour la récupération.",
      faq5_q: "Quelles marques réparez-vous?",
      faq5_a: "Nous réparons toutes les grandes marques: Apple, Samsung, Huawei, Xiaomi, et plus.",
      cta_title: "Prêt à Réparer Votre Appareil?",
      cta_sub: "Réservez votre réparation aujourd'hui.",
      footer_services: "Services",
      footer_company: "Entreprise",
      footer_contact: "Contact",
      footer_phone: "+212 690 99 27 67",
      footer_location: "ZERARDA, Algérie",
      footer_whatsapp: "WhatsApp",
      footer_desc: "Réparation rapide et fiable à ZERARDA. Votre appareil en sécurité.",
      footer_rights: "Tous droits réservés.",
      footer_made: "Développé par AISSAM LAKHYARI"
    },
    
    ar: {
      brand_name: "إلكترو يوسف",
      nav_home: "الرئيسية",
      nav_services: "الخدمات",
      nav_about: "عننا",
      nav_contact: "اتصل بنا",
      nav_book: "احجز",
      nav_pricing: "الأسعار",
      lang_en: "English (EN)",
      lang_fr: "Français (FR)",
      lang_ar: "العربية (AR)",
      hero_badge: "مفتوح اليوم · زراردة",
      hero_title1: "إصلاح سريع",
      hero_title2: "للهواتف الذكية",
      hero_desc: "إصلاح احترافي للهواتف مع قطع أصلية. جهازك في أمان معنا.",
      btn_book: "📅 احجز إصلاح",
      btn_call: "📞 اتصل الآن",
      btn_quote: "💰 عرض سعر",
      stat_devices: "جهاز تم إصلاحه",
      stat_rate: "نسبة النجاح",
      stat_time: "متوسط الوقت",
      features_heading: "خدمة متميزة",
      features_sub: "نجمع بين الخبرة والقطع الأصلية لتقديم أفضل تجربة.",
      feat_warranty: "ضمان 3 أشهر",
      feat_warranty_desc: "جميع الإصلاحات تشمل ضمان شامل لمدة 3 أشهر.",
      feat_speed: "خدمة سريعة",
      feat_speed_desc: "معظم الإصلاحات تكتمل في 30-60 دقيقة.",
      feat_genuine: "قطع أصلية",
      feat_genuine_desc: "نستخدم قطع OEM عالية الجودة فقط.",
      feat_expert: "فنيون خبراء",
      feat_expert_desc: "فنيون معتمدون بخبرة سنوات في إصلاح الهواتف.",
      feat_location: "موقع ملائم",
      feat_location_desc: "سهل العثور عليه في زراردة مع مواقف متوفرة.",
      feat_support: "دعم 24/7",
      feat_support_desc: "تواصل معنا في أي وقت عبر واتساب.",
      services_heading: "خدمات الإصلاح",
      services_sub: "من الشاشات المكسورة إلى الأضرار المائية، نصلح كل شيء.",
      srv_screen: "استبدال الشاشة",
      srv_screen_desc: "شاشات LCD و OLED بجودة متميزة لجميع العلامات التجارية.",
      srv_battery: "استبدال البطارية",
      srv_battery_desc: "استعد حياة بطارية هاتفك مع بطاريات أصلية.",
      srv_port: "إصلاح منفذ الشحن",
      srv_port_desc: "أصلح مشاكل الشحن باحترافية.",
      srv_water: "استعادة من الأضرار المائية",
      srv_water_desc: "علاج متخصص للأجهزة المتضررة من الماء.",
      srv_data: "استعادة البيانات",
      time_min: "دقيقة",
      time_hours: "ساعة",
      view_all_services: "عرض جميع الخدمات →",
      pricing_heading: "أسعار الإصلاح بالدينار الجزائري",
      pricing_sub: "لا رسوم خفية. لا مفاجآت. احصل على تقدير واضح.",
      price_screen: "2,000 – 8,000",
      price_battery: "1,500 – 4,000",
      price_data: "3,000 – 10,000",
      currency_dzd: "دج",
      price_note: "يختلف حسب النموذج",
      fe_genuine: "قطع أصلية",
      fe_warranty: "ضمان 3 أشهر",
      fe_express: "خدمة سريعة",
      fe_specialized: "أدوات متخصصة",
      fe_confidential: "معاملة سرية",
      fe_diagnostic: "تشخيص مجاني",
      badge_common: "الأكثر شيوعاً",
      comparison_heading: "مقارنة: Open-Boudayri vs Youssef-Claw",
      comparison_sub: "اختر الحل المناسب لاحتياجاتك.",
      badge_recommended: "⭐ موصى به",
      comp_verdict_title: "الأفضل لـ:",
      comp_verdict_boudayri: "المصورين الذين يحتاجون معرض ديناميكي مع لوحة تحكم.",
      comp_verdict_youssef: "الشركات المحلية التي تحتاج موقع سريع وسهل النشر.",
      testimonials_heading: "ماذا يقول عملاؤنا",
      testimonials_sub: "آراء حقيقية من عملاء في زراردة.",
      t1_text: "أصلحت شاشة iPhone في 25 دقيقة فقط! الجودة رائعة والسعر عادل جداً.",
      t1_name: "أحمد ك.",
      t1_role: "iPhone 14 Pro – إصلاح شاشة",
      t2_text: "سامسونج تضرر من الماء. استعدوا جميع بياناتي. خدمة مذهلة!",
      t2_name: "سارة ب.",
      t2_role: "Samsung S23 – ضرر مائي",
      t3_text: "محترف، سريع وصادق. أخبروني بالمشكلة قبل البدء.",
      t3_name: "محمد ر.",
      t3_role: "Huawei P50 – استبدال بطارية",
      faq_heading: "الأسئلة الشائعة",
      faq_sub: "لديك أسئلة؟ لدينا إجابات.",
      faq1_q: "كم يستغرق إصلاح الشاشة عادة؟",
      faq1_a: "معظم استبدالات الشاشة تأخذ بين 30–60 دقيقة حسب النموذج.",
      faq2_q: "هل تقدمون ضمان؟",
      faq2_a: "نعم! جميع الإصلاحات تشمل ضمان 3 أشهر على القطع والعمل.",
      faq3_q: "هل تستخدمون قطع أصلية؟",
      faq3_a: "نستخدم قطع OEM وعالية الجودة لجميع الإصلاحات.",
      faq4_q: "هل يمكن استعادة البيانات من هاتف معطل؟",
      faq4_a: "في معظم الحالات، نعم. لدينا أدوات متخصصة للاستعادة.",
      faq5_q: "ما هي العلامات التجارية التي تصلحونها؟",
      faq5_a: "نصلح جميع العلامات الرئيسية: Apple و Samsung و Huawei و Xiaomi وغيرها.",
      cta_title: "مستعد لإصلاح جهازك؟",
      cta_sub: "احجز إصلاحك اليوم واستعد هاتفك في حالة مثالية.",
      footer_services: "الخدمات",
      footer_company: "الشركة",
      footer_contact: "اتصل بنا",
      footer_phone: "+212 690 99 27 67",
      footer_location: "زراردة، الجزائر",
      footer_whatsapp: "واتساب",
      footer_desc: "إصلاح سريع وموثوق في زراردة. جهازك في أمان.",
      footer_rights: "جميع الحقوق محفوظة.",
      footer_made: "تطوير AISSAM LAKHYARI"
    }
  };

  // ===== LANGUAGE & DIRECTION =====
  let currentLang = localStorage.getItem('electro_youssef_lang_modern') || 'en';

  const setLanguage = (lang) => {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('electro_youssef_lang_modern', lang);

    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update active state in dropdown
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Update language button text
    const langBtnText = document.querySelector('.lang-btn .current-lang');
    if (langBtnText) {
      langBtnText.textContent = lang.toUpperCase();
    }
  };

  // Initialize language
  setLanguage(currentLang);

  // Language Dropdown
  const langBtn = document.querySelector('.lang-btn');
  const langDropdown = document.querySelector('.lang-dropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
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

  // ===== STICKY NAVBAR =====
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // ===== MOBILE MENU =====
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('mobile-open');
    hamburger.classList.toggle('active');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('mobile-open');
      hamburger?.classList.remove('active');
    });
  });

  // ===== STATS COUNTER ANIMATION =====
  const animateStats = () => {
    const stats = document.querySelectorAll('[data-count]');
    
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-count'));
      const suffix = stat.getAttribute('data-suffix') || '';
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          stat.textContent = Math.floor(current) + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target + suffix;
        }
      };
      
      updateCounter();
    });
  };

  // ===== SCROLL REVEAL ANIMATION =====
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Trigger stats animation when hero stats are visible
        if (entry.target.closest('.hero-stats')) {
          animateStats();
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // ===== FAQ ACCORDION =====
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question?.addEventListener('click', () => {
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===== PARALLAX EFFECT FOR HERO =====
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    
    if (hero && scrollY < window.innerHeight) {
      const heroGrid = hero.querySelector('.hero-grid');
      const heroOrbs = hero.querySelectorAll('.hero-orb');
      
      // Parallax grid
      if (heroGrid) {
        heroGrid.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
      
      // Parallax orbs
      heroOrbs.forEach((orb, index) => {
        const speed = 0.05 + (index * 0.02);
        orb.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }
  });

  console.log('Electro Youssef - Modern UI Loaded Successfully 🚀');
  console.log('Developed by AISSAM LAKHYARI');
});
