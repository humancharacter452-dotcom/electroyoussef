/* ============================================
   ELECTRO YOUSSEF - Modern JavaScript V2 with GSM Services
   Author: AISSAM LAKHYARI
   Navigation, animations, i18n, FAQ, form handling
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  
  // ===== TRANSLATION DICTIONARY =====
  const translations = {
    en: {
      brand_name: "Youssef GSM",
      nav_home: "Home",
      nav_services: "Services",
      nav_gsm_tools: "GSM Tools",
      nav_about: "About",
      nav_contact: "Contact",
      nav_book: "Book Service",
      nav_pricing: "Pricing",
      lang_en: "English (EN)",
      lang_fr: "Français (FR)",
      lang_ar: "العربية (AR)",
      hero_badge: "Open Today · ZERARDA",
      hero_title1: "Professional",
      hero_title2: "GSM Services",
      hero_desc: "Expert GSM solutions, professional tool activations, and advanced bypass services. Your device in safe hands at Youssef GSM.",
      btn_book: "📅 Book Service",
      btn_call: "📞 Call Now",
      btn_quote: "💰 Get Quote",
      btn_free: "Get Free Diagnostic",
      btn_download: "⬇ Download",
      stat_devices: "Devices Serviced",
      stat_rate: "Success Rate",
      stat_time: "Avg. Turnaround",
      features_heading: "Premium Quality Service",
      features_sub: "We combine expertise with genuine parts to deliver exceptional GSM experiences.",
      feat_warranty: "3-Month Warranty",
      feat_warranty_desc: "All services come with a comprehensive 3-month warranty.",
      feat_speed: "Express Service",
      feat_speed_desc: "Most services completed in 30-60 minutes.",
      feat_genuine: "Genuine Parts",
      feat_genuine_desc: "We use only OEM and high-quality replacement parts.",
      feat_expert: "Expert Technicians",
      feat_expert_desc: "Certified technicians with years of experience in GSM services.",
      feat_location: "Convenient Location",
      feat_location_desc: "Easy to find in ZERARDA with parking available.",
      feat_support: "24/7 Support",
      feat_support_desc: "Get in touch anytime via WhatsApp at +212 771 863 888 for quick assistance.",
      our_word: "Our",
      our_services: "GSM Services",
      services_full_sub: "Expert GSM solutions for all major brands. Fast turnarounds, genuine tools, and warranty on every service.",
      services_heading: "Our Professional GSM Services",
      services_sub: "From device unlocking to cloud account removal, we provide complete GSM solutions.",
      services_cta_title: "Need a GSM Service?",
      services_cta_sub: "Get in touch today for expert GSM assistance.",
      services_cta_btn1: "📅 Book Now",
      services_cta_btn2: "📞 Call Us",
      time_min: "min",
      time_hours: "hours",
      view_all_services: "View All Services →",
      pricing_heading: "Professional GSM Services Pricing",
      pricing_sub: "Transparent pricing for all GSM services. No hidden fees.",
      pricing_title1: "Transparent",
      pricing_title2: "Pricing",
      currency_dzd: "DZD",
      badge_common: "Most Popular",
      comparison_heading: "Open-Boudayri vs Youssef-Claw",
      comparison_sub: "Choose the right solution for your business needs.",
      badge_recommended: "⭐ Recommended",
      comp_verdict_title: "Best For:",
      comp_verdict_boudayri: "Photographers needing a dynamic, feature-rich portfolio with admin dashboard.",
      comp_verdict_youssef: "GSM service providers needing professional tool activations and bypass solutions.",
      testimonials_heading: "What Our Customers Say",
      testimonials_sub: "Real reviews from satisfied customers in ZERARDA.",
      faq_heading: "Frequently Asked Questions",
      faq_sub: "Got questions about GSM services? We've got answers.",
      cta_title: "Ready to Get Started?",
      cta_sub: "Contact us today for professional GSM assistance.",
      contact_title1: "Book Your",
      contact_title2: "GSM Service",
      contact_sub: "Visit us in ZERARDA, call us, or book your GSM service online. We're ready to help!",
      online_booking: "Online Booking",
      contact_info: "Contact Info",
      address: "Address",
      address_val: "Main Street, ZERARDA, TAZA\nMorocco",
      hours_title: "Business Hours",
      hours_mon_fri: "Monday - Friday",
      hours_sat: "Saturday",
      hours_sun: "Sunday",
      chat_with_us: "Chat with us",
      footer_services: "Services",
      footer_company: "Company",
      footer_contact: "Contact",
      footer_phone: "+212 771 863 888",
      footer_location: "ZERARDA, TAZA, Morocco",
      footer_whatsapp: "WhatsApp",
      footer_desc: "Fast, reliable GSM services in ZERARDA. Your device in safe hands.",
      footer_rights: "All rights reserved.",
      footer_made: "Developed by AISSAM LAKHYARI",
      form_name: "Full Name *",
      form_phone: "Phone Number *",
      form_device: "Device Model *",
      form_service: "Service Needed *",
      form_service_sel: "Select a service...",
      form_msg: "Additional Details (Optional)",
      form_msg_ph: "Tell us more about your device or issue...",
      form_phone_ph: "+212 6XX XX XX XX",
      form_name_ph: "John Doe",
      form_device_ph: "e.g., iPhone 13 Pro, Samsung S22",
      form_send: "Send via WhatsApp 💬",
      
      // GSM Tool Activations
      gsm_title: "Professional Tool Activations",
      gsm_sub: "We provide instant and official digital activations for industry-leading GSM servicing tools.",
      gsm_unlock: "Unlock Tool",
      gsm_unlock_desc: "Comprehensive solutions for flashing and unlocking devices from all major manufacturers.",
      gsm_chimera: "Chimera Tool",
      gsm_chimera_desc: "Advanced hardware and software repairs for Huawei, Moto, and more device platforms.",
      gsm_sigma: "Sigma Plus",
      gsm_sigma_desc: "Professional service for Huawei, Moto, and extended device support.",
      gsm_more: "And More",
      gsm_more_desc: "Support for all major GSM servicing platforms and tools.",

      // OPPO/REALME SDM665 Support
      oppo_title: "OPPO / REALME — SDM665 Support Added",
      oppo_features: "Improved Loader — UFS Storage, Erase FRP, Factory Reset",
      oppo_models: "Oppo A5 2020, A9 2020, A52, A72, A92",
      download_unlock: "Download UnlockTool Software",

      // Server-Side Services
      server_title: "Server-Side Services",
      server_sub: "High-speed remote operations for mobile devices requiring server-authorized access.",
      server_desc: "We handle complex tasks that standard software cannot perform locally with dedicated server infrastructure.",
      
      // FRP Bypass
      frp_title: "FRP (Factory Reset Protection) Bypass",
      frp_sub: "Fast and reliable removal of Google Account locks on all major brands.",
      frp_desc: "We help you regain access to devices after a factory reset when original credentials are lost or unknown.",
      
      // Cloud Account & ID Removal
      cloud_title: "Cloud Account & ID Removal",
      cloud_sub: "Specialized services for removing or bypassing manufacturer-specific security locks.",
      cloud_desc: "Professional solutions for device ecosystem locks requiring manufacturer account access.",
      cloud_mi: "Mi Cloud & Xiaomi Cloud",
      cloud_mi_desc: "Full authorization and account removal with data preservation options.",
      cloud_samsung: "Samsung Cloud",
      cloud_samsung_desc: "Security bypass and complete account clearing services.",
      cloud_device: "Device Accounts",
      cloud_device_desc: "Solutions for all major smartphone brand ecosystem locks and account management.",
      
      // Bypass & MDM
      bypass_title: "Full Bypass & MDM Solutions",
      bypass_sub: "Advanced bypass services for restricted and enterprise-locked devices.",
      bypass_full: "Full Bypass",
      bypass_full_desc: "Restoring complete functionality to locked handsets with professional bypass techniques.",
      bypass_mdm: "MDM Bypass",
      bypass_mdm_desc: "Removing Mobile Device Management profiles for enterprise-locked devices.",
      
      // Web Development
      web_title: "Professional Website Development",
      web_sub: "We don't just fix phones; we build digital identities for GSM businesses.",
      web_desc: "Professional web design and development for all types of platforms, tailored specifically for businesses and service providers.",
      
      // Support
      support_title: "Direct WhatsApp Support",
      support_desc: "Every service includes a direct link to our WhatsApp Support for technical inquiries and order processing.",
      
      // Tool Updates
      unlocktool_date: "February 25, 2026",
      unlocktool_ver: "Released Update",
      unlocktool_features: "Improved Loader, UFS Storage, Erase FRP, Factory Reset",
      oppo_title: "OPPO / REALME — SDM665 Support Added",
      oppo_features: "Improved Loader — UFS Storage, Erase FRP, Factory Reset",
      oppo_models: "Oppo A5 2020, A9 2020, A52, A72, A92",
      download_unlock: "Download UnlockTool Software",
      
      // Services
      srv_screen: "Screen Replacement",
      srv_screen_desc: "Premium quality LCD and OLED screen replacements for all major brands.",
      srv_battery: "Battery Replacement",
      srv_battery_desc: "Restore your phone's battery life with genuine replacement batteries.",
      srv_port: "Charging Port Repair",
      srv_port_desc: "Fix charging issues with professional port repair or replacement.",
      srv_water: "Water Damage Recovery",
      srv_water_desc: "Specialized treatment to recover devices from liquid exposure.",
      srv_data: "Data Recovery",
      srv_data_desc: "Recover lost data from damaged phones with specialized tools.",
      srv_software: "Software Issues",
      srv_software_desc: "Fix software bugs, crashes, and performance problems.",
      srv_diag: "Diagnostics",
      srv_diag_desc: "Full device diagnostic to identify any issues.",
      srv_speaker: "Speaker & Mic Repair",
      srv_speaker_desc: "Fix speaker issues or microphone problems.",
      
      // Pricing
      price_unlock: "Starting at 500 DZD",
      price_chimera: "Starting at 1,000 DZD",
      price_sigma: "Starting at 800 DZD",
      price_server: "Starting at 1,500 DZD",
      price_frp: "Starting at 500 DZD",
      price_cloud: "Starting at 800 DZD",
      price_bypass_full: "Starting at 2,000 DZD",
      price_bypass_mdm: "Starting at 1,500 DZD",
      price_web: "Starting at 10,000 DZD",
      price_note: "Varies by device model",
      
      // About
      about_title1: "About",
      about_title2: "Youssef GSM",
      about_sub: "Your trusted partner for professional GSM services in ZERARDA. Quality, speed, and reliability you can count on.",
      our_story: "Our Story",
      story_p1: "Youssef GSM was founded with a simple mission: to provide ZERARDA residents with fast, reliable, and professional GSM solutions.",
      story_p2: "We believe that your device is more than just a tool – it's your connection to the world. That's why we treat every service with the care and attention it deserves.",
      about_years: "Years of Experience",
      about_repairs: "Services Completed",
      why_heading: "Why Choose Youssef GSM?",
      why_sub: "We're not just another GSM service provider. Here's what makes us different.",
      team_heading: "Meet Our Experts",
      team_sub: "Skilled GSM technicians dedicated to getting your device back to perfect condition.",
      team_lead: "Lead Technician",
      team_specialist: "GSM Tools Specialist",
      team_software: "Server-Side Expert",
      about_cta: "Ready to Trust Your Device to Us?",
      about_cta_sub: "Contact us today for professional GSM assistance.",
      
      // Contact
      contact_cta: "Ready to Get Started?",
      contact_cta_sub: "Book your GSM service today and get back to what matters most.",
      
      // Pricing
      pricing_cta: "Need a Price Quote?",
      pricing_cta_sub: "Contact us for a free diagnostic and transparent GSM pricing."
    },
    
    fr: {
      brand_name: "Youssef GSM",
      nav_home: "Accueil",
      nav_services: "Services",
      nav_gsm_tools: "Outils GSM",
      nav_about: "À propos",
      nav_contact: "Contact",
      nav_book: "Réserver",
      nav_pricing: "Tarifs",
      lang_en: "English (EN)",
      lang_fr: "Français (FR)",
      lang_ar: "العربية (AR)",
      hero_badge: "Ouvert Aujourd'hui · ZERARDA",
      hero_title1: "Professionnel",
      hero_title2: "Services GSM",
      hero_desc: "Solutions GSM expertes, activations d'outils professionnels et services de contournement avancés.",
      btn_book: "📅 Réserver",
      btn_call: "📞 Appeler",
      btn_quote: "💰 Devis",
      btn_free: "Diagnostic Gratuit",
      btn_download: "⬇ Télécharger",
      stat_devices: "Appareils Servis",
      stat_rate: "Taux de Réussite",
      stat_time: "Temps Moyen",
      features_heading: "Service Premium",
      features_sub: "Nous combinons l'expertise avec des outils authentiques.",
      feat_warranty: "Garantie 3 Mois",
      feat_warranty_desc: "Tous les services incluent une garantie complète de 3 mois.",
      feat_speed: "Service Express",
      feat_speed_desc: "La plupart des services en 30-60 minutes.",
      feat_genuine: "Outils Authentiques",
      feat_genuine_desc: "Nous utilisons des outils OEM et de haute qualité.",
      feat_expert: "Techniciens Experts",
      feat_expert_desc: "Des techniciens certifiés avec des années d'expérience.",
      feat_location: "Emplacement Pratique",
      feat_location_desc: "Facile à trouver à ZERARDA avec parking disponible.",
      feat_support: "Support 24/7",
      feat_support_desc: "Contactez-nous à tout moment via WhatsApp au +212 771 863 888.",

      // OPPO/REALME SDM665 Support
      oppo_title: "OPPO / REALME — Support SDM665 Ajouté",
      oppo_features: "Chargeur Amélioré — Stockage UFS, Réinitialisation Usine, Suppression FRP",
      oppo_models: "Oppo A5 2020, A9 2020, A52, A72, A92",
      download_unlock: "Télécharger le Logiciel UnlockTool",

      our_word: "Nos",
      our_services: "Services GSM",
      services_full_sub: "Solutions GSM expertes pour toutes les grandes marques. Rapide, outils authentiques, et garantie.",
      services_heading: "Nos Services GSM Professionnels",
      services_sub: "Du déblocage à la suppression de comptes cloud, nous fournissons des solutions GSM complètes.",
      services_cta_title: "Besoin d'un Service GSM?",
      services_cta_sub: "Contactez-nous aujourd'hui pour une assistance GSM experte.",
      services_cta_btn1: "📅 Réserver",
      services_cta_btn2: "📞 Appelez-nous",
      time_min: "min",
      time_hours: "heures",
      view_all_services: "Voir Tous les Services →",
      pricing_heading: "Tarifs des Services GSM Professionnels",
      pricing_sub: "Tarifs transparents pour tous les services GSM. Pas de frais cachés.",
      pricing_title1: "Tarifs",
      pricing_title2: "Transparents",
      currency_dzd: "DZD",
      badge_common: "Plus Populaire",
      comparison_heading: "Open-Boudayri vs Youssef-Claw",
      comparison_sub: "Choisissez la bonne solution pour vos besoins.",
      badge_recommended: "⭐ Recommandé",
      comp_verdict_title: "Idéal Pour:",
      comp_verdict_boudayri: "Les photographes ayant besoin d'un portfolio dynamique avec tableau de bord.",
      comp_verdict_youssef: "Fournisseurs de services GSM ayant besoin d'activations d'outils professionnels et de solutions de contournement.",
      testimonials_heading: "Ce Que Disent Nos Clients",
      testimonials_sub: "Avis réels de clients satisfaits à ZERARDA.",
      faq_heading: "Questions Fréquentes",
      faq_sub: "Des questions sur les services GSM? Nous avons des réponses.",
      cta_title: "Prêt à Commencer?",
      cta_sub: "Contactez-nous aujourd'hui pour une assistance GSM professionnelle.",
      contact_title1: "Réservez Votre",
      contact_title2: "Service GSM",
      contact_sub: "Visitez-nous à ZERARDA, appelez-nous, ou réservez en ligne.",
      online_booking: "Réservation en Ligne",
      contact_info: "Coordonnées",
      address: "Adresse",
      address_val: "Rue Principale, ZERARDA, TAZA\nMaroc",
      hours_title: "Heures d'Ouverture",
      hours_mon_fri: "Lundi - Vendredi",
      hours_sat: "Samedi",
      hours_sun: "Dimanche",
      chat_with_us: "Parlez avec nous",
      footer_services: "Services",
      footer_company: "Entreprise",
      footer_contact: "Contact",
      footer_phone: "+212 771 863 888",
      footer_location: "ZERARDA, TAZA, Maroc",
      footer_whatsapp: "WhatsApp",
      footer_desc: "Services GSM rapides et fiables à ZERARDA. Votre appareil en sécurité.",
      footer_rights: "Tous droits réservés.",
      footer_made: "Développé par AISSAM LAKHYARI",
      form_name: "Nom Complet *",
      form_phone: "Numéro de Téléphone *",
      form_device: "Modèle d'Appareil *",
      form_service: "Service Nécessaire *",
      form_service_sel: "Sélectionnez un service...",
      form_msg: "Détails Supplémentaires (Optionnel)",
      form_msg_ph: "Dites-nous en plus sur votre appareil...",
      form_phone_ph: "+212 6XX XX XX XX",
      form_name_ph: "Jean Dupont",
      form_device_ph: "ex: iPhone 13 Pro, Samsung S22",
      form_send: "Envoyer via WhatsApp 💬"
    },
    
    ar: {
      brand_name: "يوسف GSM",
      nav_home: "الرئيسية",
      nav_services: "الخدمات",
      nav_gsm_tools: "أدوات GSM",
      nav_about: "عننا",
      nav_contact: "اتصل بنا",
      nav_book: "احجز",
      nav_pricing: "الأسعار",
      lang_en: "English (EN)",
      lang_fr: "Français (FR)",
      lang_ar: "العربية (AR)",
      hero_badge: "مفتوح اليوم · زراردة",
      hero_title1: "احترافي",
      hero_title2: "خدمات GSM",
      hero_desc: "حلول GSM احترافية وتنشيط أدوات محترفة وخدمات تخطي متقدمة. جهازك في أمان معنا.",
      btn_book: "📅 احجز",
      btn_call: "📞 اتصل",
      btn_quote: "💰 عرض سعر",
      btn_free: "احصل على تشخيص مجاني",
      btn_download: "⬇ تحميل",
      stat_devices: "جهاز تم خدمته",
      stat_rate: "نسبة النجاح",
      stat_time: "متوسط الوقت",
      features_heading: "خدمة متميزة",
      features_sub: "نجمع بين الخبرة والأدوات الأصلية لتقديم أفضل تجربة GSM.",
      feat_warranty: "ضمان 3 أشهر",
      feat_warranty_desc: "جميع الخدمات تشمل ضمان شامل لمدة 3 أشهر.",
      feat_speed: "خدمة سريعة",
      feat_speed_desc: "معظم الخدمات تكتمل في 30-60 دقيقة.",
      feat_genuine: "أدوات أصلية",
      feat_genuine_desc: "نستخدم أدوات OEM عالية الجودة فقط.",
      feat_expert: "فنيون خبراء",
      feat_expert_desc: "فنيون معتمدون بخبرة سنوات في خدمات GSM.",
      feat_location: "موقع ملائم",
      feat_location_desc: "سهل العثور عليه في زراردة مع مواقف متوفرة.",
      feat_support: "دعم 24/7",
      feat_support_desc: "تواصل معنا في أي وقت عبر واتساب على +212 771 863 888.",

      // OPPO/REALME SDM665 Support
      oppo_title: "OPPO / REALME — دعم SDM665 مضاف",
      oppo_features: "محمل محسّن — تخزين UFS، إعادة تعيين المصنع، حذف FRP",
      oppo_models: "Oppo A5 2020، A9 2020، A52، A72، A92",
      download_unlock: "تحميل برنامج UnlockTool",

      our_word: "خدمات",
      our_services: "خدمات GSM",
      services_full_sub: "حلول GSM احترافية لجميع العلامات التجارية. سريع، أدوات أصلية، وضمان.",
      services_heading: "خدمات GSM الاحترافية",
      services_sub: "من فك التشفير إلى إزالة حسابات السحابة، نقدم حلول GSM كاملة.",
      services_cta_title: "تحتاج خدمة GSM؟",
      services_cta_sub: "تواصل معنا اليوم للحصول على مساعدة GSM احترافية.",
      services_cta_btn1: "📅 احجز الآن",
      services_cta_btn2: "📞 اتصل بنا",
      time_min: "دقيقة",
      time_hours: "ساعة",
      view_all_services: "عرض جميع الخدمات →",
      pricing_heading: "أسعار خدمات GSM الاحترافية",
      pricing_sub: "أسعار شفافة لجميع خدمات GSM. لا رسوم خفية.",
      pricing_title1: "أسعار",
      pricing_title2: "شفافة",
      currency_dzd: "دج",
      badge_common: "الأكثر شيوعاً",
      comparison_heading: "مقارنة: Open-Boudayri vs Youssef-Claw",
      comparison_sub: "اختر الحل المناسب لاحتياجاتك.",
      badge_recommended: "⭐ موصى به",
      comp_verdict_title: "الأفضل لـ:",
      comp_verdict_boudayri: "المصورين الذين يحتاجون معرض ديناميكي مع لوحة تحكم.",
      comp_verdict_youssef: "مزودي خدمات GSM الذين يحتاجون تنشيط أدوات احترافية وحلول تخطي.",
      testimonials_heading: "ماذا يقول عملاؤنا",
      testimonials_sub: "آراء حقيقية من عملاء راضين في زراردة.",
      faq_heading: "الأسئلة الشائعة",
      faq_sub: "لديك أسئلة عن خدمات GSM؟ لدينا إجابات.",
      cta_title: "مستعد للبدء؟",
      cta_sub: "تواصل معنا اليوم للحصول على مساعدة GSM احترافية.",
      contact_title1: "احجز خدمة",
      contact_title2: "لجهازك",
      contact_sub: "زرنا في زراردة، اتصل بنا، أو احجز عبر الإنترنت.",
      online_booking: "حجز عبر الإنترنت",
      contact_info: "معلومات الاتصال",
      address: "العنوان",
      address_val: "الشارع الرئيسي، زراردة، طاطا\nالمغرب",
      hours_title: "ساعات العمل",
      hours_mon_fri: "الاثنين - الجمعة",
      hours_sat: "السبت",
      hours_sun: "الأحد",
      chat_with_us: "تحدث معنا",
      footer_services: "الخدمات",
      footer_company: "الشركة",
      footer_contact: "اتصل بنا",
      footer_phone: "+212 771 863 888",
      footer_location: "زراردة، طاطا، المغرب",
      footer_whatsapp: "واتساب",
      footer_desc: "خدمات GSM سريعة وموثوق في زراردة. جهازك في أمان.",
      footer_rights: "جميع الحقوق محفوظة.",
      footer_made: "تطوير AISSAM LAKHYARI",
      form_name: "الاسم الكامل *",
      form_phone: "رقم الهاتف *",
      form_device: "نموذج الجهاز *",
      form_service: "الخدمة المطلوبة *",
      form_service_sel: "اختر خدمة...",
      form_msg: "تفاصيل إضافية (اختياري)",
      form_msg_ph: "أخبرنا بالمزيد عن جهازك...",
      form_phone_ph: "+212 6XX XX XX XX",
      form_name_ph: "أحمد محمد",
      form_device_ph: "مثال: iPhone 13 Pro, Samsung S22",
      form_send: "إرسال عبر واتساب 💬"
    }
  };

  // ===== LANGUAGE & DIRECTION =====
  let currentLang = localStorage.getItem('youssef_gsm_lang_v2') || 'en';

  const setLanguage = (lang) => {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('youssef_gsm_lang_v2', lang);

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

    // Update placeholders
    document.querySelectorAll('[placeholder]').forEach(el => {
      const placeholderKey = el.getAttribute('data-i18n');
      if (placeholderKey && translations[lang] && translations[lang][placeholderKey]) {
        el.placeholder = translations[lang][placeholderKey];
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

  console.log('Youssef GSM - Modern V2 UI Loaded Successfully 🚀');
  console.log('Developed by AISSAM LAKHYARI');
});
