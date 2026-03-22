/* ============================================
   ELECTRO YOUSSEF - Modern JavaScript
   Author: AISSAM LAKHYARI
   Features: i18n (EN/FR/AR), WhatsApp integration,
            animations, form handling, FAQ accordion
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===== TRANSLATION DICTIONARY =====
  const translations = {
    en: {
      // Navigation
      brand_name: "Electric Youssef",
      nav_home: "Home",
      nav_services: "Services",
      nav_about: "About",
      nav_pricing: "Pricing",
      nav_contact: "Contact",
      nav_book: "Book Repair",

      // Language
      lang_en: "English (EN)",
      lang_fr: "Français (FR)",
      lang_ar: "العربية (AR)",

      // Hero
      hero_badge: "Open Today · ZERARDA",
      hero_title1: "Professional",
      hero_title2: "Phone Repair",
      hero_desc: "Expert smartphone repairs with genuine parts and quick turnarounds. Your device is in safe hands at Electric Youssef.",
      btn_book: "📅 Book Repair",
      btn_call: "📞 Call Now",
      btn_quote: "💰 Get Quote",

      // Stats
      stat_devices: "Devices Fixed",
      stat_rate: "Success Rate",
      stat_time: "Avg. Repair",

      // Features
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

      // Services Preview
      services_preview_heading: "Complete Phone Repair Solutions",
      services_preview_sub: "From cracked screens to water damage, we handle it all with precision and care.",
      sp_screen: "Screen Replacement",
      sp_screen_desc: "Cracked or unresponsive screens? We replace them with quality parts in minutes.",
      sp_battery: "Battery Replacement",
      sp_battery_desc: "Phone draining fast? Replace your battery for all-day power.",
      sp_charging: "Charging Port Repair",
      sp_charging_desc: "Not charging? We fix broken charging ports and cables.",
      sp_water: "Water Damage Recovery",
      sp_water_desc: "Water damaged phone? We can recover data and repair the device.",
      sp_data: "Data Recovery",
      sp_data_desc: "Lost data? We specialize in recovering data from damaged devices.",
      sp_software: "Software Issues",
      sp_software_desc: "Freezes, crashes, or stuck boot loops? We fix software problems.",
      sp_learn_more: "Learn More →",

      // Testimonials
      testimonials_heading: "What Our Customers Say",
      testimonials_sub: "Real reviews from satisfied customers in ZERARDA.",
      t1_text: "Fixed my iPhone screen in just 25 minutes! The quality is amazing and price was very fair. Highly recommend Electric Youssef!",
      t1_name: "Ahmed K.",
      t1_role: "iPhone 14 Pro – Screen Repair",
      t2_text: "My Samsung was water damaged and I thought it was done for. They recovered all my data and fixed the phone completely. Incredible service!",
      t2_name: "Sara B.",
      t2_role: "Samsung S23 – Water Damage",
      t3_text: "Professional, fast, and honest. They told me exactly what was wrong before starting repair. Best repair shop in the area!",
      t3_name: "Mohamed R.",
      t3_role: "Huawei P50 – Battery Replacement",

      // FAQ
      faq_heading: "Frequently Asked Questions",
      faq_sub: "Got questions about phone repair? We've got answers.",
      faq1_q: "How long does a typical screen repair take?",
      faq1_a: "Most screen replacements take between 30–60 minutes depending on device model. We offer express service for common models like iPhone and Samsung Galaxy.",
      faq2_q: "Do you offer a warranty on repairs?",
      faq2_a: "Yes! All our repairs come with a 3-month warranty covering parts and labor. If anything goes wrong during this period, we'll fix it for free.",
      faq3_q: "Do you use genuine parts?",
      faq3_a: "We use high-quality OEM and genuine replacement parts for all repairs. We believe in quality over shortcuts to ensure your device performs like new.",
      faq4_q: "Can you recover data from a broken phone?",
      faq4_a: "In most cases, yes. We have specialized tools for data recovery from devices with screen damage, water damage, or software issues. Success rate depends on extent of damage.",
      faq5_q: "What phone brands do you repair?",
      faq5_a: "We repair all major brands including Apple (iPhone), Samsung, Huawei, Xiaomi, Oppo, Realme, Vivo, OnePlus, and many more. Contact us to check your specific model.",

      // CTA
      cta_title: "Ready to Get Your Device Fixed?",
      cta_sub: "Book your repair today and get your phone back in perfect condition.",
      services_cta_title: "Need a Repair Service?",
      services_cta_sub: "Book your repair today and get your phone back in perfect condition.",
      services_cta_btn1: "📅 Book Now",
      services_cta_btn2: "📞 Call Us",

      // Footer
      footer_services: "Services",
      footer_company: "Company",
      footer_contact: "Contact",
      srv_screen: "Screen Replacement",
      srv_battery: "Battery Replacement",
      srv_port: "Charging Port Repair",
      srv_water: "Water Damage Recovery",
      srv_data: "Data Recovery",
      srv_software: "Software Issues",
      footer_phone: "+212 771 86 38 88",
      footer_location: "ZERARDA, TAZA, Morocco",
      footer_whatsapp: "WhatsApp",
      footer_desc: "Fast, reliable smartphone repair in ZERARDA. Your device in safe hands.",
      footer_rights: "All rights reserved.",
      footer_made: "Developed by AISSAM LAKHYARI",

      // About Page
      about_heading: "About Electric Youssef",
      about_sub: "Your trusted partner for professional phone repair services in ZERARDA, TAZA, Morocco.",
      about_hero_title: "Expert Phone Repair in ZERARDA",
      about_hero_sub: "We've been serving the ZERARDA community with professional, reliable phone repair services for years. Your device is in good hands with our certified technicians.",
      why_choose_title: "Why Customers Trust Us",
      why_quality: "Premium Quality",
      why_quality_desc: "We use only genuine OEM parts and high-quality replacements to ensure your device performs like new.",
      why_speed: "Fast Service",
      why_speed_desc: "Most repairs completed in 30-60 minutes while you wait. Quick turnaround without sacrificing quality.",
      why_warranty: "3-Month Warranty",
      why_warranty_desc: "All repairs come with a comprehensive warranty. If anything goes wrong, we'll fix it for free.",
      why_experts: "Expert Technicians",
      why_experts_desc: "Certified technicians with years of experience in phone repairs. We know what we're doing.",
      why_transparent: "Transparent Pricing",
      why_transparent_desc: "No hidden fees or surprises. We'll tell you exactly what you need and the cost before starting any repair.",
      why_convenient: "Convenient Location",
      why_convenient_desc: "Easy to find in ZERARDA with parking available. Come visit us or book an appointment online.",
      our_story_title: "Our Story",
      our_story_p1: "Electric Youssef was founded with a simple mission: to provide professional, reliable phone repair services to the ZERARDA community. We understand how frustrating it is when your phone isn't working, and we're here to help.",
      our_story_p2: "What started as a small repair shop has grown into a trusted name in phone repair. We've repaired thousands of devices, from smartphones to tablets, and we've built our reputation on quality, transparency, and customer satisfaction.",
      our_story_p3: "Our team is composed of certified technicians who stay up-to-date with the latest repair techniques and technologies. We believe in continuous learning and improvement to provide the best service possible.",
      stat_satisfaction: "Satisfaction Rate",
      stat_years: "Years Experience",
      stat_brands: "Phone Brands",
      our_team_title: "Meet Our Technicians",
      team_name: "Youssef",
      team_role: "Founder & Lead Technician",
      team_desc: "With over 15 years of experience in phone repair, Youssef leads our team with expertise and dedication.",
      team_name2: "Assistant",
      team_role2: "Senior Technician",
      team_desc2: "Specializes in complex repairs including water damage and data recovery. Certified professional.",
      team_name3: "Technician",
      team_role3: "Repair Specialist",
      team_desc3: "Expert in screen replacements and battery repairs. Fast and efficient service provider.",

      // Pricing Page
      pricing_heading: "Our Phone Repair Prices",
      pricing_sub: "Honest, transparent pricing with no hidden fees. DZD prices starting from 1,500.",
      pr_screen: "Screen Replacement",
      pr_screen_sub: "All major phone models included",
      pr_battery: "Battery Replacement",
      pr_battery_sub: "New batteries for all devices",
      pr_charging: "Charging Port Repair",
      pr_charging_sub: "Fix charging issues quickly",
      pr_water: "Water Damage Recovery",
      pr_water_sub: "Professional water damage repair",
      pr_data: "Data Recovery",
      pr_data_sub: "Recover lost data from damaged devices",
      pr_notes: "💡 <strong>Important:</strong> Price includes quality parts. Free diagnostic available. Prices may vary based on exact model and damage level.",
      pr_book: "Book Now →",
      pr_whatsapp: "Chat on WhatsApp →",

      // Contact Page
      contact_heading: "Contact Us",
      contact_sub: "Visit us in ZERARDA, call us, or book your repair online. We're here to help!",
      contact_info_title: "Contact Information",
      address: "Address",
      address_val: "Main Street, ZERARDA, TAZA, Morocco",
      phone: "Phone",
      whatsapp: "WhatsApp",
      hours_title: "Business Hours",
      hours_mon_fri: "Monday - Friday: 9:00 AM - 8:00 PM",
      hours_sat: "Saturday: 9:00 AM - 6:00 PM",
      hours_sun: "Sunday: Closed",
      book_service_title: "Book Your Repair",
      book_service_sub: "Fill out the form below and we'll contact you shortly to confirm your appointment.",
      form_name: "Full Name *",
      form_name_placeholder: "Enter your full name",
      form_phone: "Phone Number *",
      form_phone_placeholder: "Enter your phone number",
      form_service: "Service Needed *",
      form_service_select: "Select a service",
      form_service_other: "Other",
      form_device: "Device Model *",
      form_device_placeholder: "e.g., iPhone 14 Pro, Samsung S23",
      form_issue: "Describe the Issue *",
      form_issue_placeholder: "Please describe the problem with your device",
      form_preferred_time: "Preferred Time",
      form_time_anytime: "Anytime",
      form_time_morning: "Morning (9-12)",
      form_time_afternoon: "Afternoon (12-5)",
      form_time_evening: "Evening (5-8)",
      btn_submit: "📅 Book Appointment",
      form_success_title: "Booking Received!",
      form_success_sub: "Thank you for booking with us. We'll contact you shortly to confirm your appointment.",
      btn_whatsapp_now: "💬 Chat on WhatsApp",
      map_title: "Find Us",
      btn_whatsapp: "💬 WhatsApp",

      // Service Details
      services_full_heading: "Complete Phone Repair Solutions",
      services_full_sub: "Expert repairs with genuine parts and fast turnaround. From screen replacements to data recovery, we handle it all.",
      s_screen: "Screen Replacement",
      s_screen_sub: "Quick and reliable screen repairs with quality parts",
      s_screen_title: "What We Fix",
      s_screen_desc: "Cracked screens, unresponsive touchscreens, display issues, and dead pixels. We repair screens for iPhone, Samsung, Huawei, Xiaomi, and all major smartphone brands.",
      s_screen_process: "Our Process",
      s_screen_timing: "Repair Time",
      s_screen_timing_desc: "Most screen repairs completed in 30-60 minutes while you wait.",
      s_view_pricing: "View Pricing →",
      s_book_now: "Book Now →",
      s_contact_whatsapp: "Chat on WhatsApp →",
      s_battery: "Battery Replacement",
      s_battery_sub: "All-day power with a new, genuine battery",
      s_battery_title: "What We Fix",
      s_battery_desc: "Swollen batteries, rapid drain, and battery not holding charge. We replace batteries for all major smartphone brands with high-quality replacements.",
      s_battery_process: "Our Process",
      s_battery_timing: "Repair Time",
      s_battery_timing_desc: "Battery replacement typically takes 30-45 minutes.",
      s_charging: "Charging Port Repair",
      s_charging_sub: "Fix charging issues and cable problems",
      s_charging_title: "What We Fix",
      s_charging_desc: "Not charging, loose connection, damaged port, or charging slowly. We repair and replace charging ports for all phone brands.",
      s_charging_process: "Our Process",
      s_charging_timing: "Repair Time",
      s_charging_timing_desc: "Charging port repairs typically take 30-45 minutes.",
      s_water: "Water Damage Recovery",
      s_water_sub: "Professional recovery from water damage",
      s_water_title: "What We Fix",
      s_water_desc: "Water-damaged phones, screens not working after water exposure, buttons not responding. We can recover data and repair water-damaged devices.",
      s_water_process: "Our Process",
      s_water_timing: "Repair Time",
      s_water_timing_desc: "Water damage repair can take 24-48 hours depending on severity.",
      s_data: "Data Recovery",
      s_data_sub: "Recover lost data from damaged devices",
      s_data_title: "What We Recover",
      s_data_desc: "Lost photos, contacts, messages, or files from broken or water-damaged devices. We specialize in recovering data from all types of smartphone damage.",
      s_data_process: "Our Process",
      s_data_timing: "Repair Time",
      s_data_timing_desc: "Data recovery typically takes 24-72 hours.",
      s_software: "Software Issues",
      s_software_sub: "Fix software problems and crashes",
      s_software_title: "What We Fix",
      s_software_desc: "Freezes, crashes, stuck boot loops, app issues, or operating system problems. We provide professional software repair services.",
      s_software_process: "Our Process",
      s_software_timing: "Repair Time",
      s_software_timing_desc: "Software issues typically fixed within 30-60 minutes.",
      s_step1: "✓ Diagnose the issue",
      s_step2: "✓ Replace with quality part",
      s_step3: "✓ Calibrate and test",
      s_step4: "✓ 3-month warranty included"
    },
    fr: {
      brand_name: "Electric Youssef",
      nav_home: "Accueil",
      nav_services: "Services",
      nav_about: "À propos",
      nav_pricing: "Tarifs",
      nav_contact: "Contact",
      nav_book: "Réserver",
      lang_en: "English (EN)",
      lang_fr: "Français (FR)",
      lang_ar: "العربية (AR)",
      hero_badge: "Ouvert Aujourd'hui · ZERARDA",
      hero_title1: "Réparation",
      hero_title2: "Professionnelle",
      hero_desc: "Expert en réparation de smartphones avec pièces authentiques et service rapide. Votre appareil est entre de bonnes mains chez Electric Youssef.",
      btn_book: "📅 Réserver",
      btn_call: "📞 Appeler",
      btn_quote: "💰 Devis",
      stat_devices: "Appareils Réparés",
      stat_rate: "Taux de Réussite",
      stat_time: "Durée Moyenne",
      features_heading: "Service de Qualité Premium",
      features_sub: "Nous combinons expertise et pièces authentiques pour offrir une expérience exceptionnelle.",
      feat_warranty: "Garantie 3 Mois",
      feat_warranty_desc: "Toutes les réparations sont couvertes par une garantie complète de 3 mois.",
      feat_speed: "Service Express",
      feat_speed_desc: "La plupart des réparations en 30-60 minutes pendant que vous attendez.",
      feat_genuine: "Pièces Authentiques",
      feat_genuine_desc: "Nous utilisons uniquement des pièces OEM et des remplacements de haute qualité.",
      feat_expert: "Techniciens Experts",
      feat_expert_desc: "Techniciens certifiés avec des années d'expérience en réparation téléphonique.",
      feat_location: "Emplacement Pratique",
      feat_location_desc: "Facile à trouver à ZERARDA avec parking disponible.",
      feat_support: "Support 24/7",
      feat_support_desc: "Contactez-nous à tout moment via WhatsApp pour une assistance rapide.",
      services_preview_heading: "Solutions Complètes",
      services_preview_sub: "Des écrans cassés aux dommages causés par l'eau, nous gérons tout avec précision.",
      sp_screen: "Remplacement d'Écran",
      sp_screen_desc: "Écran fissuré ou non réactif? Nous le remplaçons avec des pièces de qualité.",
      sp_battery: "Remplacement de Batterie",
      sp_battery_desc: "Téléphone qui se décharge vite? Remplacez votre batterie pour une journée complète.",
      sp_charging: "Réparation du Port de Charge",
      sp_charging_desc: "Ne charge pas? Nous réparons les ports de charge et les câbles endommagés.",
      sp_water: "Récupération des Dommages par l'Eau",
      sp_water_desc: "Téléphone endommagé par l'eau? Nous pouvons récupérer les données et réparer.",
      sp_data: "Récupération de Données",
      sp_data_desc: "Données perdues? Nous spécialisons dans la récupération de données d'appareils endommagés.",
      sp_software: "Problèmes Logiciels",
      sp_software_desc: "Gel, plantages ou boucles de démarrage? Nous résolvons les problèmes logiciels.",
      sp_learn_more: "En savoir plus →",
      testimonials_heading: "Ce Que Disent Nos Clients",
      testimonials_sub: "Avis réels de clients satisfaits à ZERARDA.",
      t1_text: "Réparé mon écran iPhone en seulement 25 minutes! La qualité est incroyable et le prix très juste. Hautement recommandé Electric Youssef!",
      t1_name: "Ahmed K.",
      t1_role: "iPhone 14 Pro – Réparation d'Écran",
      t2_text: "Mon Samsung a été endommagé par l'eau et je pensais qu'il était fini. Ils ont récupéré toutes mes données et réparé le téléphone complètement. Service incroyable!",
      t2_name: "Sara B.",
      t2_role: "Samsung S23 – Dommages par l'Eau",
      t3_text: "Professionnel, rapide et honnête. Ils m'ont dit exactement ce qui n'allait pas avant de commencer la réparation. Le meilleur atelier de réparation de la région!",
      t3_name: "Mohamed R.",
      t3_role: "Huawei P50 – Remplacement de Batterie",
      faq_heading: "Questions Fréquentes",
      faq_sub: "Vous avez des questions sur la réparation téléphonique? Nous avons des réponses.",
      faq1_q: "Combien de temps prend une réparation d'écran typique?",
      faq1_a: "La plupart des remplacements d'écran prennent entre 30 et 60 minutes selon le modèle. Nous offrons un service express pour les modèles courants comme iPhone et Samsung Galaxy.",
      faq2_q: "Offrez-vous une garantie sur les réparations?",
      faq2_a: "Oui! Toutes nos réparations sont couvertes par une garantie de 3 mois. Si quelque chose ne va pas pendant cette période, nous le réparerons gratuitement.",
      faq3_q: "Utilisez-vous des pièces authentiques?",
      faq3_a: "Nous utilisons des pièces OEM authentiques et des remplacements de haute qualité. Nous croyons en la qualité plutôt que les raccourcis pour assurer que votre appareil fonctionne comme neuf.",
      faq4_q: "Pouvez-vous récupérer des données d'un téléphone cassé?",
      faq4_a: "Dans la plupart des cas, oui. Nous avons des outils spécialisés pour la récupération de données d'appareils avec dommages d'écran, d'eau ou logiciels. Le taux de réussite dépend de l'étendue des dommages.",
      faq5_q: "Quelles marques de téléphone réparez-vous?",
      faq5_a: "Nous réparons toutes les marques majeures y compris Apple (iPhone), Samsung, Huawei, Xiaomi, Oppo, Realme, Vivo, OnePlus, et bien d'autres. Contactez-nous pour vérifier votre modèle spécifique.",
      cta_title: "Prêt à Réparer Votre Appareil?",
      cta_sub: "Réservez votre réparation aujourd'hui et récupérez votre téléphone en parfait état.",
      services_cta_title: "Besoin d'une Réparation?",
      services_cta_sub: "Réservez votre réparation aujourd'hui et récupérez votre téléphone en parfait état.",
      services_cta_btn1: "📅 Réserver",
      services_cta_btn2: "📞 Appeler",
      footer_services: "Services",
      footer_company: "Entreprise",
      footer_contact: "Contact",
      srv_screen: "Remplacement d'Écran",
      srv_battery: "Remplacement de Batterie",
      srv_port: "Réparation de Port de Charge",
      srv_water: "Récupération des Dommages par l'Eau",
      srv_data: "Récupération de Données",
      srv_software: "Problèmes Logiciels",
      footer_phone: "+212 771 86 38 88",
      footer_location: "ZERARDA, TAZA, Maroc",
      footer_whatsapp: "WhatsApp",
      footer_desc: "Réparation rapide et fiable de smartphones à ZERARDA. Votre appareil est entre de bonnes mains.",
      footer_rights: "Tous droits réservés.",
      footer_made: "Développé par AISSAM LAKHYARI",
      about_heading: "À Propos de Electric Youssef",
      about_sub: "Votre partenaire de confiance pour les services de réparation téléphonique professionnelle à ZERARDA, TAZA, Maroc.",
      about_hero_title: "Expert en Réparation Téléphonique à ZERARDA",
      about_hero_sub: "Nous servons la communauté de ZERARDA avec des services de réparation professionnelle et fiable depuis des années. Votre appareil est entre de bonnes mains avec nos techniciens certifiés.",
      why_choose_title: "Pourquoi Nous Faire Confiance",
      why_quality: "Qualité Premium",
      why_quality_desc: "Nous utilisons uniquement des pièces OEM authentiques et des remplacements de haute qualité pour assurer que votre appareil fonctionne comme neuf.",
      why_speed: "Service Rapide",
      why_speed_desc: "La plupart des réparations en 30-60 minutes pendant que vous attendez. Tour rapide sans sacrifier la qualité.",
      why_warranty: "Garantie 3 Mois",
      why_warranty_desc: "Toutes les réparations sont couvertes par une garantie complète. Si quelque chose ne va pas, nous le réparerons gratuitement.",
      why_experts: "Techniciens Experts",
      why_experts_desc: "Techniciens certifiés avec des années d'expérience en réparation téléphonique. Nous savons ce que nous faisons.",
      why_transparent: "Prix Transparent",
      why_transparent_desc: "Aucuns frais cachés. Nous vous dirons exactement ce dont vous avez besoin et le coût avant de commencer toute réparation.",
      why_convenient: "Emplacement Pratique",
      why_convenient_desc: "Facile à trouver à ZERARDA avec parking disponible. Venez nous visiter ou réservez un rendez-vous en ligne.",
      our_story_title: "Notre Histoire",
      our_story_p1: "Electric Youssef a été fondé avec une mission simple: fournir des services de réparation téléphonique professionnelle et fiable à la communauté de ZERARDA. Nous comprenons à quel point c'est frustrant quand votre téléphone ne fonctionne pas, et nous sommes là pour aider.",
      our_story_p2: "Ce qui a commencé comme un petit atelier de réparation est devenu un nom de confiance en réparation téléphonique. Nous avons réparé des milliers d'appareils, des smartphones aux tablettes, et nous avons bâti notre réputation sur la qualité, la transparence et la satisfaction client.",
      our_story_p3: "Notre équipe est composée de techniciens certifiés qui restent à jour avec les dernières techniques et technologies de réparation. Nous croyons en l'apprentissage continu et l'amélioration pour offrir le meilleur service possible.",
      stat_satisfaction: "Taux de Satisfaction",
      stat_years: "Années d'Expérience",
      stat_brands: "Marques de Téléphone",
      our_team_title: "Rencontrez Nos Techniciens",
      team_name: "Youssef",
      team_role: "Fondateur et Technicien Principal",
      team_desc: "Avec plus de 15 ans d'expérience en réparation téléphonique, Youssef dirige notre équipe avec expertise et dévouement.",
      team_name2: "Assistant",
      team_role2: "Technicien Senior",
      team_desc2: "Spécialise dans les réparations complexes y compris les dommages par l'eau et la récupération de données. Professionnel certifié.",
      team_name3: "Technicien",
      team_role3: "Spécialiste en Réparation",
      team_desc3: "Expert en remplacements d'écran et batteries. Fournisseur de service rapide et efficace.",
      pricing_heading: "Nos Prix de Réparation",
      pricing_sub: "Prix honnêtes et transparents sans frais cachés. Prix en DZD à partir de 1,500.",
      pr_screen: "Remplacement d'Écran",
      pr_screen_sub: "Tous les principaux modèles inclus",
      pr_battery: "Remplacement de Batterie",
      pr_battery_sub: "Nouvelles batteries pour tous les appareils",
      pr_charging: "Réparation de Port de Charge",
      pr_charging_sub: "Réparez les problèmes de charge rapidement",
      pr_water: "Récupération des Dommages par l'Eau",
      pr_water_sub: "Réparation professionnelle des dommages par l'eau",
      pr_data: "Récupération de Données",
      pr_data_sub: "Récupérez les données perdues d'appareils endommagés",
      pr_notes: "💡 <strong>Important:</strong> Le prix inclut des pièces de qualité. Diagnostic gratuit disponible. Les prix peuvent varier selon le modèle exact et le niveau des dommages.",
      pr_book: "Réserver →",
      pr_whatsapp: "Discuter sur WhatsApp →",
      contact_heading: "Contactez-Nous",
      contact_sub: "Visitez-nous à ZERARDA, appelez-nous ou réservez votre réparation en ligne. Nous sommes là pour aider!",
      contact_info_title: "Informations de Contact",
      address: "Adresse",
      address_val: "Rue Principale, ZERARDA, TAZA, Maroc",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      hours_title: "Heures d'Ouverture",
      hours_mon_fri: "Lundi - Vendredi: 9:00 - 20:00",
      hours_sat: "Samedi: 9:00 - 18:00",
      hours_sun: "Dimanche: Fermé",
      book_service_title: "Réservez Votre Réparation",
      book_service_sub: "Remplissez le formulaire ci-dessous et nous vous contacterons bientôt pour confirmer votre rendez-vous.",
      form_name: "Nom Complet *",
      form_name_placeholder: "Entrez votre nom complet",
      form_phone: "Numéro de Téléphone *",
      form_phone_placeholder: "Entrez votre numéro de téléphone",
      form_service: "Service Nécessaire *",
      form_service_select: "Sélectionnez un service",
      form_service_other: "Autre",
      form_device: "Modèle d'Appareil *",
      form_device_placeholder: "ex: iPhone 14 Pro, Samsung S23",
      form_issue: "Décrivez le Problème *",
      form_issue_placeholder: "Veuillez décrire le problème avec votre appareil",
      form_preferred_time: "Heure Préférée",
      form_time_anytime: "N'importe quand",
      form_time_morning: "Matin (9-12)",
      form_time_afternoon: "Après-midi (12-17)",
      form_time_evening: "Soir (17-20)",
      btn_submit: "📅 Réserver",
      form_success_title: "Réservation Reçue!",
      form_success_sub: "Merci d'avoir réservé avec nous. Nous vous contacterons bientôt pour confirmer votre rendez-vous.",
      btn_whatsapp_now: "💬 Discuter sur WhatsApp",
      map_title: "Nous Trouver",
      btn_whatsapp: "💬 WhatsApp",
      services_full_heading: "Solutions Complètes",
      services_full_sub: "Réparations expertes avec pièces authentiques et service rapide. Des remplacements d'écran à la récupération de données, nous gérons tout.",
      s_screen: "Remplacement d'Écran",
      s_screen_sub: "Réparations d'écran rapides et fiables avec pièces de qualité",
      s_screen_title: "Ce Que Nous Réparons",
      s_screen_desc: "Écrans fissurés, écrans tactiles non réactifs, problèmes d'affichage et pixels morts. Nous réparons les écrans pour iPhone, Samsung, Huawei, Xiaomi et toutes les principales marques.",
      s_screen_process: "Notre Processus",
      s_screen_timing: "Durée de Réparation",
      s_screen_timing_desc: "La plupart des réparations d'écran sont effectuées en 30-60 minutes pendant que vous attendez.",
      s_view_pricing: "Voir les Tarifs →",
      s_book_now: "Réserver →",
      s_contact_whatsapp: "Discuter sur WhatsApp →",
      s_battery: "Remplacement de Batterie",
      s_battery_sub: "Puissance toute la journée avec une nouvelle batterie authentique",
      s_battery_title: "Ce Que Nous Réparons",
      s_battery_desc: "Batteries gonflées, décharge rapide et batterie ne tenant pas la charge. Nous remplaçons les batteries pour toutes les marques avec des remplacements de haute qualité.",
      s_battery_process: "Notre Processus",
      s_battery_timing: "Durée de Réparation",
      s_battery_timing_desc: "Le remplacement de batterie prend généralement 30-45 minutes.",
      s_charging: "Réparation de Port de Charge",
      s_charging_sub: "Réparez les problèmes de charge et de câbles",
      s_charging_title: "Ce Que Nous Réparons",
      s_charging_desc: "Ne charge pas, connexion lâche, port endommagé ou charge lentement. Nous réparerons et remplacerons les ports de charge pour toutes les marques.",
      s_charging_process: "Notre Processus",
      s_charging_timing: "Durée de Réparation",
      s_charging_timing_desc: "Les réparations de port de charge prennent généralement 30-45 minutes.",
      s_water: "Récupération des Dommages par l'Eau",
      s_water_sub: "Récupération professionnelle des dommages par l'eau",
      s_water_title: "Ce Que Nous Réparons",
      s_water_desc: "Téléphones endommagés par l'eau, écrans ne fonctionnant pas après exposition à l'eau, boutons ne répondant pas. Nous pouvons récupérer les données et réparer les appareils endommagés par l'eau.",
      s_water_process: "Notre Processus",
      s_water_timing: "Durée de Réparation",
      s_water_timing_desc: "La réparation des dommages par l'eau peut prendre 24-48 heures selon la gravité.",
      s_data: "Récupération de Données",
      s_data_sub: "Récupérez les données perdues d'appareils endommagés",
      s_data_title: "Ce Que Nous Récupérons",
      s_data_desc: "Photos, contacts, messages ou fichiers perdus d'appareils cassés ou endommagés par l'eau. Nous spécialisons dans la récupération de données de tous types de dommages téléphoniques.",
      s_data_process: "Notre Processus",
      s_data_timing: "Durée de Réparation",
      s_data_timing_desc: "La récupération de données prend généralement 24-72 heures.",
      s_software: "Problèmes Logiciels",
      s_software_sub: "Réparez les problèmes logiciels et les plantages",
      s_software_title: "Ce Que Nous Réparons",
      s_software_desc: "Gels, plantages, boucles de démarrage, problèmes d'application ou problèmes de système d'exploitation. Nous fournissons des services professionnels de réparation logicielle.",
      s_software_process: "Notre Processus",
      s_software_timing: "Durée de Réparation",
      s_software_timing_desc: "Les problèmes logiciels sont généralement résolus en 30-60 minutes.",
      s_step1: "✓ Diagnostiquer le problème",
      s_step2: "✓ Remplacer avec une pièce de qualité",
      s_step3: "✓ Calibrer et tester",
      s_step4: "✓ Garantie de 3 mois incluse"
    },
    ar: {
      brand_name: "إلكترو يوسف",
      nav_home: "الرئيسية",
      nav_services: "الخدمات",
      nav_about: "من نحن",
      nav_pricing: "الأسعار",
      nav_contact: "اتصل بنا",
      nav_book: "حجز إصلاح",
      lang_en: "English (EN)",
      lang_fr: "Français (FR)",
      lang_ar: "العربية (AR)",
      hero_badge: "مفتوح اليوم · زراردة",
      hero_title1: "إصلاح احترافي",
      hero_title2: "للهواتف الذكية",
      hero_desc: "خبرة في إصلاح الهواتف الذكية مع قطع أصلية وسرعة في التسليم. جهازك في أمان عند إلكترو يوسف.",
      btn_book: "📅 حجز إصلاح",
      btn_call: "📞 اتصل الآن",
      btn_quote: "💰 عرض سعر",
      stat_devices: "جهاز تم إصلاحه",
      stat_rate: "معدل النجاح",
      stat_time: "متوسط الإصلاح",
      features_heading: "خدمة ممتازة",
      features_sub: "نجمع بين الخبرة والقطع الأصلية لنقدم تجربة إصلاح استثنائية.",
      feat_warranty: "ضمان 3 أشهر",
      feat_warranty_desc: "جميع الإصلاحات مشمولة بضمان شامل لمدة 3 أشهر.",
      feat_speed: "خدمة سريعة",
      feat_speed_desc: "معظم الإصلاحات في 30-60 دقيقة بينما تنتظر.",
      feat_genuine: "قطع أصلية",
      feat_genuine_desc: "نستخدم فقط قطع OEM الأصلية وقطع بديلة عالية الجودة.",
      feat_expert: "فنيون خبراء",
      feat_expert_desc: "فنيون معتمدون بخبرة سنوات في إصلاح الهواتف.",
      feat_location: "موقع مريح",
      feat_location_desc: "سهل العثور عليه في زراردة مع مواقف متاحة.",
      feat_support: "دعم على مدار الساعة",
      feat_support_desc: "تواصل معنا في أي وقت عبر واتساب للمساعدة السريعة.",
      services_preview_heading: "حلول شاملة للإصلاح",
      services_preview_sub: "من الشاشات المكسورة إلى الأضرار بالماء، نتعامل مع كل شيء بدقة وعناية.",
      sp_screen: "استبدال الشاشة",
      sp_screen_desc: "شاشة مكسورة أو لا تستجيب؟ نستبدلها بقطع عالية الجودة.",
      sp_battery: "استبدال البطارية",
      sp_battery_desc: "الهاتف يفرغ سريعًا؟ استبدل بطاريتك لتعمل طوال اليوم.",
      sp_charging: "إصلاح منفذ الشحن",
      sp_charging_desc: "لا يشحن؟ نصلح منافذ الشحن والكابلات التالفة.",
      sp_water: "استعادة الأضرار بالماء",
      sp_water_desc: "هاتف تضرر بالماء؟ يمكننا استعادة البيانات وإصلاح الجهاز.",
      sp_data: "استعادة البيانات",
      sp_data_desc: "بيانات مفقودة؟ نتخصص في استعادة البيانات من الأجهزة التالفة.",
      sp_software: "مشاكل البرمجيات",
      sp_software_desc: "تجميد أو تعطل أو مشاكل التشغيل؟ نصلح المشاكل البرمجية.",
      sp_learn_more: "المزيد →",
      testimonials_heading: "ماذا يقول عملاؤنا",
      testimonials_sub: "مراجعات حقيقية من عملاء راضين في زراردة.",
      t1_text: "أصلحت شاشة آيفون في 25 دقيقة فقط! الجودة مذهلة والسعر عادل جدًا. أوصي بشدة بإلكترو يوسف!",
      t1_name: "أحمد ك.",
      t1_role: "آيفون 14 برو – إصلاح الشاشة",
      t2_text: "سامسونج تضرر بالماء واعتقدت أنه انتهى. استعادوا جميع بياناتي وأصلحوا الهاتف بالكامل. خدمة مذهلة!",
      t2_name: "سارة ب.",
      t2_role: "سامسونج S23 – أضرار بالماء",
      t3_text: "محترف وسريع وصادق. أخبروني بالضبط ما هو الخطأ قبل البدء في الإصلاح. أفضل محل إصلاح في المنطقة!",
      t3_name: "محمد ر.",
      t3_role: "هواوي P50 – استبدال البطارية",
      faq_heading: "أسئلة شائعة",
      faq_sub: "لديك أسئلة حول إصلاح الهواتف؟ لدينا إجابات.",
      faq1_q: "كم يستغرق إصلاح الشاشة عادة؟",
      faq1_a: "معظم استبدالات الشاشة تستغرق بين 30-60 دقيقة حسب الموديل. نقدم خدمة سريعة للموديلات الشائعة مثل آيفون وسامسونج جالاكسي.",
      faq2_q: "هل تقدمون ضمانًا على الإصلاحات؟",
      faq2_a: "نعم! جميع إصلاحاتنا مشمولة بضمان لمدة 3 أشهر. إذا حدث أي شيء خلال هذه الفترة، سنعيده مجانًا.",
      faq3_q: "هل تستخدمون قطعًا أصلية؟",
      faq3_a: "نستخدم قطع OEM الأصلية وقطع بديلة عالية الجودة. نؤمن بالجودة على الاختصارات لضمان أن يعمل جهازك كأنه جديد.",
      faq4_q: "هل يمكن استعادة البيانات من هاتف مكسور؟",
      faq4_a: "في معظم الحالات، نعم. لدينا أدوات متخصصة لاستعادة البيانات من الأجهزة المتضررة من الشاشة أو الماء أو المشاكل البرمجية. معدل النجاح يعتمد على مدى الضرر.",
      faq5_q: "ما هي ماركات الهواتف التي تصلحونها؟",
      faq5_a: "نصلح جميع الماركات الرئيسية بما في ذلك آبل (آيفون)، سامسونج، هواوي، شاومي، أوبو، ريال مي، فيفو، وان بلس، والعديد أكثر. اتصل بنا للتحقق من موديلك المحدد.",
      cta_title: "جاهز لإصلاح جهازك؟",
      cta_sub: "احجز إصلاحك اليوم واحصل على هاتفك في حالة مثالية.",
      services_cta_title: "هل تحتاج إلى إصلاح؟",
      services_cta_sub: "احجز إصلاحك اليوم واحصل على هاتفك في حالة مثالية.",
      services_cta_btn1: "📅 احجز الآن",
      services_cta_btn2: "📞 اتصل بنا",
      footer_services: "الخدمات",
      footer_company: "الشركة",
      footer_contact: "اتصل بنا",
      srv_screen: "استبدال الشاشة",
      srv_battery: "استبدال البطارية",
      srv_port: "إصلاح منفذ الشحن",
      srv_water: "استعادة الأضرار بالماء",
      srv_data: "استعادة البيانات",
      srv_software: "مشاكل البرمجيات",
      footer_phone: "+212 771 86 38 88",
      footer_location: "زراردة، طاطا، المغرب",
      footer_whatsapp: "واتساب",
      footer_desc: "إصلاح سريع وموثوق للهواتف الذكية في زراردة. جهازك في أمان.",
      footer_rights: "جميع الحقوق محفوظة.",
      footer_made: "تطوير عصام لخياري",
      about_heading: "من نحن",
      about_sub: "شريكك الموثوق لخدمات إصلاح الهواتف المحترفة في زراردة، طاطا، المغرب.",
      about_hero_title: "خبراء إصلاح الهواتف في زراردة",
      about_hero_sub: "نخدم مجتمع زراردة بخدمات إصلاح محترفة وموثوقة لسنوات. جهازك في أمان مع فنيينا المعتمدين.",
      why_choose_title: "لماذا تثق بنا",
      why_quality: "جودة ممتازة",
      why_quality_desc: "نستخدم فقط قطع OEM الأصلية وقطع بديلة عالية الجودة لضمان أن يعمل جهازك كأنه جديد.",
      why_speed: "خدمة سريعة",
      why_speed_desc: "معظم الإصلاحات في 30-60 دقيقة بينما تنتظر. تسليم سريع دون التضحية بالجودة.",
      why_warranty: "ضمان 3 أشهر",
      why_warranty_desc: "جميع الإصلاحات مشمولة بضمان شامل. إذا حدث أي شيء، سنعيده مجانًا.",
      why_experts: "فنيون خبراء",
      why_experts_desc: "فنيون معتمدون بخبرة سنوات في إصلاح الهواتف. نعرف ما نفعل.",
      why_transparent: "أسعار شفافة",
      why_transparent_desc: "لا رسوم خفية. سنخبرك بالضبط بما تحتاجه والتكلفة قبل البدء في أي إصلاح.",
      why_convenient: "موقع مريح",
      why_convenient_desc: "سهل العثور عليه في زراردة مع مواقف متاحة. زورنا أو احجز موعدًا عبر الإنترنت.",
      our_story_title: "قصتنا",
      our_story_p1: "تأسس إلكترو يوسف بمهمة بسيطة: تقديم خدمات إصلاح هواتف محترفة وموثوقة لمجتمع زراردة. نفهم مدى الإحباط عندما لا يعمل هاتفك، ونحن هنا للمساعدة.",
      our_story_p2: "ما بدأ كمركز إصلاح صغير أصبح اسمًا موثوقًا في إصلاح الهواتف. أصلحنا آلاف الأجهزة، من الهواتف الذكية إلى الأجهزة اللوحية، وبنينا سمعتنا على الجودة والشفافية ورضا العملاء.",
      our_story_p3: "فريقنا مكون من فنيين معتمدين يبقون على اطلاع بأحدث تقنيات وأدوات الإصلاح. نؤمن بالتعلم المستمر والتحسين لتقديم أفضل خدمة ممكنة.",
      stat_satisfaction: "معدل الرضا",
      stat_years: "سنوات الخبرة",
      stat_brands: "ماركات الهواتف",
      our_team_title: "تعرف على فنيينا",
      team_name: "يوسف",
      team_role: "المؤسس والفني الرئيسي",
      team_desc: "مع أكثر من 15 عامًا من الخبرة في إصلاح الهواتف، يقود يوسف فريقنا بالخبرة والتفاني.",
      team_name2: "مساعد",
      team_role2: "فني أول",
      team_desc2: "متخصص في الإصلاحات المعقدة بما في ذلك أضرار الماء واستعادة البيانات. محترف معتمد.",
      team_name3: "فني",
      team_role3: "متخصص الإصلاح",
      team_desc3: "خبير في استبدال الشاشات والبطاريات. مقدم خدمة سريعة وفعالة.",
      pricing_heading: "أسعار إصلاحنا",
      pricing_sub: "أسعار صادقة وشفافة بدون رسوم خفية. أسعار DZD تبدأ من 1,500.",
      pr_screen: "استبدال الشاشة",
      pr_screen_sub: "جميع الموديلات الرئيسية مشمولة",
      pr_battery: "استبدال البطارية",
      pr_battery_sub: "بطاريات جديدة لجميع الأجهزة",
      pr_charging: "إصلاح منفذ الشحن",
      pr_charging_sub: "أصلح مشاكل الشحن بسرعة",
      pr_water: "استعادة الأضرار بالماء",
      pr_water_sub: "إصلاح احترافي للأضرار بالماء",
      pr_data: "استعادة البيانات",
      pr_data_sub: "استعد البيانات المفقودة من الأجهزة التالفة",
      pr_notes: "💡 <strong>مهم:</strong> السعر يشمل قطع عالية الجودة. تشخيص مجاني متاح. الأسعار قد تختلف حسب الموديل الدقيق ومدى الضرر.",
      pr_book: "احجز الآن →",
      pr_whatsapp: "محادثة واتساب →",
      contact_heading: "اتصل بنا",
      contact_sub: "زورنا في زراردة، اتصل بنا، أو احجز إصلاحك عبر الإنترنت. نحن هنا للمساعدة!",
      contact_info_title: "معلومات الاتصال",
      address: "العنوان",
      address_val: "الشارع الرئيسي، زراردة، طاطا، المغرب",
      phone: "الهاتف",
      whatsapp: "واتساب",
      hours_title: "ساعات العمل",
      hours_mon_fri: "الاثنين - الجمعة: 9:00 - 20:00",
      hours_sat: "السبت: 9:00 - 18:00",
      hours_sun: "الأحد: مغلق",
      book_service_title: "احجز إصلاحك",
      book_service_sub: "املأ النموذج أدناه وسنتواصل معك قريبًا لتأكيد موعدك.",
      form_name: "الاسم الكامل *",
      form_name_placeholder: "أدخل اسمك الكامل",
      form_phone: "رقم الهاتف *",
      form_phone_placeholder: "أدخل رقم هاتفك",
      form_service: "الخدمة المطلوبة *",
      form_service_select: "اختر خدمة",
      form_service_other: "أخرى",
      form_device: "موديل الجهاز *",
      form_device_placeholder: "مثال: آيفون 14 برو، سامسونج S23",
      form_issue: "صف المشكلة *",
      form_issue_placeholder: "يرجى وصف المشكلة مع جهازك",
      form_preferred_time: "الوقت المفضل",
      form_time_anytime: "في أي وقت",
      form_time_morning: "الصباح (9-12)",
      form_time_afternoon: "بعد الظهر (12-17)",
      form_time_evening: "المساء (17-20)",
      btn_submit: "📅 احجز موعدًا",
      form_success_title: "تم استلام الحجز!",
      form_success_sub: "شكرًا لحجزك معنا. سنتواصل معك قريبًا لتأكيد موعدك.",
      btn_whatsapp_now: "💬 محادثة واتساب",
      map_title: "اعثر علينا",
      btn_whatsapp: "💬 واتساب",
      services_full_heading: "حلول شاملة",
      services_full_sub: "إصلاحات خبيرة بقطع أصلية وسرعة. من استبدال الشاشات إلى استعادة البيانات، نتعامل مع كل شيء.",
      s_screen: "استبدال الشاشة",
      s_screen_sub: "إصلاحات شاشة سريعة وموثوقة بقطع عالية الجودة",
      s_screen_title: "ماذا نصلح",
      s_screen_desc: "شاشات مكسورة، شاشات لا تستجيب، مشاكل العرض وبيكسلات ميتة. نصلح الشاشات لآيفون وسامسونج وهواوي وشاومي وجميع الماركات.",
      s_screen_process: "عمليتنا",
      s_screen_timing: "مدة الإصلاح",
      s_screen_timing_desc: "معظم إصلاحات الشاشة تكتمل في 30-60 دقيقة بينما تنتظر.",
      s_view_pricing: "عرض الأسعار →",
      s_book_now: "احجز الآن →",
      s_contact_whatsapp: "محادثة واتساب →",
      s_battery: "استبدال البطارية",
      s_battery_sub: "طوال اليوم مع بطارية أصلية جديدة",
      s_battery_title: "ماذا نصلح",
      s_battery_desc: "بطاريات منتفخة، تفريغ سريع وبطارية لا تحمل الشحن. نستبدل البطاريات لجميع الماركات بقطع بديلة عالية الجودة.",
      s_battery_process: "عمليتنا",
      s_battery_timing: "مدة الإصلاح",
      s_battery_timing_desc: "استبدال البطارية يستغرق عادة 30-45 دقيقة.",
      s_charging: "إصلاح منفذ الشحن",
      s_charging_sub: "أصلح مشاكل الشحن والكابلات",
      s_charging_title: "ماذا نصلح",
      s_charging_desc: "لا يشحن، اتصال ضعيف، منفذ تالف أو شحن ببطء. سنعيد إصلاح واستبدال منافذ الشحن لجميع الماركات.",
      s_charging_process: "عمليتنا",
      s_charging_timing: "مدة الإصلاح",
      s_charging_timing_desc: "إصلاحات منفذ الشحن تستغرق عادة 30-45 دقيقة.",
      s_water: "استعادة الأضرار بالماء",
      s_water_sub: "استعادة احترافية من الأضرار بالماء",
      s_water_title: "ماذا نصلح",
      s_water_desc: "هواتف تضررت بالماء، شاشات لا تعمل بعد التعرض للماء، أزرار لا تستجيب. يمكننا استعادة البيانات وإصلاح الأجهزة التالفة بالماء.",
      s_water_process: "عمليتنا",
      s_water_timing: "مدة الإصلاح",
      s_water_timing_desc: "إصلاح الأضرار بالماء قد يستغرق 24-48 ساعة حسب شدة الضرر.",
      s_data: "استعادة البيانات",
      s_data_sub: "استرد البيانات المفقودة من الأجهزة التالفة",
      s_data_title: "ماذا نستعيد",
      s_data_desc: "صور، جهات اتصال، رسائل أو ملفات مفقودة من أجهزة مكسورة أو تضررت بالماء. نتخصص في استعادة البيانات من جميع أنواع أضرار الهواتف.",
      s_data_process: "عمليتنا",
      s_data_timing: "مدة الإصلاح",
      s_data_timing_desc: "استعادة البيانات تستغرق عادة 24-72 ساعة.",
      s_software: "مشاكل البرمجيات",
      s_software_sub: "أصلح المشاكل البرمجية والأعطال",
      s_software_title: "ماذا نصلح",
      s_software_desc: "تجميد، أعطال، حلقات بدء التشغيل، مشاكل التطبيقات أو مشاكل نظام التشغيل. نقدم خدمات احترافية لإصلاح البرمجيات.",
      s_software_process: "عمليتنا",
      s_software_timing: "مدة الإصلاح",
      s_software_timing_desc: "المشاكل البرمجية عادة تحل خلال 30-60 دقيقة.",
      s_step1: "✓ تشخيص المشكلة",
      s_step2: "✓ استبدال بقطعة عالية الجودة",
      s_step3: "✓ معايرة واختبار",
      s_step4: "✓ ضمان 3 أشهر مشمول"
    }
  };

  // ===== GLOBAL VARIABLES =====
  let currentLang = localStorage.getItem('preferredLang') || 'en';

  // ===== WHATSAPP INTEGRATION =====
  const WHATSAPP_NUMBER = '212771863888';

  // Generate WhatsApp URL for booking
  function generateWhatsAppBooking(formData) {
    const serviceMap = {
      'screen': 'استبدال الشاشة / Screen Replacement',
      'battery': 'استبدال البطارية / Battery Replacement',
      'charging': 'إصلاح منفذ الشحن / Charging Port Repair',
      'water': 'استعادة الأضرار بالماء / Water Damage Recovery',
      'data': 'استعادة البيانات / Data Recovery',
      'software': 'مشاكل البرمجيات / Software Issues',
      'other': 'أخرى / Other'
    };

    const timeMap = {
      'anytime': 'في أي وقت / Anytime',
      'morning': 'الصباح (9-12) / Morning',
      'afternoon': 'بعد الظهر (12-17) / Afternoon',
      'evening': 'المساء (17-20) / Evening'
    };

    const serviceName = serviceMap[formData.service] || formData.service;
    const timeName = timeMap[formData.preferred_time] || formData.preferred_time;

    const message = `📱 *طلب حجز إصلاح / Repair Booking Request*

━━━━━━━━━━━━━━━━━━

👤 *الاسم / Name:* ${formData.name}
📞 *الهاتف / Phone:* ${formData.phone}
📱 *الموديل / Model:* ${formData.device}
🔧 *الخدمة / Service:* ${serviceName}
⏰ *الوقت المفضل / Preferred Time:* ${timeName}
📝 *المشكلة / Issue:* ${formData.issue}

━━━━━━━━━━━━━━━━━━

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

      // Optional: Open WhatsApp automatically
      // window.open(whatsappUrl, '_blank');
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
