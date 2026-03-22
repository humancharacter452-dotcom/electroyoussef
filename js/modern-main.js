/* ============================================
   YOUSSEF_GSM - Modern JavaScript
   Author: AISSAM LAKHYARI
   Features: i18n (EN/FR/AR), WhatsApp integration,
            animations, form handling, FAQ accordion
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===== TRANSLATION DICTIONARY =====
  const translations = {
    en: {
      // Navigation
      brand_name: "YOUSSEF_GSM",
      nav_home: "Home",
      nav_services: "Services",
      nav_about: "About",
      nav_pricing: "Services",
      nav_contact: "Contact",
      nav_book: "Book Service",

      // Language
      lang_en: "English (EN)",
      lang_fr: "Français (FR)",
      lang_ar: "العربية (AR)",

      // Hero
      hero_badge: "Professional Software Services",
      hero_title1: "Software Solutions",
      hero_title2: "& GSM Services",
      hero_desc: "Expert software services, GSM tool activations, and digital solutions. Professional services at YOUSSEF_GSM.",
      btn_book: "📅 Book Service",
      btn_call: "📞 Call Now",
      btn_quote: "💰 Get Quote",

      // Stats
      stat_devices: "Services Completed",
      stat_rate: "Success Rate",
      stat_time: "Avg. Turnaround",

      // Features
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

      // Services Preview
      services_preview_heading: "Complete Software Solutions",
      services_preview_sub: "From software development to GSM tool activations, we provide comprehensive digital services.",
      sp_screen: "Software Development",
      sp_screen_desc: "Custom software development tailored to your business needs and requirements.",
      sp_battery: "Web Development",
      sp_battery_desc: "Professional website development with modern design and responsive layouts.",
      sp_charging: "App Development",
      sp_charging_desc: "Mobile app development for iOS and Android platforms.",
      sp_water: "Social Media Followers",
      sp_water_desc: "Boost your social media presence with authentic followers and engagement.",
      sp_data: "Data Recovery",
      sp_data_desc: "Professional data recovery from all types of devices and storage media.",
      sp_software: "GSM Tool Activations",
      sp_software_desc: "Official activations for all major GSM servicing tools and platforms.",
      sp_learn_more: "Learn More →",

      // Testimonials
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

      // FAQ
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

      // CTA
      cta_title: "Ready to Get Started?",
      cta_sub: "Contact us today for professional software services and GSM solutions.",
      services_cta_title: "Need a Service?",
      services_cta_sub: "Get in touch today for expert software and GSM assistance.",
      services_cta_btn1: "📅 Book Now",
      services_cta_btn2: "📞 Contact Us",

      // Footer
      footer_services: "Services",
      footer_company: "Company",
      footer_contact: "Contact",
      srv_screen: "Software Development",
      srv_battery: "Web Development",
      srv_port: "App Development",
      srv_water: "Social Media Followers",
      srv_data: "Data Recovery",
      srv_software: "GSM Tool Activations",
      footer_phone: "+212 771 863 888",
      footer_location: "Online Services",
      footer_whatsapp: "WhatsApp",
      footer_desc: "Professional software and GSM services. Your digital solution partner.",
      footer_rights: "All rights reserved.",
      footer_made: "Developed by AISSAM LAKHYARI",

      // About Page
      about_heading: "About YOUSSEF_GSM",
      about_sub: "Your trusted partner for professional software services and GSM solutions.",
      about_hero_title: "Expert Software & GSM Services",
      about_hero_sub: "We provide professional, reliable software development and GSM services worldwide. Your projects are in good hands with our certified professionals.",
      why_choose_title: "Why Choose Us",
      why_quality: "Premium Quality",
      why_quality_desc: "We deliver high-quality software solutions using industry best practices and modern technologies.",
      why_speed: "Fast Delivery",
      why_speed_desc: "Quick turnaround times without sacrificing quality. We meet deadlines consistently.",
      why_warranty: "Service Warranty",
      why_warranty_desc: "All services include comprehensive warranty and ongoing support.",
      why_experts: "Expert Team",
      why_experts_desc: "Certified professionals with extensive experience in software development and GSM services.",
      why_transparent: "Transparent Communication",
      why_transparent_desc: "Clear communication throughout your project. You'll always know the status.",
      why_convenient: "Remote Services",
      why_convenient_desc: "Work with us from anywhere in the world through online collaboration tools.",
      our_story_title: "Our Story",
      our_story_p1: "YOUSSEF_GSM was founded with a mission: to provide professional software development and GSM services to clients worldwide.",
      our_story_p2: "What started as a small team has grown into a trusted name in digital services. We've completed hundreds of projects and built our reputation on quality and customer satisfaction.",
      our_story_p3: "Our team is composed of certified professionals who stay up-to-date with the latest technologies and best practices. We believe in continuous learning to provide exceptional service.",
      stat_satisfaction: "Satisfaction Rate",
      stat_years: "Years Experience",
      stat_brands: "Projects Completed",
      our_team_title: "Meet Our Team",
      team_name: "Youssef",
      team_role: "Founder & Lead Developer",
      team_desc: "With extensive experience in software development, Youssef leads our team with expertise and dedication.",
      team_name2: "Specialist",
      team_role2: "GSM Services Lead",
      team_desc2: "Specializes in GSM tool activations and mobile software solutions. Certified professional.",
      team_name3: "Developer",
      team_role3: "Web Development Expert",
      team_desc3: "Expert in modern web technologies and responsive design. Fast and efficient.",

      // Services Page
      services_heading: "Our Professional Services",
      services_sub: "Contact us for a consultation and quote tailored to your needs.",
      srv_screen_full: "Software Development",
      srv_screen_full_desc: "Custom software solutions for businesses of all sizes.",
      srv_battery_full: "Web Development",
      srv_battery_full_desc: "Modern, responsive websites tailored to your brand.",
      srv_port_full: "App Development",
      srv_port_full_desc: "iOS and Android applications with cutting-edge features.",
      srv_water_full: "Social Media Followers",
      srv_water_full_desc: "Authentic growth services for all major platforms.",
      srv_data_full: "Data Recovery",
      srv_data_full_desc: "Professional recovery from all storage media types.",
      srv_software_full: "GSM Tool Activations",
      srv_software_full_desc: "Official activations for all major GSM servicing tools.",
      srv_cloud_full: "Cloud Services",
      srv_cloud_full_desc: "Secure cloud storage and application hosting solutions.",
      srv_notes: "💡 <strong>Note:</strong> Contact us via Telegram for detailed quotes and consultation.",
      srv_book: "Book Now →",
      srv_whatsapp: "Chat on WhatsApp →",

      // Contact Page
      contact_heading: "Contact Us",
      contact_sub: "Reach out via Telegram or WhatsApp. We're ready to help!",
      contact_info_title: "Contact Information",
      address: "Telegram",
      address_val": "+212 771-863888<br>@YOUSSEF_GSM",
      phone: "Phone",
      whatsapp: "WhatsApp",
      hours_title: "Response Time",
      hours_mon_fri: "24/7 Online Support",
      hours_sat: "24/7 Online Support",
      hours_sun: "24/7 Online Support",
      book_service_title: "Book Your Service",
      book_service_sub: "Fill out the form below and we'll contact you shortly to confirm your booking.",
      form_name: "Full Name *",
      form_name_placeholder: "Enter your full name",
      form_phone: "Phone Number *",
      form_phone_placeholder: "Enter your phone number",
      form_service: "Service Needed *",
      form_service_select: "Select a service",
      form_service_other: "Other",
      form_device: "Project Type *",
      form_device_placeholder: "e.g., Software Development, GSM Activation",
      form_issue: "Describe Your Project *",
      form_issue_placeholder: "Please describe your project requirements...",
      form_preferred_time: "Preferred Contact Time",
      form_time_anytime: "Anytime",
      form_time_morning: "Morning (9-12)",
      form_time_afternoon: "Afternoon (12-5)",
      form_time_evening: "Evening (5-8)",
      btn_submit: "📅 Submit Request",
      form_success_title: "Request Received!",
      form_success_sub: "Thank you for contacting us. We'll reach out shortly to discuss your project.",
      btn_whatsapp_now: "💬 Chat on Telegram",
      btn_telegram: "💬 Chat on Telegram",
      map_title: "Connect With Us",
      btn_whatsapp: "💬 WhatsApp",

      // Service Details
      services_full_heading: "Complete Software & GSM Solutions",
      services_full_sub: "Professional services with modern technology. From software development to GSM tool activations, we handle it all.",
      s_screen: "Software Development",
      s_screen_sub: "Custom software solutions for your business",
      s_screen_title: "What We Do",
      s_screen_desc: "We develop custom software solutions tailored to your specific business requirements. From desktop applications to enterprise systems, we deliver quality code and scalable solutions.",
      s_screen_process: "Our Process",
      s_screen_timing: "Delivery Time",
      s_screen_timing_desc: "Project timeline varies by complexity. We provide estimates during consultation.",
      s_view_pricing: "Request Quote →",
      s_book_now: "Book Now →",
      s_contact_whatsapp: "Chat on Telegram →",
      s_battery: "Web Development",
      s_battery_sub: "Professional websites with modern design",
      s_battery_title: "What We Do",
      s_battery_desc: "We create stunning, responsive websites that work perfectly on all devices. Using modern frameworks and best practices, we deliver sites that are fast, secure, and SEO-friendly.",
      s_battery_process: "Our Process",
      s_battery_timing: "Delivery Time",
      s_battery_timing_desc: "Typical website development takes 2-4 weeks depending on complexity.",
      s_charging: "App Development",
      s_charging_sub: "iOS and Android mobile applications",
      s_charging_title: "What We Do",
      s_charging_desc: "We develop native and cross-platform mobile applications for iOS and Android. From concept to deployment, we create apps that users love.",
      s_charging_process: "Our Process",
      s_charging_timing: "Delivery Time",
      s_charging_timing_desc: "Mobile app development typically takes 4-8 weeks.",
      s_water: "Social Media Followers",
      s_water_sub: "Authentic social media growth services",
      s_water_title: "What We Offer",
      s_water_desc: "Boost your social media presence with authentic followers and engagement. We provide organic growth services for all major platforms including Instagram, TikTok, Facebook, and more.",
      s_water_process: "Our Process",
      s_water_timing: "Delivery Time",
      s_water_timing_desc: "Growth starts within 24-48 hours. Results vary by package.",
      s_data: "Data Recovery",
      s_data_sub: "Recover lost data from damaged devices",
      s_data_title: "What We Recover",
      s_data_desc: "Lost photos, contacts, messages, or files from broken or damaged devices. We specialize in recovering data from various storage media and device types.",
      s_data_process: "Our Process",
      s_data_timing: "Delivery Time",
      s_data_timing_desc: "Data recovery typically takes 24-72 hours depending on complexity.",
      s_software: "GSM Tool Activations",
      s_software_sub: "Official activations for GSM tools",
      s_software_title: "What We Activate",
      s_software_desc: "We provide official activations for all major GSM servicing tools including UnlockTool, Chimera Tool, Sigma Key, and more. Get your tools activated quickly and reliably.",
      s_software_process: "Our Process",
      s_software_timing: "Delivery Time",
      s_software_timing_desc: "Most activations are completed within 1-24 hours.",
      s_step1: "✓ Analyze requirements",
      s_step2: "✓ Develop solution",
      s_step3: "✓ Test thoroughly",
      s_step4: "✓ Deliver with warranty"
    },
    fr: {
      brand_name: "YOUSSEF_GSM",
      nav_home: "Accueil",
      nav_services: "Services",
      nav_about: "À propos",
      nav_pricing: "Services",
      nav_contact: "Contact",
      nav_book: "Réserver",
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
      services_preview_heading: "Solutions Logicielles Complètes",
      services_preview_sub: "Du développement logiciel aux activations GSM, nous offrons des services numériques complets.",
      sp_screen: "Développement Logiciel",
      sp_screen_desc: "Développement logiciel personnalisé adapté à vos besoins.",
      sp_battery: "Développement Web",
      sp_battery_desc: "Sites web professionnels avec design moderne et responsive.",
      sp_charging: "Développement d'Apps",
      sp_charging_desc: "Applications mobiles pour iOS et Android.",
      sp_water: "Abonnés Réseaux Sociaux",
      sp_water_desc: "Boostez votre présence avec des abonnés authentiques.",
      sp_data: "Récupération de Données",
      sp_data_desc: "Récupération professionnelle de tous types d'appareils.",
      sp_software: "Activations Outils GSM",
      sp_software_desc: "Activations officielles pour tous les outils GSM majeurs.",
      sp_learn_more: "En savoir plus →",
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
      services_cta_title: "Besoin d'un Service?",
      services_cta_sub: "Contactez-nous pour une assistance experte.",
      services_cta_btn1: "📅 Réserver",
      services_cta_btn2: "📞 Contactez-nous",
      footer_services: "Services",
      footer_company: "Entreprise",
      footer_contact: "Contact",
      srv_screen: "Développement Logiciel",
      srv_battery: "Développement Web",
      srv_port: "Développement d'Apps",
      srv_water: "Abonnés Réseaux Sociaux",
      srv_data: "Récupération de Données",
      srv_software: "Activations Outils GSM",
      footer_phone: "+212 771 863 888",
      footer_location: "Services en Ligne",
      footer_whatsapp: "WhatsApp",
      footer_desc: "Services logiciels et GSM professionnels. Votre partenaire numérique.",
      footer_rights: "Tous droits réservés.",
      footer_made: "Développé par AISSAM LAKHYARI",
      about_heading: "À Propos de YOUSSEF_GSM",
      about_sub: "Votre partenaire de confiance pour les services logiciels et GSM.",
      about_hero_title: "Services Logiciels & GSM Experts",
      about_hero_sub: "Nous fournissons des services professionnels et fiables dans le monde entier.",
      why_choose_title: "Pourquoi Nous Choisir",
      why_quality: "Qualité Premium",
      why_quality_desc: "Nous livrons des solutions de haute qualité utilisant les meilleures pratiques.",
      why_speed: "Livraison Rapide",
      why_speed_desc: "Délais rapides sans sacrifier la qualité. Nous respectons les délais.",
      why_warranty: "Garantie de Service",
      why_warranty_desc: "Tous les services incluent une garantie et un support continu.",
      why_experts: "Équipe d'Experts",
      why_experts_desc: "Professionnels certifiés avec une expérience étendue.",
      why_transparent: "Communication Transparente",
      why_transparent_desc: "Communication claire tout au long de votre projet.",
      why_convenient: "Services à Distance",
      why_convenient_desc: "Travaillez avec nous depuis n'importe où dans le monde.",
      our_story_title: "Notre Histoire",
      our_story_p1: "YOUSSEF_GSM a été fondé avec une mission: fournir des services logiciels et GSM professionnels.",
      our_story_p2: "Ce qui a commencé comme une petite équipe est devenu un nom de confiance dans les services numériques. Nous avons complété des centaines de projets.",
      our_story_p3: "Notre équipe est composée de professionnels certifiés à jour avec les dernières technologies.",
      stat_satisfaction: "Taux de Satisfaction",
      stat_years: "Années d'Expérience",
      stat_brands: "Projets Complétés",
      our_team_title: "Rencontrez Notre Équipe",
      team_name: "Youssef",
      team_role: "Fondateur & Lead Développeur",
      team_desc: "Avec une vaste expérience, Youssef dirige notre équipe avec expertise.",
      team_name2: "Spécialiste",
      team_role2: "Responsable Services GSM",
      team_desc2: "Spécialiste en activations d'outils GSM. Professionnel certifié.",
      team_name3: "Développeur",
      team_role3: "Expert Web",
      team_desc3: "Expert en technologies web modernes. Rapide et efficace.",
      services_heading: "Nos Services Professionnels",
      services_sub: "Contactez-nous pour une consultation et un devis personnalisé.",
      srv_screen_full: "Développement Logiciel",
      srv_screen_full_desc: "Solutions logicielles personnalisées pour toutes les entreprises.",
      srv_battery_full: "Développement Web",
      srv_battery_full_desc: "Sites web modernes et responsive adaptés à votre marque.",
      srv_port_full: "Développement d'Apps",
      srv_port_full_desc: "Applications iOS et Android avec fonctionnalités avancées.",
      srv_water_full: "Abonnés Réseaux Sociaux",
      srv_water_full_desc: "Services de croissance organique pour toutes les plateformes.",
      srv_data_full: "Récupération de Données",
      srv_data_full_desc: "Récupération professionnelle de tous les types de stockage.",
      srv_software_full: "Activations Outils GSM",
      srv_software_full_desc: "Activations officielles pour tous les outils GSM majeurs.",
      srv_cloud_full: "Services Cloud",
      srv_cloud_full_desc: "Stockage cloud sécurisé et hébergement d'applications.",
      srv_notes: "💡 <strong>Note:</strong> Contactez-nous via Telegram pour des devis détaillés.",
      srv_book: "Réserver →",
      srv_whatsapp: "Discuter sur WhatsApp →",
      contact_heading: "Contactez-Nous",
      contact_sub: "Contactez-nous via Telegram ou WhatsApp. Nous sommes prêts à aider!",
      contact_info_title: "Informations de Contact",
      address: "Telegram",
      address_val": "+212 771-863888<br>@YOUSSEF_GSM",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      hours_title: "Temps de Réponse",
      hours_mon_fri: "Support en ligne 24/7",
      hours_sat: "Support en ligne 24/7",
      hours_sun: "Support en ligne 24/7",
      book_service_title: "Réservez Votre Service",
      book_service_sub: "Remplissez le formulaire et nous vous contacterons bientôt.",
      form_name: "Nom Complet *",
      form_name_placeholder: "Entrez votre nom complet",
      form_phone: "Numéro de Téléphone *",
      form_phone_placeholder: "Entrez votre numéro",
      form_service: "Service Nécessaire *",
      form_service_select: "Sélectionnez un service",
      form_service_other: "Autre",
      form_device: "Type de Projet *",
      form_device_placeholder: "Ex: Développement Logiciel, Activation GSM",
      form_issue: "Décrivez Votre Projet *",
      form_issue_placeholder: "Veuillez décrire vos exigences...",
      form_preferred_time: "Heure Préférée",
      form_time_anytime: "N'importe quand",
      form_time_morning: "Matin (9-12)",
      form_time_afternoon: "Après-midi (12-17)",
      form_time_evening: "Soir (17-20)",
      btn_submit: "📅 Soumettre",
      form_success_title: "Demande Reçue!",
      form_success_sub: "Merci de nous avoir contactés. Nous vous contacterons bientôt.",
      btn_whatsapp_now: "💬 Discuter sur Telegram",
      btn_telegram: "💬 Discuter sur Telegram",
      map_title: "Connectez Avec Nous",
      btn_whatsapp: "💬 WhatsApp",
      services_full_heading: "Solutions Logicielles & GSM Complètes",
      services_full_sub: "Services professionnels avec technologie moderne. Du développement logiciel aux activations GSM.",
      s_screen: "Développement Logiciel",
      s_screen_sub: "Solutions logicielles personnalisées",
      s_screen_title: "Ce Que Nous Faisons",
      s_screen_desc: "Nous développons des solutions logicielles personnalisées adaptées à vos besoins. Des applications de bureau aux systèmes d'entreprise.",
      s_screen_process: "Notre Processus",
      s_screen_timing: "Délai de Livraison",
      s_screen_timing_desc: "Le calendrier varie selon la complexité. Estimation lors de la consultation.",
      s_view_pricing: "Demander Devis →",
      s_book_now: "Réserver →",
      s_contact_whatsapp: "Discuter sur Telegram →",
      s_battery: "Développement Web",
      s_battery_sub: "Sites web professionnels",
      s_battery_title: "Ce Que Nous Faisons",
      s_battery_desc: "Nous créons des sites web étonnants et responsive. Utilisation de frameworks modernes et meilleures pratiques.",
      s_battery_process: "Notre Processus",
      s_battery_timing: "Délai de Livraison",
      s_battery_timing_desc: "Le développement web prend généralement 2-4 semaines.",
      s_charging: "Développement d'Apps",
      s_charging_sub: "Applications iOS et Android",
      s_charging_title: "Ce Que Nous Faisons",
      s_charging_desc: "Nous développons des applications natives et multi-plateformes. Du concept au déploiement.",
      s_charging_process: "Notre Processus",
      s_charging_timing: "Délai de Livraison",
      s_charging_timing_desc: "Le développement d'apps prend généralement 4-8 semaines.",
      s_water: "Abonnés Réseaux Sociaux",
      s_water_sub: "Services de croissance organique",
      s_water_title: "Ce Que Nous Offrons",
      s_water_desc: "Boostez votre présence avec des abonnés authentiques. Pour Instagram, TikTok, Facebook, et plus.",
      s_water_process: "Notre Processus",
      s_water_timing: "Délai de Livraison",
      s_water_timing_desc: "La croissance commence dans 24-48 heures. Résultats variables.",
      s_data: "Récupération de Données",
      s_data_sub: "Récupérez les données perdues",
      s_data_title: "Ce Que Nous Récupérons",
      s_data_desc: "Photos, contacts, messages ou fichiers perdus. Spécialistes de la récupération sur divers supports.",
      s_data_process: "Notre Processus",
      s_data_timing: "Délai de Livraison",
      s_data_timing_desc: "La récupération prend généralement 24-72 heures.",
      s_software: "Activations Outils GSM",
      s_software_sub: "Activations officielles GSM",
      s_software_title: "Ce Que Nous Activons",
      s_software_desc: "Activations officielles pour UnlockTool, Chimera Tool, Sigma Key, et plus. Rapide et fiable.",
      s_software_process: "Notre Processus",
      s_software_timing: "Délai de Livraison",
      s_software_timing_desc: "La plupart des activations sont complétées en 1-24 heures.",
      s_step1: "✓ Analyser les besoins",
      s_step2: "✓ Développer la solution",
      s_step3: "✓ Tester soigneusement",
      s_step4: "✓ Livrer avec garantie"
    },
    ar: {
      brand_name: "YOUSSEF_GSM",
      nav_home: "الرئيسية",
      nav_services: "الخدمات",
      nav_about: "من نحن",
      nav_pricing: "الخدمات",
      nav_contact: "اتصل بنا",
      nav_book: "احجز خدمة",
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
      stat_devices: "خدمة تمت",
      stat_rate: "نسبة النجاح",
      stat_time": "متوسط وقت التسليم",
      features_heading: "خدمة متميزة",
      features_sub: "نجمع بين الخبرة والتكنولوجيا المتقدمة.",
      feat_warranty: "ضمان الخدمة",
      feat_warranty_desc: "جميع الخدمات مشمولة بضمان شامل.",
      feat_speed: "تسليم سريع",
      feat_speed_desc: "معظم المشاريع تسلم بسرعة بعمليات فعالة.",
      feat_genuine: "أدوات رسمية",
      feat_genuine_desc: "نستخدم أدوات وبرامج رسمية ومرخصة فقط.",
      feat_expert: "فريق خبراء",
      feat_expert_desc: "محترفون معتمدون بخبرة سنوات.",
      feat_location: "خدمات أونلاين",
      feat_location_desc: "متاح عالمياً عبر التواصل أونلاين والدعم عن بعد.",
      feat_support: "دعم 24/7",
      feat_support_desc: "تواصل معنا في أي وقت عبر Telegram على +212 771-863888.",
      services_preview_heading: "حلول برمجية شاملة",
      services_preview_sub: "من التطوير البرمجي إلى تفعيلات أدوات GSM، نقدم خدمات رقمية شاملة.",
      sp_screen: "تطوير البرمجيات",
      sp_screen_desc: "تطوير برمجي مخصص حسب احتياجات عملك.",
      sp_battery: "تطوير الويب",
      sp_battery_desc: "مواقع ويب احترافية بتصميم عصري.",
      sp_charging: "تطوير التطبيقات",
      sp_charging_desc: "تطبيقات الجوال لنظامي iOS و Android.",
      sp_water: "متابعي وسائل التواصل",
      sp_water_desc: "عزز تواجدك مع متابعين حقيقيين.",
      sp_data: "استعادة البيانات",
      sp_data_desc": "استعادة احترافية من جميع أنواع الأجهزة.",
      sp_software: "تفعيلات أدوات GSM",
      sp_software_desc": "تفعيلات رسمية لجميع أدوات GSM الرئيسية.",
      sp_learn_more: "المزيد →",
      testimonials_heading: "ماذا يقول عملاؤنا",
      testimonials_sub": "موثوق به من قبل العملاء حول العالم.",
      t1_text: "خدمات تطوير برمجي مذهلة! تسليم في الوقت المحدد. أوصي بشدة YOUSSEF_GSM!",
      t1_name: "أحمد ك.",
      t1_role": "تطوير البرمجيات",
      t2_text: "خدمة احترافية لتفعيل أدوات GSM. سريع وموثوق.",
      t2_name: "سارة ب.",
      t2_role": "خدمات GSM",
      t3_text: "عمل رائع في تطوير الويب! موقع مذهل لعملي.",
      t3_name: "محمد ر.",
      t3_role": "تطوير الويب",
      faq_heading: "الأسئلة الشائعة",
      faq_sub": "لديك أسئلة؟ لدينا إجابات.",
      faq1_q: "ما هي الخدمات البرمجية التي تقدمونها؟",
      faq1_a: "نقدم تطوير برمجي شامل وتطوير الويب وتطوير التطبيقات وخدمات النمو الاجتماعي وتفعيلات أدوات GSM.",
      faq2_q": "هل تقدمون ضماناً؟",
      faq2_a: "نعم! جميع خدماتنا مشمولة بضمان خدمة مع دعم.",
      faq3_q": "كم يستغرق التطوير؟",
      faq3_a: "الوقت يختلف حسب التعقيد. نقدم جداول زمنية مفصلة.",
      faq4_q": "هل يمكن استعادة البيانات؟",
      faq4_a: "نتخصص في استعادة البيانات من أجهزة متنوعة.",
      faq5_q: "ما هي أدوات GSM التي تدعمونها؟",
      faq5_a: "ندعم جميع الأدوات الرئيسية: UnlockTool و Chimera و Sigma والمزيد.",
      cta_title: "هل أنت مستعد للبدء؟",
      cta_sub: "تواصل معنا لخدمات برمجية و GSM احترافية.",
      services_cta_title": "هل تحتاج إلى خدمة؟",
      services_cta_sub": "تواصل معنا للحصول على مساعدة خبراء.",
      services_cta_btn1: "📅 احجز الآن",
      services_cta_btn2: "📞 تواصل معنا",
      footer_services: "الخدمات",
      footer_company: "الشركة",
      footer_contact: "اتصل بنا",
      srv_screen: "تطوير البرمجيات",
      srv_battery: "تطوير الويب",
      srv_port: "تطوير التطبيقات",
      srv_water: "متابعي وسائل التواصل",
      srv_data: "استعادة البيانات",
      srv_software: "تفعيلات أدوات GSM",
      footer_phone: "+212 771 863 888",
      footer_location: "خدمات أونلاين",
      footer_whatsapp: "واتساب",
      footer_desc: "خدمات برمجية و GSM احترافية. شريكك الرقمي.",
      footer_rights: "جميع الحقوق محفوظة.",
      footer_made: "تطوير AISSAM LAKHYARI",
      about_heading: "من نحن YOUSSEF_GSM",
      about_sub: "شريكك الموثوق للخدمات البرمجية و GSM.",
      about_hero_title: "خدمات برمجية و GSM خبراء",
      about_hero_sub: "نقدم خدمات احترافية وموثوقة في جميع أنحاء العالم.",
      why_choose_title: "لماذا تختارنا",
      why_quality: "جودة متميزة",
      why_quality_desc: "نسلم حلولاً عالية الجودة باستخدام أفضل الممارسات.",
      why_speed: "تسليم سريع",
      why_speed_desc: "أوقات سريعة دون التضحية بالجودة.",
      why_warranty: "ضمان خدمة",
      why_warranty_desc: "جميع الخدمات تشمل ضمان ودعم مستمر.",
      why_experts: "فريق خبراء",
      why_experts_desc: "محترفون معتمدون بخبرة واسعة.",
      why_transparent: "تواصل شفاف",
      why_transparent_desc: "اتصال واضح طوال مشروعك.",
      why_convenient: "خدمات عن بعد",
      why_convenient_desc: "اعمل معنا من أي مكان في العالم.",
      our_story_title: "قصتنا",
      our_story_p1: "تأسس YOUSSEF_GSM برسالة: توفير خدمات برمجية و GSM احترافية.",
      our_story_p2: "ما بدأ كفريق صغير أصبح اسماً موثوقاً في الخدمات الرقمية. أتممنا مئات المشاريع.",
      our_story_p3: "فريقنا مكون من محترفين معتمدين على اطلاع بأحدث التقنيات.",
      stat_satisfaction: "معدل الرضا",
      stat_years: "سنوات الخبرة",
      stat_brands: "المشاريع المكتملة",
      our_team_title: "تعرف على فريقنا",
      team_name: "يوسف",
      team_role: "المؤسس والمطور الرئيسي",
      team_desc: "مع خبرة واسعة، يقود يوسف فريقنا بالخبرة.",
      team_name2: "خبير",
      team_role2: "رئيس خدمات GSM",
      team_desc2: "خبير في تفعيلات أدوات GSM. محترف معتمد.",
      team_name3: "مطور",
      team_role3: "خبير ويب",
      team_desc3: "خبير في تقنيات الويب الحديثة. سريع وفعال.",
      services_heading: "خدماتنا الاحترافية",
      services_sub: "تواصل معنا للحصول على استشارة وتسعير مخصص.",
      srv_screen_full: "تطوير البرمجيات",
      srv_screen_full_desc: "حلول برمجية مخصصة لجميع الشركات.",
      srv_battery_full: "تطوير الويب",
      srv_battery_full_desc: "مواقع ويب حديثة ومتجاوبة حسب علامتك التجارية.",
      srv_port_full: "تطوير التطبيقات",
      srv_port_full_desc: "تطبيقات iOS و Android بميزات متقدمة.",
      srv_water_full: "متابعي وسائل التواصل",
      srv_water_full_desc: "خدمات نمو عضوي لجميع المنصات.",
      srv_data_full: "استعادة البيانات",
      srv_data_full_desc: "استعادة احترافية من جميع أنواع التخزين.",
      srv_software_full: "تفعيلات أدوات GSM",
      srv_software_full_desc: "تفعيلات رسمية لجميع أدوات GSM الرئيسية.",
      srv_cloud_full: "خدمات السحابة",
      srv_cloud_full_desc: "تخزين سحابي آمن واستضافة تطبيقات.",
      srv_notes: "💡 <strong>ملاحظة:</strong> تواصل معنا عبر Telegram للحصول على تسعير مفصل.",
      srv_book: "احجز الآن →",
      srv_whatsapp: "محادثة واتساب →",
      contact_heading: "اتصل بنا",
      contact_sub: "تواصل معنا عبر Telegram أو WhatsApp. نحن مستعدون للمساعدة!",
      contact_info_title: "معلومات الاتصال",
      address: "Telegram",
      address_val": "+212 771-863888<br>@YOUSSEF_GSM",
      phone: "الهاتف",
      whatsapp: "واتساب",
      hours_title: "وقت الاستجابة",
      hours_mon_fri: "دعم أونلاين 24/7",
      hours_sat: "دعم أونلاين 24/7",
      hours_sun: "دعم أونلاين 24/7",
      book_service_title: "احجز خدمتك",
      book_service_sub: "املأ النموذج وسنتواصل معك قريباً.",
      form_name: "الاسم الكامل *",
      form_name_placeholder": "أدخل اسمك الكامل",
      form_phone: "رقم الهاتف *",
      form_phone_placeholder": "أدخل رقم هاتفك",
      form_service: "الخدمة المطلوبة *",
      form_service_select: "اختر خدمة...",
      form_service_other: "أخرى",
      form_device: "نوع المشروع *",
      form_device_placeholder: "مثال: تطوير برمجي، تفعيل GSM",
      form_issue: "صف مشروعك *",
      form_issue_placeholder: "يرجى وصف متطلبات مشروعك...",
      form_preferred_time: "الوقت المفضل",
      form_time_anytime: "في أي وقت",
      form_time_morning: "الصباح (9-12)",
      form_time_afternoon: "بعد الظهر (12-17)",
      form_time_evening: "المساء (17-20)",
      btn_submit: "📅 إرسال",
      form_success_title: "تم استلام الطلب!",
      form_success_sub: "شكراً لتواصلك معنا. سنتواصل قريباً لمناقشة مشروعك.",
      btn_whatsapp_now: "💬 محادثة Telegram",
      btn_telegram: "💬 محادثة Telegram",
      map_title: "تواصل معنا",
      btn_whatsapp: "💬 واتساب",
      services_full_heading: "حلول برمجية و GSM شاملة",
      services_full_sub: "خدمات احترافية بتكنولوجيا حديثة. من التطوير البرمجي إلى تفعيلات GSM.",
      s_screen: "تطوير البرمجيات",
      s_screen_sub: "حلول برمجية مخصصة",
      s_screen_title: "ماذا نفعل",
      s_screen_desc: "نطور حلولاً برمجية مخصصة حسب احتياجاتك. من تطبيقات سطح المكتب إلى أنظمة المؤسسات.",
      s_screen_process": "عمليتنا",
      s_screen_timing: "وقت التسليم",
      s_screen_timing_desc: "الجدول الزمني يختلف حسب التعقيد. تقدير خلال الاستشارة.",
      s_view_pricing: "طلب تسعير →",
      s_book_now: "احجز الآن →",
      s_contact_whatsapp: "محادثة Telegram →",
      s_battery: "تطوير الويب",
      s_battery_sub: "مواقع ويب احترافية",
      s_battery_title: "ماذا نفعل",
      s_battery_desc: "ننشئ مواقع ويب مذهلة ومتجاوبة. استخدام أطر عمل حديثة وأفضل الممارسات.",
      s_battery_process: "عمليتنا",
      s_battery_timing: "وقت التسليم",
      s_battery_timing_desc: "تطوير الويب يستغرق عادة 2-4 أسابيع.",
      s_charging: "تطوير التطبيقات",
      s_charging_sub: "تطبيقات iOS و Android",
      s_charging_title: "ماذا نفعل",
      s_charging_desc: "نطور تطبيقات أصلية ومتعددة المنصات. من المفهوم إلى النشر.",
      s_charging_process: "عمليتنا",
      s_charging_timing: "وقت التسليم",
      s_charging_timing_desc: "تطوير التطبيقات يستغرق عادة 4-8 أسابيع.",
      s_water: "متابعي وسائل التواصل",
      s_water_sub: "خدمات نمو عضوي",
      s_water_title: "ماذا نقدم",
      s_water_desc: "عزز تواجدك مع متابعين حقيقيين. لـ Instagram و TikTok و Facebook والمزيد.",
      s_water_process: "عمليتنا",
      s_water_timing: "وقت التسليم",
      s_water_timing_desc: "النمو يبدأ خلال 24-48 ساعة. نتائج متغيرة.",
      s_data: "استعادة البيانات",
      s_data_sub": "استعد البيانات المفقودة",
      s_data_title: "ماذا نستعيد",
      s_data_desc: "صور وجهات اتصال ورسائل أو ملفات مفقودة. خبراء في الاستعادة من وسائط متنوعة.",
      s_data_process: "عمليتنا",
      s_data_timing: "وقت التسليم",
      s_data_timing_desc: "استعادة البيانات تستغرق عادة 24-72 ساعة.",
      s_software: "تفعيلات أدوات GSM",
      s_software_sub: "تفعيلات رسمية GSM",
      s_software_title: "ماذا نفعّل",
      s_software_desc: "تفعيلات رسمية لـ UnlockTool و Chimera Tool و Sigma Key والمزيد. سريع وموثوق.",
      s_software_process: "عمليتنا",
      s_software_timing: "وقت التسليم",
      s_software_timing_desc: "معظم التفعيلات تكتمل في 1-24 ساعة.",
      s_step1: "✓ تحليل المتطلبات",
      s_step2: "✓ تطوير الحل",
      s_step3: "✓ اختبار شامل",
      s_step4: "✓ تسليم مع ضمان"
    }
  };

  // ===== GLOBAL VARIABLES =====
  let currentLang = localStorage.getItem('preferredLang') || 'en';

  // ===== WHATSAPP/TELEGRAM INTEGRATION =====
  const WHATSAPP_NUMBER = '212771863888';
  const TELEGRAM_HANDLE = 'YOUSSEF_GSM';
  const TELEGRAM_LINK = 'https://t.me/YOUSSEF_GSM';

  // Generate WhatsApp URL for booking
  function generateWhatsAppBooking(formData) {
    const serviceMap = {
      'screen': 'Software Development / تطوير البرمجيات',
      'battery': 'Web Development / تطوير الويب',
      'charging': 'App Development / تطوير التطبيقات',
      'water': 'Social Media Followers / متابعي وسائل التواصل',
      'data': 'Data Recovery / استعادة البيانات',
      'software': 'GSM Tool Activation / تفعيل أداة GSM',
      'other': 'Other / أخرى'
    };

    const timeMap = {
      'anytime': 'Anytime / في أي وقت',
      'morning': 'Morning (9-12) / الصباح',
      'afternoon': 'Afternoon (12-5) / بعد الظهر',
      'evening': 'Evening (5-8) / المساء'
    };

    const serviceName = serviceMap[formData.service] || formData.service;
    const timeName = timeMap[formData.preferred_time] || formData.preferred_time;

    const message = `📱 *Service Request / طلب خدمة*

━━━━━━━━━━━━━━━━━━

👤 *Name / الاسم:* ${formData.name}
📞 *Phone / الهاتف:* ${formData.phone}
💼 *Project / المشروع:* ${formData.device}
🔧 *Service / الخدمة:* ${serviceName}
⏰ *Time / الوقت:* ${timeName}
📝 *Details / التفاصيل:* ${formData.issue}

━━━━━━━━━━━━━━━━━━

✅ *Telegram:* @YOUSSEF_GSM
✅ *Phone:* +212 771-863888

شكرًا لتواصلك معنا! / Thank you for contacting us! 🙏`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  // ===== LANGUAGE SWITCHING =====
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);

    // Set HTML direction
    const html = document.documentElement;
    if (lang === 'ar') {
      html.dir = 'rtl';
      html.lang = 'ar';
    } else {
      html.dir = 'ltr';
      html.lang = lang;
    }

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });

    // Update current language indicator
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
      currentLangSpan.textContent = lang === 'en' ? 'EN' : lang === 'fr' ? 'FR' : 'AR';
    }

    // Update active language button
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      }
    });

    // Scroll reveal animations need reset for RTL
    resetScrollReveal();
  }

  // ===== NAVIGATION =====
  function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.4)';
      } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        navbar.style.boxShadow = 'none';
      }
    });

    // Mobile menu toggle
    hamburger?.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks?.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    // Language dropdown toggle
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');

    langBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown?.classList.toggle('active');
      langBtn.setAttribute('aria-expanded', langDropdown?.classList.contains('active'));
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      langDropdown?.classList.remove('active');
      langBtn?.setAttribute('aria-expanded', 'false');
    });

    // Language selection
    document.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        setLanguage(lang);
      });
    });

    // Set initial language
    setLanguage(currentLang);
  }

  // ===== FAQ ACCORDION =====
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const isActive = item.classList.contains('active');

        // Close all other items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
          otherItem.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  // ===== BOOKING FORM =====
  function initBookingForm() {
    const form = document.getElementById('bookingForm');
    const formSuccess = document.getElementById('formSuccess');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect form data
      const formData = {
        name: form.querySelector('#name').value,
        phone: form.querySelector('#phone').value,
        service: form.querySelector('#service').value,
        device: form.querySelector('#device').value,
        issue: form.querySelector('#issue').value,
        preferred_time: form.querySelector('#preferred_time')?.value || 'anytime'
      };

      // Validate required fields
      if (!formData.name || !formData.phone || !formData.service || !formData.device || !formData.issue) {
        alert(translations[currentLang]?.form_error || 'Please fill in all required fields.');
        return;
      }

      // Generate WhatsApp link
      const whatsappUrl = generateWhatsAppBooking(formData);

      // Hide form, show success
      form.style.display = 'none';
      formSuccess.style.display = 'block';

      // Update WhatsApp link
      const whatsappBtn = formSuccess.querySelector('a[href^="https://wa.me"]');
      if (whatsappBtn) {
        whatsappBtn.href = whatsappUrl;
      }

      // Reset form for next time
      form.reset();
    });
  }

  // ===== SCROLL ANIMATIONS =====
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  }

  function resetScrollReveal() {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('active');
    });

    // Re-initialize after short delay to allow DOM to update
    setTimeout(() => {
      initScrollAnimations();
    }, 100);
  }

  // ===== COUNTER ANIMATION =====
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.dataset.count);
          const suffix = counter.dataset.suffix || '';
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;

          const animateCounter = () => {
            current += increment;
            if (current < target) {
              counter.textContent = Math.floor(current) + suffix;
              requestAnimationFrame(animateCounter);
            } else {
              counter.textContent = target + suffix;
            }
          };

          animateCounter();
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  }

  // ===== SMOOTH SCROLL =====
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ===== INITIALIZE ALL =====
  function init() {
    initNavigation();
    initFAQ();
    initBookingForm();
    initScrollAnimations();
    initCounters();
    initSmoothScroll();
  }

  // Start
  init();

});
