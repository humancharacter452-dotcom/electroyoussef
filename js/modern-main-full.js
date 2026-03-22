/* ============================================
   YOUSSEF_GSM - Modern JavaScript (Full)
   Author: AISSAM LAKHYARI
   Navigation, animations, i18n, FAQ, form handling
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  
  // ===== TRANSLATION DICTIONARY =====
  const translations = {
    en: {
      brand_name: "YOUSSEF_GSM",
      nav_home: "Home",
      nav_services: "Services",
      nav_about: "About",
      nav_contact: "Contact",
      nav_book: "Book Service",
      nav_pricing: "Services",
      lang_en: "English (EN)",
      lang_fr: "Français (FR)",
      lang_ar: "العربية (AR)",
      hero_badge: "Professional Software Services",
      hero_title1: "Software Solutions",
      hero_title2: "& GSM Services",
      hero_desc: "Expert software services, GSM tool activations, and digital solutions. Professional services at YOUSSEF_GSM.",
      btn_book: "📅 Book Service",
      btn_call: "📞 Call Now",
      btn_quote: "💰 Get Quote",
      btn_free: "Get Free Consultation",
      stat_devices: "Services Completed",
      stat_rate: "Success Rate",
      stat_time: "Avg. Turnaround",
      features_heading: "Premium Quality Service",
      features_sub: "We combine expertise with cutting-edge technology to deliver exceptional digital solutions.",
      feat_warranty: "Service Warranty",
      feat_warranty_desc: "All services come with comprehensive warranty covering support and maintenance.",
      feat_speed: "Express Delivery",
      feat_speed_desc: "Most projects completed quickly with efficient processes.",
      feat_genuine: "Official Tools",
      feat_genuine_desc: "We use only official, licensed tools and software for all services.",
      feat_expert: "Expert Team",
      feat_expert_desc: "Certified professionals with years of experience in software development and GSM services.",
      feat_location: "Online Services",
      feat_location_desc: "Available worldwide through online communication and remote support.",
      feat_support: "24/7 Support",
      feat_support_desc: "Get in touch anytime via Telegram at +212 771-863888 for quick assistance.",
      feat_transparent: "Transparent Communication",
      feat_transparent_desc: "Clear communication throughout your project. No hidden surprises.",
      our_word: "Our",
      our_services: "Software Services",
      services_full_sub: "Expert software solutions for all business needs. Fast delivery, professional tools, and warranty on every service.",
      services_heading: "Our Professional Services",
      services_sub: "From software development to GSM tool activations, we provide complete digital solutions.",
      services_cta_title: "Need a Service?",
      services_cta_sub: "Get in touch today for expert software and GSM assistance.",
      services_cta_btn1: "📅 Book Now",
      services_cta_btn2: "📞 Contact Us",
      srv_screen: "Software Development",
      srv_screen_desc: "Custom software development tailored to your business needs and requirements.",
      srv_battery: "Web Development",
      srv_battery_desc: "Professional website development with modern design and responsive layouts.",
      srv_port: "App Development",
      srv_port_desc: "Mobile app development for iOS and Android platforms with cutting-edge technology.",
      srv_water: "Social Media Followers",
      srv_water_desc: "Boost your social media presence with authentic followers and engagement.",
      srv_data: "Data Recovery",
      srv_data_desc: "Recover lost data from damaged devices with specialized tools.",
      srv_software: "Software Issues",
      srv_software_desc: "Fix software bugs, crashes, and performance problems.",
      srv_diag: "Diagnostics",
      srv_diag_desc: "Full system diagnostic to identify any issues.",
      srv_speaker: "GSM Tool Activations",
      srv_speaker_desc: "Official activations for all major GSM servicing tools.",
      time_min: "min",
      time_hours: "hours",
      view_all_services: "View All Services →",
      pricing_heading: "Professional Services",
      pricing_sub: "Contact us for a free consultation and transparent pricing.",
      pricing_title1: "Professional",
      pricing_title2: "Services",
      currency_dzd: "Contact",
      price_note: "Contact for quote",
      price_diag_note: "Comprehensive diagnostic",
      fe_genuine: "Official tools",
      fe_warranty: "Service warranty",
      fe_express: "Express delivery",
      fe_specialized: "Specialized solutions",
      fe_confidential: "Confidential handling",
      fe_diagnostic: "Free consultation",
      fe_support: "Follow-up support",
      fe_expert: "Expert analysis",
      badge_common: "Most Popular",
      testimonials_heading: "What Our Customers Say",
      testimonials_sub: "Trusted by customers worldwide.",
      t1_text: "Amazing software development services! They delivered exactly what I needed on time. Highly recommend YOUSSEF_GSM!",
      t1_name: "Ahmed K.",
      t1_role: "Software Development",
      t2_text: "Professional GSM tool activation service. Quick, reliable, and excellent support throughout the process.",
      t2_name: "Sara B.",
      t2_role: "GSM Services",
      t3_text: "Great web development work! They created a stunning website for my business. Will definitely use again.",
      t3_name: "Mohamed R.",
      t3_role: "Web Development",
      faq_heading: "Frequently Asked Questions",
      faq_sub: "Got questions? We've got answers.",
      faq1_q: "What software services do you offer?",
      faq1_a: "We offer comprehensive software development, web development, mobile app development, social media growth services, and GSM tool activations.",
      faq2_q: "Do you offer a warranty on your services?",
      faq2_a: "Yes! All our services come with a service warranty. If any issues arise, we'll provide support and fixes.",
      faq3_q: "How long does software development take?",
      faq3_a: "Development time varies by project complexity. We provide detailed timelines during consultation and deliver on schedule.",
      faq4_q: "Can you recover data from any device?",
      faq4_a: "We specialize in data recovery from various devices. Success depends on the extent of damage and device type.",
      faq5_q: "What GSM tools do you support?",
      faq5_a: "We support activations for all major GSM servicing tools including UnlockTool, Chimera, Sigma, and more.",
      cta_title: "Ready to Get Started?",
      cta_sub: "Contact us today for professional software services and GSM solutions.",
      about_title1: "About",
      about_title2: "YOUSSEF_GSM",
      about_sub: "Your trusted partner for professional software services and GSM solutions worldwide.",
      our_story: "Our Story",
      story_p1: "YOUSSEF_GSM was founded with a mission: to provide professional software development and GSM services to clients worldwide.",
      story_p2: "We believe in delivering quality digital solutions that help businesses grow. Every project is treated with care and attention.",
      about_years: "Years of Experience",
      about_repairs: "Projects Completed",
      why_heading: "Why Choose YOUSSEF_GSM?",
      why_sub: "We're not just another service provider. Here's what makes us different.",
      team_heading: "Meet Our Team",
      team_sub: "Skilled professionals dedicated to delivering excellence.",
      team_lead: "Lead Developer",
      team_specialist: "GSM Specialist",
      team_software: "Software Expert",
      about_cta: "Ready to Work With Us?",
      about_cta_sub: "Contact us today for professional assistance.",
      online_booking: "Online Booking",
      contact_title1: "Contact",
      contact_title2: "Us",
      contact_sub: "Reach out via Telegram or WhatsApp. We're ready to help!",
      contact_info: "Contact Info",
      address: "Telegram",
      address_val": "+212 771-863888<br>@YOUSSEF_GSM",
      hours_title: "Response Time",
      hours_mon_fri: "24/7 Online Support",
      hours_sat: "24/7 Online Support",
      hours_sun: "24/7 Online Support",
      contact_cta: "Ready to Get Started?",
      contact_cta_sub: "Contact us today and get started on your project.",
      footer_services: "Services",
      footer_company: "Company",
      footer_contact: "Contact",
      footer_phone: "+212 771 863 888",
      footer_location: "Online Services",
      footer_whatsapp: "WhatsApp",
      chat_with_us: "Chat with us",
      footer_desc: "Professional software and GSM services. Your digital solution partner.",
      footer_rights: "All rights reserved.",
      footer_made: "Developed by AISSAM LAKHYARI",
      form_name: "Full Name *",
      form_phone: "Phone Number *",
      form_device: "Project Type *",
      form_service: "Service Needed *",
      form_service_sel: "Select a service...",
      opt_screen: "Software Development",
      opt_battery: "Web Development",
      opt_port: "App Development",
      opt_water: "Social Media Followers",
      opt_soft: "Software Issue",
      opt_data: "Data Recovery",
      opt_other: "Other / Need Consultation",
      form_msg: "Additional Details (Optional)",
      form_msg_ph: "Tell us more about your project...",
      form_phone_ph: "+212 6XX XX XX XX",
      form_name_ph: "John Doe",
      form_device_ph: "e.g., Software Development, GSM Activation",
      form_send: "Send via WhatsApp 💬",
      pricing_cta: "Need a Quote?",
      pricing_cta_sub: "Contact us for a free consultation and transparent pricing."
    },
    
    fr: {
      brand_name: "YOUSSEF_GSM",
      nav_home: "Accueil",
      nav_services: "Services",
      nav_about: "À propos",
      nav_contact: "Contact",
      nav_book: "Réserver",
      nav_pricing: "Services",
      lang_en: "English (EN)",
      lang_fr: "Français (FR)",
      lang_ar: "العربية (AR)",
      hero_badge: "Services Logiciels Professionnels",
      hero_title1: "Solutions Logicielles",
      hero_title2: "& Services GSM",
      hero_desc: "Services logiciels experts, activations d'outils GSM et solutions numériques. Services professionnels chez YOUSSEF_GSM.",
      btn_book: "📅 Réserver",
      btn_call: "📞 Appeler",
      btn_quote: "💰 Devis",
      btn_free: "Consultation Gratuite",
      stat_devices: "Services Réalisés",
      stat_rate: "Taux de Réussite",
      stat_time: "Temps Moyen",
      features_heading: "Service Premium",
      features_sub: "Nous combinons l'expertise avec une technologie de pointe.",
      feat_warranty: "Garantie de Service",
      feat_warranty_desc: "Tous les services incluent une garantie complète.",
      feat_speed: "Livraison Express",
      feat_speed_desc: "La plupart des projets livrés rapidement.",
      feat_genuine: "Outils Officiels",
      feat_genuine_desc: "Nous utilisons uniquement des outils officiels et licenciés.",
      feat_expert: "Équipe d'Experts",
      feat_expert_desc: "Professionnels certifiés avec des années d'expérience.",
      feat_location: "Services en Ligne",
      feat_location_desc: "Disponible dans le monde entier via support en ligne.",
      feat_support: "Support 24/7",
      feat_support_desc: "Contactez-nous à tout moment via Telegram au +212 771-863888.",
      feat_transparent: "Communication Transparente",
      feat_transparent_desc: "Communication claire tout au long de votre projet.",
      our_word: "Nos",
      our_services: "Services Logiciels",
      services_full_sub: "Solutions logicielles expertes pour tous les besoins. Livraison rapide, outils professionnels.",
      services_heading: "Nos Services Professionnels",
      services_sub: "Du développement logiciel aux activations GSM, nous fournissons des solutions complètes.",
      services_cta_title: "Besoin d'un Service?",
      services_cta_sub: "Contactez-nous pour une assistance experte.",
      services_cta_btn1: "📅 Réserver",
      services_cta_btn2: "📞 Contactez-nous",
      srv_screen: "Développement Logiciel",
      srv_screen_desc: "Développement logiciel personnalisé adapté à vos besoins.",
      srv_battery: "Développement Web",
      srv_battery_desc: "Sites web professionnels avec design moderne et responsive.",
      srv_port: "Développement d'Apps",
      srv_port_desc: "Applications mobiles pour iOS et Android.",
      srv_water: "Abonnés Réseaux Sociaux",
      srv_water_desc: "Boostez votre présence avec des abonnés authentiques.",
      srv_data: "Récupération de Données",
      srv_data_desc: "Récupérez les données perdues d'appareils endommagés.",
      srv_software: "Problèmes Logiciels",
      srv_software_desc: "Réparez les bugs et problèmes de performance.",
      srv_diag: "Diagnostics",
      srv_diag_desc: "Diagnostic complet pour identifier tout problème.",
      srv_speaker: "Activations Outils GSM",
      srv_speaker_desc: "Activations officielles pour tous les outils GSM majeurs.",
      time_min: "min",
      time_hours: "heures",
      view_all_services: "Voir Tous Les Services →",
      pricing_heading: "Services Professionnels",
      pricing_sub: "Contactez-nous pour une consultation gratuite et tarifs transparents.",
      pricing_title1: "Services",
      pricing_title2": "Professionnels",
      currency_dzd: "Contact",
      price_note: "Contactez pour devis",
      price_diag_note: "Diagnostic complet",
      fe_genuine: "Outils officiels",
      fe_warranty: "Garantie de service",
      fe_express: "Livraison express",
      fe_specialized: "Solutions spécialisées",
      fe_confidential: "Traitement confidentiel",
      fe_diagnostic: "Consultation gratuite",
      fe_support: "Support de suivi",
      fe_expert: "Analyse experte",
      badge_common: "Plus Populaire",
      testimonials_heading: "Ce Que Disent Nos Clients",
      testimonials_sub: "Approuvé par des clients dans le monde entier.",
      t1_text: "Services de développement logiciel incroyables! Livraison à temps. Je recommande vivement YOUSSEF_GSM!",
      t1_name: "Ahmed K.",
      t1_role: "Développement Logiciel",
      t2_text: "Service professionnel d'activation d'outils GSM. Rapide et fiable.",
      t2_name: "Sara B.",
      t2_role: "Services GSM",
      t3_text: "Excellent travail de développement web! Site magnifique pour mon entreprise.",
      t3_name: "Mohamed R.",
      t3_role: "Développement Web",
      faq_heading: "Questions Fréquentes",
      faq_sub: "Des questions? Nous avons des réponses.",
      faq1_q: "Quels services logiciels offrez-vous?",
      faq1_a: "Nous offrons un développement logiciel complet, le développement web, le développement d'applications, les services de croissance sociale et les activations d'outils GSM.",
      faq2_q: "Offrez-vous une garantie?",
      faq2_a: "Oui! Tous nos services incluent une garantie de service avec support.",
      faq3_q: "Combien de temps prend le développement?",
      faq3_a: "Le temps varie selon la complexité. Nous fournissons des calendriers détaillés.",
      faq4_q: "Pouvez-vous récupérer des données?",
      faq4_a: "Nous nous spécialisons dans la récupération de données sur divers appareils.",
      faq5_q: "Quels outils GSM supportez-vous?",
      faq5_a: "Nous supportons tous les outils majeurs: UnlockTool, Chimera, Sigma, et plus.",
      cta_title: "Prêt à Commencer?",
      cta_sub: "Contactez-nous pour des services logiciels et GSM professionnels.",
      about_title1: "À Propos",
      about_title2": "YOUSSEF_GSM",
      about_sub: "Votre partenaire de confiance pour les services logiciels et GSM dans le monde entier.",
      our_story: "Notre Histoire",
      story_p1: "YOUSSEF_GSM a été fondé avec une mission: fournir des services logiciels et GSM professionnels.",
      story_p2: "Nous croyons livrer des solutions numériques de qualité qui aident les entreprises à grandir.",
      about_years: "Années d'Expérience",
      about_repairs: "Projets Complétés",
      why_heading: "Pourquoi Choisir YOUSSEF_GSM?",
      why_sub: "Nous ne sommes pas juste un autre fournisseur. Voici ce qui nous rend différents.",
      team_heading: "Rencontrez Notre Équipe",
      team_sub: "Professionnels qualifiés dédiés à l'excellence.",
      team_lead: "Développeur Principal",
      team_specialist: "Spécialiste GSM",
      team_software: "Expert Logiciel",
      about_cta: "Prêt à Travailler Avec Nous?",
      about_cta_sub: "Contactez-nous aujourd'hui pour une assistance professionnelle.",
      online_booking: "Réservation en Ligne",
      contact_title1: "Contactez",
      contact_title2": "Nous",
      contact_sub: "Contactez-nous via Telegram ou WhatsApp. Nous sommes prêts à aider!",
      contact_info: "Coordonnées",
      address: "Telegram",
      address_val": "+212 771-863888<br>@YOUSSEF_GSM",
      hours_title: "Temps de Réponse",
      hours_mon_fri: "Support en ligne 24/7",
      hours_sat: "Support en ligne 24/7",
      hours_sun: "Support en ligne 24/7",
      contact_cta: "Prêt à Commencer?",
      contact_cta_sub: "Contactez-nous aujourd'hui et commencez votre projet.",
      footer_services: "Services",
      footer_company: "Entreprise",
      footer_contact: "Contact",
      footer_phone: "+212 771 863 888",
      footer_location: "Services en Ligne",
      footer_whatsapp: "WhatsApp",
      chat_with_us: "Parlez avec nous",
      footer_desc: "Services logiciels et GSM professionnels. Votre partenaire numérique.",
      footer_rights: "Tous droits réservés.",
      footer_made: "Développé par AISSAM LAKHYARI",
      form_name: "Nom Complet *",
      form_phone: "Numéro de Téléphone *",
      form_device: "Type de Projet *",
      form_service: "Service Nécessaire *",
      form_service_sel: "Sélectionnez un service...",
      opt_screen: "Développement Logiciel",
      opt_battery: "Développement Web",
      opt_port: "Développement d'Apps",
      opt_water: "Abonnés Réseaux Sociaux",
      opt_soft: "Problème Logiciel",
      opt_data: "Récupération de Données",
      opt_other: "Autre / Besoin de Consultation",
      form_msg: "Détails Supplémentaires (Optionnel)",
      form_msg_ph: "Dites-nous en plus sur votre projet...",
      form_phone_ph: "+212 6XX XX XX XX",
      form_name_ph: "Jean Dupont",
      form_device_ph: "Ex: Développement Logiciel, Activation GSM",
      form_send: "Envoyer via WhatsApp 💬",
      pricing_cta: "Besoin d'un Devis?",
      pricing_cta_sub: "Contactez-nous pour une consultation gratuite et tarifs transparents."
    },
    
    ar: {
      brand_name: "YOUSSEF_GSM",
      nav_home: "الرئيسية",
      nav_services: "الخدمات",
      nav_about: "من نحن",
      nav_contact: "اتصل بنا",
      nav_book: "احجز خدمة",
      nav_pricing: "الخدمات",
      lang_en: "English (EN)",
      lang_fr: "Français (FR)",
      lang_ar: "العربية (AR)",
      hero_badge: "خدمات برمجية احترافية",
      hero_title1: "حلول برمجية",
      hero_title2: "وخدمات GSM",
      hero_desc: "خدمات برمجية خبراء وتفعيلات أدوات GSM وحلول رقمية. خدمات احترافية في YOUSSEF_GSM.",
      btn_book: "📅 احجز خدمة",
      btn_call: "📞 اتصل الآن",
      btn_quote: "💰 عرض سعر",
      btn_free: "استشارة مجانية",
      stat_devices: "خدمة تمت",
      stat_rate: "نسبة النجاح",
      stat_time": "متوسط وقت التسليم",
      features_heading: "خدمة متميزة",
      features_sub: "نجمع بين الخبرة والتكنولوجيا المتقدمة.",
      feat_warranty: "ضمان الخدمة",
      feat_warranty_desc: "جميع الخدمات مشمولة بضمان شامل.",
      feat_speed: "تسليم سريع",
      feat_speed_desc: "معظم المشاريع تسلم بسرعة.",
      feat_genuine: "أدوات رسمية",
      feat_genuine_desc: "نستخدم أدوات وبرامج رسمية ومرخصة فقط.",
      feat_expert: "فريق خبراء",
      feat_expert_desc: "محترفون معتمدون بخبرة سنوات.",
      feat_location: "خدمات أونلاين",
      feat_location_desc: "متاح عالمياً عبر التواصل أونلاين.",
      feat_support: "دعم 24/7",
      feat_support_desc: "تواصل معنا في أي وقت عبر Telegram على +212 771-863888.",
      feat_transparent: "تواصل شفاف",
      feat_transparent_desc: "اتصال واضح طوال مشروعك.",
      our_word: "خدماتنا",
      our_services: "الخدمات البرمجية",
      services_full_sub: "حلول برمجية خبراء لجميع الاحتياجات. تسليم سريع، أدوات احترافية، وضمان.",
      services_heading: "خدماتنا الاحترافية",
      services_sub: "من التطوير البرمجي إلى تفعيلات أدوات GSM، نقدم حلولاً رقمية شاملة.",
      services_cta_title: "هل تحتاج إلى خدمة؟",
      services_cta_sub": "تواصل معنا للحصول على مساعدة خبراء.",
      services_cta_btn1: "📅 احجز الآن",
      services_cta_btn2: "📞 تواصل معنا",
      srv_screen: "تطوير البرمجيات",
      srv_screen_desc: "تطوير برمجي مخصص حسب احتياجاتك.",
      srv_battery: "تطوير الويب",
      srv_battery_desc: "مواقع ويب احترافية بتصميم عصري.",
      srv_port: "تطوير التطبيقات",
      srv_port_desc: "تطبيقات الجوال لنظامي iOS و Android.",
      srv_water: "متابعي وسائل التواصل",
      srv_water_desc": "عزز تواجدك مع متابعين حقيقيين.",
      srv_data: "استعادة البيانات",
      srv_data_desc: "استعد البيانات المفقودة من الأجهزة التالفة.",
      srv_software: "مشاكل البرمجيات",
      srv_software_desc": "أصلح الأخطاء ومشاكل الأداء.",
      srv_diag: "التشخيص",
      srv_diag_desc: "تشخيص كامل لتحديد أي مشاكل.",
      srv_speaker: "تفعيلات أدوات GSM",
      srv_speaker_desc: "تفعيلات رسمية لجميع أدوات GSM الرئيسية.",
      time_min: "دقيقة",
      time_hours: "ساعة",
      view_all_services: "عرض جميع الخدمات →",
      pricing_heading: "خدمات احترافية",
      pricing_sub: "تواصل معنا لاستشارة مجانية وتسعير شفاف.",
      pricing_title1: "خدمات",
      pricing_title2": "احترافية",
      currency_dzd": "تواصل",
      price_note: "تواصل للحصول على تسعير",
      price_diag_note: "تشخيص شامل",
      fe_genuine: "أدوات رسمية",
      fe_warranty: "ضمان خدمة",
      fe_express: "تسليم سريع",
      fe_specialized: "حلول متخصصة",
      fe_confidential: "معاملة سرية",
      fe_diagnostic: "استشارة مجانية",
      fe_support: "دعم المتابعة",
      fe_expert: "تحليل خبير",
      badge_common: "الأكثر شيوعاً",
      testimonials_heading: "ماذا يقول عملاؤنا",
      testimonials_sub: "موثوق به من قبل العملاء حول العالم.",
      t1_text: "خدمات تطوير برمجي مذهلة! تسليم في الوقت المحدد. أوصي بشدة YOUSSEF_GSM!",
      t1_name: "أحمد ك.",
      t1_role": "تطوير البرمجيات",
      t2_text: "خدمة احترافية لتفعيل أدوات GSM. سريع وموثوق.",
      t2_name: "سارة ب.",
      t2_role: "خدمات GSM",
      t3_text: "عمل رائع في تطوير الويب! موقع مذهل لعملي.",
      t3_name: "محمد ر.",
      t3_role: "تطوير الويب",
      faq_heading: "الأسئلة الشائعة",
      faq_sub: "لديك أسئلة؟ لدينا إجابات.",
      faq1_q: "ما هي الخدمات البرمجية التي تقدمونها؟",
      faq1_a: "نقدم تطوير برمجي شامل وتطوير الويب وتطوير التطبيقات وخدمات النمو الاجتماعي وتفعيلات أدوات GSM.",
      faq2_q: "هل تقدمون ضماناً؟",
      faq2_a: "نعم! جميع خدماتنا مشمولة بضمان خدمة مع دعم.",
      faq3_q: "كم يستغرق التطوير؟",
      faq3_a: "الوقت يختلف حسب التعقيد. نقدم جداول زمنية مفصلة.",
      faq4_q: "هل يمكن استعادة البيانات؟",
      faq4_a: "نتخصص في استعادة البيانات من أجهزة متنوعة.",
      faq5_q: "ما هي أدوات GSM التي تدعمونها؟",
      faq5_a: "ندعم جميع الأدوات الرئيسية: UnlockTool و Chimera و Sigma والمزيد.",
      cta_title: "هل أنت مستعد للبدء؟",
      cta_sub: "تواصل معنا لخدمات برمجية و GSM احترافية.",
      about_title1: "من نحن",
      about_title2": "YOUSSEF_GSM",
      about_sub: "شريكك الموثوق للخدمات البرمجية و GSM في جميع أنحاء العالم.",
      our_story: "قصتنا",
      story_p1: "تأسس YOUSSEF_GSM برسالة: توفير خدمات برمجية و GSM احترافية.",
      story_p2: "نؤمن بتقديم حلول رقمية عالية الجودة تساعد الشركات على النمو.",
      about_years: "سنوات الخبرة",
      about_repairs: "المشاريع المكتملة",
      why_heading: "لماذا تختار YOUSSEF_GSM؟",
      why_sub: "لسنا مجرد مزود خدمة. إليك ما يميزنا.",
      team_heading: "تعرف على فريقنا",
      team_sub: "محترفون مهرة مكرسون للتميز.",
      team_lead: "المطور الرئيسي",
      team_specialist: "خبير GSM",
      team_software: "خبير برمجيات",
      about_cta: "هل أنت مستعد للعمل معنا؟",
      about_cta_sub": "تواصل معنا اليوم للحصول على مساعدة احترافية.",
      online_booking: "الحجز الرقمي",
      contact_title1: "اتصل",
      contact_title2": "بنا",
      contact_sub: "تواصل معنا عبر Telegram أو WhatsApp. نحن مستعدون للمساعدة!",
      contact_info: "معلومات الاتصال",
      address: "Telegram",
      address_val": "+212 771-863888<br>@YOUSSEF_GSM",
      hours_title: "وقت الاستجابة",
      hours_mon_fri: "دعم أونلاين 24/7",
      hours_sat: "دعم أونلاين 24/7",
      hours_sun: "دعم أونلاين 24/7",
      contact_cta: "هل أنت مستعد للبدء؟",
      contact_cta_sub": "تواصل معنا اليوم وابدأ مشروعك.",
      footer_services: "الخدمات",
      footer_company: "الشركة",
      footer_contact: "اتصل بنا",
      footer_phone: "+212 771 863 888",
      footer_location: "خدمات أونلاين",
      footer_whatsapp: "واتساب",
      chat_with_us: "تحدث معنا",
      footer_desc: "خدمات برمجية و GSM احترافية. شريكك الرقمي.",
      footer_rights: "جميع الحقوق محفوظة.",
      footer_made: "تطوير AISSAM LAKHYARI",
      form_name: "الاسم الكامل *",
      form_phone: "رقم الهاتف *",
      form_device: "نوع المشروع *",
      form_service: "الخدمة المطلوبة *",
      form_service_sel: "اختر خدمة...",
      opt_screen: "تطوير البرمجيات",
      opt_battery: "تطوير الويب",
      opt_port: "تطوير التطبيقات",
      opt_water: "متابعي وسائل التواصل",
      opt_soft: "مشكلة برمجية",
      opt_data: "استعادة البيانات",
      opt_other": "أخرى / أحتاج استشارة",
      form_msg: "تفاصيل إضافية (اختياري)",
      form_msg_ph": "أخبرنا بالمزيد عن مشروعك...",
      form_phone_ph: "+212 6XX XX XX XX",
      form_name_ph: "أحمد محمد",
      form_device_ph": "مثال: تطوير برمجي، تفعيل GSM",
      form_send: "إرسال عبر واتساب 💬",
      pricing_cta: "هل تحتاج تسعير؟",
      pricing_cta_sub: "تواصل معنا لاستشارة مجانية وتسعير شفاف."
    }
  };

  // ===== LANGUAGE & DIRECTION =====
  let currentLang = localStorage.getItem('youssef_gsm_lang_full') || 'en';

  const setLanguage = (lang) => {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('youssef_gsm_lang_full', lang);

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

  // ===== FORM INPUT FOCUS EFFECTS =====
  const inputs = document.querySelectorAll('.form-control');
  
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.borderColor = 'var(--primary)';
      input.style.boxShadow = '0 0 0 3px var(--primary-glow)';
    });
    
    input.addEventListener('blur', () => {
      input.style.borderColor = 'var(--border-color)';
      input.style.boxShadow = 'none';
    });
  });

  console.log('YOUSSEF_GSM - Modern Full UI Loaded Successfully 🚀');
  console.log('Developed by AISSAM LAKHYARI');
});
