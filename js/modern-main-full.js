/* ============================================
   ELECTRO YOUSSEF - Modern JavaScript (Full)
   Author: AISSAM LAKHYARI
   Navigation, animations, i18n, FAQ, form handling
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
      btn_free: "Get Free Diagnostic",
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
      feat_transparent: "Transparent Pricing",
      feat_transparent_desc: "No hidden fees. Clear quotes before any work begins.",
      our_word: "Our",
      our_services: "Repair Services",
      services_full_sub: "Expert smartphone repair for all major brands. Fast turnarounds, genuine parts, and a warranty on every repair.",
      services_heading: "Our Repair Services",
      services_sub: "From cracked screens to water damage, we fix it all.",
      services_cta_title: "Need a Repair?",
      services_cta_sub: "Get in touch today for a free diagnostic and fast repair service.",
      services_cta_btn1: "📅 Book Now",
      services_cta_btn2: "📞 Call Us",
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
      time_min: "min",
      time_hours: "hours",
      view_all_services: "View All Services →",
      pricing_heading: "Repair Prices in DZD",
      pricing_sub: "No hidden fees. No surprises. Get a clear estimate before we start any repair.",
      pricing_title1: "Transparent",
      pricing_title2: "Pricing",
      price_screen: "2,000 – 8,000",
      price_battery: "1,500 – 4,000",
      price_data: "3,000 – 10,000",
      price_port: "1,000 – 3,000",
      price_water: "3,000 – 7,000",
      price_software: "500 – 2,000",
      price_diag: "FREE",
      currency_dzd: "DZD",
      price_note: "Varies by device model",
      price_diag_note: "Comprehensive device check",
      price_gen_cells: "Genuine cells",
      price_rel_fix: "Reliable fix",
      fe_genuine: "Genuine parts",
      fe_warranty: "3-month warranty",
      fe_express: "Express turnaround",
      fe_specialized: "Specialized tools",
      fe_confidential: "Confidential handling",
      fe_diagnostic: "Free diagnostic",
      fe_support: "Follow-up support",
      fe_expert: "Expert analysis",
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
      faq_price_q: "Do prices include parts and labor?",
      faq_price_a: "Yes! All our prices include both parts and labor. There are no hidden fees or surprise charges. The price we quote is the price you pay.",
      faq_warranty_q: "What does the warranty cover?",
      faq_warranty_a: "Our 3-month warranty covers both parts and labor. If the same issue recurs within 3 months, we'll fix it for free.",
      faq_payment_q: "What payment methods do you accept?",
      faq_payment_a: "We accept cash, bank transfers, and mobile payments. Payment is due after the repair is complete and you're satisfied with the results.",
      faq_quote_q: "Can I get a quote before the repair?",
      faq_quote_a: "Absolutely! We provide free diagnostics and clear quotes before any work begins. You'll know exactly what to expect.",
      cta_title: "Ready to Get Your Device Fixed?",
      cta_sub: "Book your repair today and get your phone back in perfect condition.",
      cta_title_alt: "Ready to Trust Your Device to Us?",
      cta_sub_alt: "Contact us today for a free consultation and quick repair service.",
      about_title1: "About",
      about_title2: "Electro Youssef",
      about_sub: "Your trusted partner for all smartphone repairs in ZERARDA. Quality, speed, and reliability you can count on.",
      our_story: "Our Story",
      story_p1: "Electro Youssef was founded with a simple mission: to provide ZERARDA residents with fast, reliable, and affordable smartphone repair services.",
      story_p2: "We believe that your device is more than just a tool – it's your connection to the world. That's why we treat every repair with the care and attention it deserves.",
      about_years: "Years of Experience",
      about_repairs: "Repairs Completed",
      why_heading: "Why Choose Electro Youssef?",
      why_sub: "We're not just another repair shop. Here's what makes us different.",
      team_heading: "Meet the Experts",
      team_sub: "Skilled technicians dedicated to getting your device back to perfect condition.",
      team_lead: "Lead Technician",
      team_specialist: "Screen Specialist",
      team_software: "Software Expert",
      about_cta: "Ready to Trust Your Device to Us?",
      about_cta_sub: "Contact us today for a free consultation and quick repair service.",
      online_booking: "Online Booking",
      contact_title1: "Book Your",
      contact_title2: "Repair",
      contact_sub: "Visit us in ZERARDA, call us, or book your repair online. We're ready to help!",
      contact_info: "Contact Info",
      address: "Address",
      address_val: "Main Street, ZERARDA\nAlgeria",
      hours_title: "Business Hours",
      hours_mon_fri: "Monday - Friday",
      hours_sat: "Saturday",
      hours_sun: "Sunday",
      contact_cta: "Ready to Get Started?",
      contact_cta_sub: "Book your repair today and get back to what matters most.",
      footer_services: "Services",
      footer_company: "Company",
      footer_contact: "Contact",
      footer_phone: "+212 690 99 27 67",
      footer_location: "ZERARDA, Algeria",
      footer_whatsapp: "WhatsApp",
      chat_with_us: "Chat with us",
      footer_desc: "Fast, reliable smartphone repair in ZERARDA. Your device in safe hands.",
      footer_rights: "All rights reserved.",
      footer_made: "Developed by AISSAM LAKHYARI",
      form_name: "Full Name *",
      form_phone: "Phone Number *",
      form_device: "Device Model *",
      form_service: "Service Needed *",
      form_service_sel: "Select a service...",
      opt_screen: "Screen Replacement",
      opt_battery: "Battery Replacement",
      opt_port: "Charging Port Repair",
      opt_water: "Water Damage",
      opt_soft: "Software Issue",
      opt_data: "Data Recovery",
      opt_other: "Other / Need Diagnostics",
      form_msg: "Additional Details (Optional)",
      form_msg_ph: "Tell us more about the issue...",
      form_phone_ph: "+212 6XX XX XX XX",
      form_name_ph: "John Doe",
      form_device_ph: "e.g., iPhone 13 Pro, Samsung S22",
      form_send: "Send via WhatsApp 💬",
      pricing_cta: "Need a Price Quote?",
      pricing_cta_sub: "Contact us for a free diagnostic and transparent pricing."
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
      btn_free: "Diagnostic Gratuit",
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
      feat_transparent: "Tarifs Transparent",
      feat_transparent_desc: "Pas de frais cachés. Devis clairs avant le travail.",
      our_word: "Nos",
      our_services: "Services de Réparation",
      services_full_sub: "Réparations d'experts pour tous les téléphones. Rapide, pièces authentiques, et garantie.",
      services_heading: "Nos Services de Réparation",
      services_sub: "Des écrans fissurés aux dommages d'eau, nous réparons tout.",
      services_cta_title: "Besoin d'une Réparation?",
      services_cta_sub: "Contactez-nous aujourd'hui pour un diagnostic gratuit.",
      services_cta_btn1: "📅 Réserver",
      services_cta_btn2: "📞 Appelez-nous",
      srv_screen: "Remplacement d'Écran",
      srv_screen_desc: "Remplacements d'écran LCD et OLED de qualité premium.",
      srv_battery: "Remplacement de Batterie",
      srv_battery_desc: "Restaurez la durée de vie de votre batterie.",
      srv_port: "Réparation du Port",
      srv_port_desc: "Réparez les problèmes de charge professionnellement.",
      srv_water: "Récupération des Dommages d'Eau",
      srv_water_desc: "Traitement spécialisé pour les appareils exposés à l'eau.",
      srv_data: "Récupération de Données",
      srv_data_desc: "Récupérez les données perdues des appareils endommagés.",
      srv_software: "Problèmes Logiciels",
      srv_software_desc: "Réparez les bugs et problèmes de performance.",
      srv_diag: "Diagnostics",
      srv_diag_desc: "Diagnostic complet pour identifier tout problème.",
      srv_speaker: "Réparation Haut-Parleur",
      srv_speaker_desc: "Réparez les problèmes de haut-parleur et microphone.",
      time_min: "min",
      time_hours: "heures",
      view_all_services: "Voir Tous les Services →",
      pricing_heading: "Tarifs de Réparation en DZD",
      pricing_sub: "Pas de frais cachés. Pas de surprises.",
      pricing_title1: "Tarifs",
      pricing_title2: "Transparents",
      price_screen: "2 000 – 8 000",
      price_battery: "1 500 – 4 000",
      price_data: "3 000 – 10 000",
      price_port: "1 000 – 3 000",
      price_water: "3 000 – 7 000",
      price_software: "500 – 2 000",
      price_diag: "GRATUIT",
      currency_dzd: "DZD",
      price_note: "Varie selon le modèle",
      price_diag_note: "Diagnostic complet",
      price_gen_cells: "Cellules authentiques",
      price_rel_fix: "Réparation fiable",
      fe_genuine: "Pièces authentiques",
      fe_warranty: "Garantie 3 mois",
      fe_express: "Service express",
      fe_specialized: "Outils spécialisés",
      fe_confidential: "Traitement confidentiel",
      fe_diagnostic: "Diagnostic gratuit",
      fe_support: "Support de suivi",
      fe_expert: "Analyse experte",
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
      faq_price_q: "Les prix incluent-ils les pièces et la main d'œuvre?",
      faq_price_a: "Oui! Tous nos prix incluent pièces et main d'œuvre. Pas de frais cachés.",
      faq_warranty_q: "Que couvre la garantie?",
      faq_warranty_a: "Notre garantie de 3 mois couvre les pièces et la main d'œuvre. Si le problème réapparaît, nous réparerons gratuitement.",
      faq_payment_q: "Quels modes de paiement acceptez-vous?",
      faq_payment_a: "Nous acceptons l'espèce, les virements bancaires et les paiements mobiles.",
      faq_quote_q: "Puis-je avoir un devis avant la réparation?",
      faq_quote_a: "Absolument! Nous fournissons un diagnostic gratuit et des devis clairs avant tout travail.",
      cta_title: "Prêt à Réparer Votre Appareil?",
      cta_sub: "Réservez votre réparation aujourd'hui et récupérez votre téléphone en parfait état.",
      cta_title_alt: "Prêt à Nous Faire Confiance?",
      cta_sub_alt: "Contactez-nous aujourd'hui pour une consultation gratuite.",
      about_title1: "À Propos",
      about_title2: "d'Electro Youssef",
      about_sub: "Votre partenaire de confiance pour les réparations de téléphones à ZERARDA.",
      our_story: "Notre Histoire",
      story_p1: "Electro Youssef a été fondé avec une mission simple: fournir des réparations rapides et fiables.",
      story_p2: "Nous croyons que votre appareil est plus qu'un outil – c'est votre lien avec le monde.",
      about_years: "Années d'Expérience",
      about_repairs: "Réparations Effectuées",
      why_heading: "Pourquoi Choisir Electro Youssef?",
      why_sub: "Nous ne sommes pas juste un autre atelier. Voici ce qui nous rend différents.",
      team_heading: "Rencontrez les Experts",
      team_sub: "Des techniciens qualifiés dédiés à la qualité.",
      team_lead: "Technicien Principal",
      team_specialist: "Spécialiste Écran",
      team_software: "Expert Logiciel",
      about_cta: "Prêt à Nous Faire Confiance?",
      about_cta_sub: "Contactez-nous aujourd'hui pour une consultation gratuite.",
      online_booking: "Réservation en Ligne",
      contact_title1: "Réservez Votre",
      contact_title2: "Réparation",
      contact_sub: "Visitez-nous à ZERARDA, appelez-nous, ou réservez en ligne.",
      contact_info: "Coordonnées",
      address: "Adresse",
      address_val: "Rue Principale, ZERARDA\nAlgérie",
      hours_title: "Heures d'Ouverture",
      hours_mon_fri: "Lundi - Vendredi",
      hours_sat: "Samedi",
      hours_sun: "Dimanche",
      contact_cta: "Prêt à Commencer?",
      contact_cta_sub: "Réservez votre réparation aujourd'hui.",
      footer_services: "Services",
      footer_company: "Entreprise",
      footer_contact: "Contact",
      footer_phone: "+212 690 99 27 67",
      footer_location: "ZERARDA, Algérie",
      footer_whatsapp: "WhatsApp",
      chat_with_us: "Parlez avec nous",
      footer_desc: "Réparation rapide et fiable à ZERARDA. Votre appareil en sécurité.",
      footer_rights: "Tous droits réservés.",
      footer_made: "Développé par AISSAM LAKHYARI",
      form_name: "Nom Complet *",
      form_phone: "Numéro de Téléphone *",
      form_device: "Modèle d'Appareil *",
      form_service: "Service Nécessaire *",
      form_service_sel: "Sélectionnez un service...",
      opt_screen: "Remplacement d'Écran",
      opt_battery: "Remplacement de Batterie",
      opt_port: "Réparation du Port",
      opt_water: "Dommages d'Eau",
      opt_soft: "Problème Logiciel",
      opt_data: "Récupération de Données",
      opt_other: "Autre / Besoin de Diagnostic",
      form_msg: "Détails Supplémentaires (Optionnel)",
      form_msg_ph: "Dites-nous en plus sur le problème...",
      form_phone_ph: "+212 6XX XX XX XX",
      form_name_ph: "Jean Dupont",
      form_device_ph: "ex: iPhone 13 Pro, Samsung S22",
      form_send: "Envoyer via WhatsApp 💬",
      pricing_cta: "Besoin d'un Devis?",
      pricing_cta_sub: "Contactez-nous pour un diagnostic gratuit et tarifs transparents."
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
      btn_free: "احصل على تشخيص مجاني",
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
      feat_transparent: "أسعار شفافة",
      feat_transparent_desc: "لا رسوم خفية. تقديرات واضحة قبل العمل.",
      our_word: "خدمات",
      our_services: "خدمات الإصلاح",
      services_full_sub: "إصلاح احترافي للهواتف لجميع العلامات. سريع، قطع أصلية، وضمان.",
      services_heading: "خدمات الإصلاح",
      services_sub: "من الشاشات المكسورة إلى الأضرار المائية، نصلح كل شيء.",
      services_cta_title: "تحتاج إصلاح؟",
      services_cta_sub: "تواصل معنا اليوم للحصول على تشخيص مجاني.",
      services_cta_btn1: "📅 احجز الآن",
      services_cta_btn2: "📞 اتصل بنا",
      srv_screen: "استبدال الشاشة",
      srv_screen_desc: "شاشات LCD و OLED بجودة متميزة لجميع العلامات التجارية.",
      srv_battery: "استبدال البطارية",
      srv_battery_desc: "استعد حياة بطارية هاتفك مع بطاريات أصلية.",
      srv_port: "إصلاح منفذ الشحن",
      srv_port_desc: "أصلح مشاكل الشحن باحترافية.",
      srv_water: "استعادة من الأضرار المائية",
      srv_water_desc: "علاج متخصص للأجهزة المتضررة من الماء.",
      srv_data: "استعادة البيانات",
      srv_data_desc: "استعد البيانات المفقودة من الهواتف المتضررة.",
      srv_software: "مشاكل برمجية",
      srv_software_desc: "أصلح الأخطاء البرمجية ومشاكل الأداء.",
      srv_diag: "التشخيص",
      srv_diag_desc: "تشخيص كامل لتحديد أي مشاكل.",
      srv_speaker: "إصلاح الميكروفون والسماعة",
      srv_speaker_desc: "أصلح مشاكل الميكروفون والسماعة.",
      time_min: "دقيقة",
      time_hours: "ساعة",
      view_all_services: "عرض جميع الخدمات →",
      pricing_heading: "أسعار الإصلاح بالدينار الجزائري",
      pricing_sub: "لا رسوم خفية. لا مفاجآت.",
      pricing_title1: "أسعار",
      pricing_title2: "شفافة",
      price_screen: "2,000 – 8,000",
      price_battery: "1,500 – 4,000",
      price_data: "3,000 – 10,000",
      price_port: "1,000 – 3,000",
      price_water: "3,000 – 7,000",
      price_software: "500 – 2,000",
      price_diag: "مجاني",
      currency_dzd: "دج",
      price_note: "يختلف حسب النموذج",
      price_diag_note: "تشخيص شامل",
      price_gen_cells: "خلايا أصلية",
      price_rel_fix: "إصلاح موثوق",
      fe_genuine: "قطع أصلية",
      fe_warranty: "ضمان 3 أشهر",
      fe_express: "خدمة سريعة",
      fe_specialized: "أدوات متخصصة",
      fe_confidential: "معاملة سرية",
      fe_diagnostic: "تشخيص مجاني",
      fe_support: "دعم المتابعة",
      fe_expert: "تحليل خبير",
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
      faq_price_q: "هل الأسعار تشمل القطع والعمل؟",
      faq_price_a: "نعم! جميع أسعارنا تشمل القطع والعمل. لا رسوم خفية.",
      faq_warranty_q: "ماذا يغطي الضمان؟",
      faq_warranty_a: "ضماننا لمدة 3 أشهر يغطي القطع والعمل. إذا تكرر المشكلة، سنعيد إصلاحه مجاناً.",
      faq_payment_q: "ما هي طرق الدفع التي تقبلونها؟",
      faq_payment_a: "نقبل النقود والتحويلات البنكية والمدفوعات المحمولة.",
      faq_quote_q: "هل يمكنني الحصول على تقدير قبل الإصلاح؟",
      faq_quote_a: "بالتأكيد! نقدم تشخيص مجاني وتقديرات واضحة قبل أي عمل.",
      cta_title: "مستعد لإصلاح جهازك؟",
      cta_sub: "احجز إصلاحك اليوم واستعد هاتفك في حالة مثالية.",
      cta_title_alt: "مستعد للثقة بجهازك لدينا؟",
      cta_sub_alt: "تواصل معنا اليوم للحصول على استشارة مجانية.",
      about_title1: "عن",
      about_title2: "إلكترو يوسف",
      about_sub: "شريكك الموثوق لإصلاح الهواتف في زراردة. الجودة، السرعة، والموثوقية التي يمكنك الاعتماد عليها.",
      our_story: "قصتنا",
      story_p1: "تأسس إلكترو يوسف برسالة بسيطة: تقديم خدمات إصلاح سريعة وموثوقة لسكان زراردة.",
      story_p2: "نؤمن أن جهازك أكثر من مجرد أداة – هو اتصالك بالعالم. لهذا السبب نتعامل مع كل إصلاح بالعناية والانتباه.",
      about_years: "سنوات الخبرة",
      about_repairs: "إصلاحات تمت",
      why_heading: "لماذا تختار إلكترو يوسف؟",
      why_sub: "نحن لسنا مجرد ورشة إصلاح أخرى. إليك ما يميزنا.",
      team_heading: "تعرف على الخبراء",
      team_sub: "فنيون مهرة متخصصون في إعادة جهازك إلى الحالة المثالية.",
      team_lead: "الفني الرئيسي",
      team_specialist: "أخصائي الشاشات",
      team_software: "خبير البرمجيات",
      about_cta: "مستعد للثقة بجهازك لدينا؟",
      about_cta_sub: "تواصل معنا اليوم للحصول على استشارة مجانية.",
      online_booking: "حجز عبر الإنترنت",
      contact_title1: "احجز إصلاح",
      contact_title2: "لجهازك",
      contact_sub: "زرنا في زراردة، اتصل بنا، أو احجز عبر الإنترنت.",
      contact_info: "معلومات الاتصال",
      address: "العنوان",
      address_val: "الشارع الرئيسي، زراردة\nالجزائر",
      hours_title: "ساعات العمل",
      hours_mon_fri: "الاثنين - الجمعة",
      hours_sat: "السبت",
      hours_sun: "الأحد",
      contact_cta: "مستعد للبدء؟",
      contact_cta_sub: "احجز إصلاحك اليوم.",
      footer_services: "الخدمات",
      footer_company: "الشركة",
      footer_contact: "اتصل بنا",
      footer_phone: "+212 690 99 27 67",
      footer_location: "زراردة، الجزائر",
      footer_whatsapp: "واتساب",
      chat_with_us: "تحدث معنا",
      footer_desc: "إصلاح سريع وموثوق في زراردة. جهازك في أمان.",
      footer_rights: "جميع الحقوق محفوظة.",
      footer_made: "تطوير AISSAM LAKHYARI",
      form_name: "الاسم الكامل *",
      form_phone: "رقم الهاتف *",
      form_device: "نموذج الجهاز *",
      form_service: "الخدمة المطلوبة *",
      form_service_sel: "اختر خدمة...",
      opt_screen: "استبدال الشاشة",
      opt_battery: "استبدال البطارية",
      opt_port: "إصلاح المنفذ",
      opt_water: "ضرر مائي",
      opt_soft: "مشكلة برمجية",
      opt_data: "استعادة البيانات",
      opt_other: "أخر / يحتاج تشخيص",
      form_msg: "تفاصيل إضافية (اختياري)",
      form_msg_ph: "أخبرنا بالمزيد عن المشكلة...",
      form_phone_ph: "+212 6XX XX XX XX",
      form_name_ph: "أحمد محمد",
      form_device_ph: "مثال: iPhone 13 Pro, Samsung S22",
      form_send: "إرسال عبر واتساب 💬",
      pricing_cta: "تحتاج تقدير سعر؟",
      pricing_cta_sub: "تواصل معنا للحصول على تشخيص مجاني وأسعار شفافة."
    }
  };

  // ===== LANGUAGE & DIRECTION =====
  let currentLang = localStorage.getItem('electro_youssef_lang_full') || 'en';

  const setLanguage = (lang) => {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('electro_youssef_lang_full', lang);

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

  console.log('Electro Youssef - Modern Full UI Loaded Successfully 🚀');
  console.log('Developed by AISSAM LAKHYARI');
});
