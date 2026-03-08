import os

target_dir = r"c:\Users\issam\Downloads\electric_youssef"
html_files = ["index.html", "services.html", "pricing.html", "about.html", "contact.html"]

replacements = [
    # General & Nav
    (r'<span class="logo-icon">⚡</span>\s*Electric Youssef', r'<span class="logo-icon">⚡</span> <span data-i18n="brand_name">Electric Youssef</span>'),
    (r'<button class="lang-option active" data-lang="en">English \(EN\)</button>', r'<button class="lang-option active" data-lang="en" data-i18n="lang_en">English (EN)</button>'),
    (r'<button class="lang-option" data-lang="fr">Français \(FR\)</button>', r'<button class="lang-option" data-lang="fr" data-i18n="lang_fr">Français (FR)</button>'),
    (r'<button class="lang-option" data-lang="ar">العربية \(AR\)</button>', r'<button class="lang-option" data-lang="ar" data-i18n="lang_ar">العربية (AR)</button>'),

    # Pricing Page
    (r'<h1>Transparent <span class="text-gradient">Pricing</span></h1>', r'<h1><span data-i18n="pricing_title1">Transparent</span> <span class="text-gradient" data-i18n="pricing_title2">Pricing</span></h1>'),
    (r'<div class="pricing-range text-gradient">2,000 – 8,000 <span class="currency">DZD</span></div>', r'<div class="pricing-range text-gradient"><span data-i18n="price_screen">2,000 – 8,000</span> <span class="currency">DZD</span></div>'),
    (r'<div class="pricing-range text-gradient">1,500 – 4,000 <span class="currency">DZD</span></div>', r'<div class="pricing-range text-gradient"><span data-i18n="price_battery">1,500 – 4,000</span> <span class="currency">DZD</span></div>'),
    (r'<div class="pricing-range text-gradient">1,000 – 3,000 <span class="currency">DZD</span></div>', r'<div class="pricing-range text-gradient"><span data-i18n="price_port">1,000 – 3,000</span> <span class="currency">DZD</span></div>'),
    (r'<p class="pricing-note">Varies by model and screen type</p>', r'<p class="pricing-note" data-i18n="price_note">Varies by model and screen type</p>'),
    (r'<span class="check">✓</span> <span data-i18n="fe_genuine">Genuine cells</span>', r'<span class="check">✓</span> <span data-i18n="price_gen_cells">Genuine cells</span>'),
    (r'<span class="check">✓</span> <span data-i18n="fe_genuine">Reliable fix</span>', r'<span class="check">✓</span> <span data-i18n="price_rel_fix">Reliable fix</span>'),

    # About Page
    (r'<h1>About <span class="text-gradient">Electric Youssef</span></h1>', r'<h1><span data-i18n="about_title1">About</span> <span class="text-gradient" data-i18n="about_title2">Electric Youssef</span></h1>'),
    (r'<div class="stat-label" data-i18n="trust_exp">Years of Experience</div>', r'<div class="stat-label" data-i18n="about_years">Years of Experience</div>'),

    # Contact Page
    (r'<h1><span data-i18n="book_your_repair">Book Your</span> <span class="text-gradient">Repair</span></h1>', r'<h1><span data-i18n="contact_title1">Book Your</span> <span class="text-gradient" data-i18n="contact_title2">Repair</span></h1>'),
    (r'<p data-i18n="visit_us">Visit us in ZERARDA, call us, or book your repair online. We\'re ready to help!</p>', r'<p data-i18n="contact_sub">Visit us in ZERARDA, call us, or book your repair online. We\'re ready to help!</p>'),

    # Contact Form Options
    (r'<option value="Screen Replacement">Screen Replacement</option>', r'<option value="Screen Replacement" data-i18n="opt_screen">Screen Replacement</option>'),
    (r'<option value="Battery Replacement">Battery Replacement</option>', r'<option value="Battery Replacement" data-i18n="opt_battery">Battery Replacement</option>'),
    (r'<option value="Charging Port">Charging Port Repair</option>', r'<option value="Charging Port" data-i18n="opt_port">Charging Port Repair</option>'),
    (r'<option value="Water Damage">Water Damage</option>', r'<option value="Water Damage" data-i18n="opt_water">Water Damage</option>'),
    (r'<option value="Software Issue">Software Issue</option>', r'<option value="Software Issue" data-i18n="opt_soft">Software Issue</option>'),
    (r'<option value="Data Recovery">Data Recovery</option>', r'<option value="Data Recovery" data-i18n="opt_data">Data Recovery</option>'),
    (r'<option value="Other Diagnostics">Other / Need Diagnostics</option>', r'<option value="Other Diagnostics" data-i18n="opt_other">Other / Need Diagnostics</option>'),
    
    # Contact Info Items
    (r'<div class="contact-info-value">Main Street, ZERARDA<br>Algeria</div>', r'<div class="contact-info-value" data-i18n="address_val">Main Street, ZERARDA<br>Algeria</div>'),
    (r'<a href="https://wa.me/213XXXXXXXXX" target="_blank">Chat with us</a>', r'<a href="https://wa.me/213XXXXXXXXX" target="_blank" data-i18n="chat_with_us">Chat with us</a>'),

    # Services CTA
    (r'<h2 data-i18n="ready_fix">Need a Repair\?</h2>', r'<h2 data-i18n="services_cta_title">Need a Repair?</h2>'),
    (r'<p data-i18n="ready_sub">Get in touch today for a free diagnostic and fast repair service.</p>', r'<p data-i18n="services_cta_sub">Get in touch today for a free diagnostic and fast repair service.</p>'),
    (r'<a href="contact.html" class="btn btn-primary" data-i18n="btn_online">📅 Book Now</a>', r'<a href="contact.html" class="btn btn-primary" data-i18n="services_cta_btn1">📅 Book Now</a>'),
    (r'<a href="pricing.html" class="btn btn-secondary" data-i18n="btn_quote">💰 View Pricing</a>', r'<a href="pricing.html" class="btn btn-secondary" data-i18n="services_cta_btn2">💰 View Pricing</a>'),

    # Footer
    (r'<li>📍 ZERARDA</li>', r'<li><span data-i18n="footer_loc">📍 ZERARDA</span></li>'),
    (r'<li><a href="mailto:(.*?)">✉️ Email</a></li>', r'<li><a href="mailto:\1" data-i18n="footer_email">✉️ Email</a></li>'),

    # Testimonials
    (r'<p class="testimonial-text">"Fixed my iPhone screen in just 25 minutes! The quality is amazing and the price was very fair. Highly recommend Electric Youssef!"</p>', r'<p class="testimonial-text" data-i18n="t1_text">"Fixed my iPhone screen in just 25 minutes! The quality is amazing and the price was very fair. Highly recommend Electric Youssef!"</p>'),
    (r'<div class="testimonial-name">Ahmed K.</div>', r'<div class="testimonial-name" data-i18n="t1_name">Ahmed K.</div>'),
    (r'<div class="testimonial-role">iPhone 14 Pro – Screen Repair</div>', r'<div class="testimonial-role" data-i18n="t1_role">iPhone 14 Pro – Screen Repair</div>'),

    (r'<p class="testimonial-text">"My Samsung was water damaged and I thought it was done for. They recovered all my data and fixed the phone completely. Incredible service!"</p>', r'<p class="testimonial-text" data-i18n="t2_text">"My Samsung was water damaged and I thought it was done for. They recovered all my data and fixed the phone completely. Incredible service!"</p>'),
    (r'<div class="testimonial-name">Sara B.</div>', r'<div class="testimonial-name" data-i18n="t2_name">Sara B.</div>'),
    (r'<div class="testimonial-role">Samsung S23 – Water Damage</div>', r'<div class="testimonial-role" data-i18n="t2_role">Samsung S23 – Water Damage</div>'),

    (r'<p class="testimonial-text">"Professional, fast, and honest. They told me exactly what was wrong before starting the repair. Best repair shop in the area!"</p>', r'<p class="testimonial-text" data-i18n="t3_text">"Professional, fast, and honest. They told me exactly what was wrong before starting the repair. Best repair shop in the area!"</p>'),
    (r'<div class="testimonial-name">Mohamed R.</div>', r'<div class="testimonial-name" data-i18n="t3_name">Mohamed R.</div>'),
    (r'<div class="testimonial-role">Huawei P50 – Battery Replacement</div>', r'<div class="testimonial-role" data-i18n="t3_role">Huawei P50 – Battery Replacement</div>'),

    # FAQs
    (r'How long does a typical screen repair take\?', r'<span data-i18n="faq1_q">How long does a typical screen repair take?</span>'),
    (r'<p>Most screen replacements take between 30–60 minutes depending on the device model. We offer express service for common models like iPhone and Samsung Galaxy.</p>', r'<p data-i18n="faq1_a">Most screen replacements take between 30–60 minutes depending on the device model. We offer express service for common models like iPhone and Samsung Galaxy.</p>'),
    
    (r'Do you offer a warranty on repairs\?', r'<span data-i18n="faq2_q">Do you offer a warranty on repairs?</span>'),
    (r'<p>Yes! All our repairs come with a 3-month warranty covering parts and labour. If anything goes wrong during this period, we\'ll fix it for free.</p>', r'<p data-i18n="faq2_a">Yes! All our repairs come with a 3-month warranty covering parts and labour. If anything goes wrong during this period, we\'ll fix it for free.</p>'),

    (r'Do you use genuine parts\?', r'<span data-i18n="faq3_q">Do you use genuine parts?</span>'),
    (r'<p>We use high-quality OEM and genuine replacement parts for all repairs. We believe in quality over shortcuts to ensure your device performs like new.</p>', r'<p data-i18n="faq3_a">We use high-quality OEM and genuine replacement parts for all repairs. We believe in quality over shortcuts to ensure your device performs like new.</p>'),

    (r'Can you recover data from a broken phone\?', r'<span data-i18n="faq4_q">Can you recover data from a broken phone?</span>'),
    (r'<p>In most cases, yes. We have specialized tools for data recovery from devices with screen damage, water damage, or software issues. Success rate depends on the extent of damage.</p>', r'<p data-i18n="faq4_a">In most cases, yes. We have specialized tools for data recovery from devices with screen damage, water damage, or software issues. Success rate depends on the extent of damage.</p>'),

    (r'What phone brands do you repair\?', r'<span data-i18n="faq5_q">What phone brands do you repair?</span>'),
    (r'<p>We repair all major brands including Apple \(iPhone\), Samsung, Huawei, Xiaomi, Oppo, Realme, Vivo, OnePlus, and many more. Contact us to check your specific model.</p>', r'<p data-i18n="faq5_a">We repair all major brands including Apple (iPhone), Samsung, Huawei, Xiaomi, Oppo, Realme, Vivo, OnePlus, and many more. Contact us to check your specific model.</p>'),

    (r'Do I need an appointment\?', r'<span data-i18n="faq6_q">Do I need an appointment?</span>'),
    (r'<p>Walk-ins are welcome! However, booking online or via WhatsApp guarantees a time slot and can reduce your wait time, especially during busy hours.</p>', r'<p data-i18n="faq6_a">Walk-ins are welcome! However, booking online or via WhatsApp guarantees a time slot and can reduce your wait time, especially during busy hours.</p>')
]

import re

for filename in html_files:
    filepath = os.path.join(target_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = re.sub(old, new, content)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Update complete!")
