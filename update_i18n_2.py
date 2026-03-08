import os
import re

target_dir = r"c:\Users\issam\Downloads\electric_youssef"

# 1. Update style.css
css_path = os.path.join(target_dir, "css", "style.css")
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Remove the old ::before pseudo-element
css = re.sub(r'\.pricing-card\.featured::before\s*\{[^}]+\}', '', css)
# Add .pricing-badge styles
badge_css = """
.pricing-badge {
  position: absolute;
  top: -15px;
  right: 20px;
  background: var(--primary-color);
  color: var(--dark-bg);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(0, 240, 255, 0.4);
}
"""
if ".pricing-badge" not in css:
    css += badge_css

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

# 2. Update HTML Files
html_replacements = [
    # Fixed stats suffix
    (r'data-suffix=" min"', r'data-suffix=""'),
    (r'data-suffix=" Min"', r'data-suffix=""'),
    
    # Time spans
    (r'30–60 min', r'30–60 <span data-i18n="time_min">min</span>'),
    (r'20–40 min', r'20–40 <span data-i18n="time_min">min</span>'),
    (r'30–50 min', r'30–50 <span data-i18n="time_min">min</span>'),
    (r'15–45 min', r'15–45 <span data-i18n="time_min">min</span>'),
    (r'1–3 hours', r'1–3 <span data-i18n="time_hours">hours</span>'),
    (r'1–4 hours', r'1–4 <span data-i18n="time_hours">hours</span>'),
    (r'🛒 In-store', r'🛒 <span data-i18n="in_store">In-store</span>'),

    # Currency
    (r'<span class="currency">DZD</span>', r'<span class="currency" data-i18n="currency_dzd">DZD</span>'),

    # Our
    (r'<h1>Our <span class="text-gradient"', r'<h1><span data-i18n="our_word">Our</span> <span class="text-gradient"'),
]

for filename in ["index.html", "services.html", "pricing.html", "about.html", "contact.html"]:
    filepath = os.path.join(target_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    for old, new in html_replacements:
        content = content.replace(old, new)

    # Specific fix for pricing badge
    if filename == "pricing.html":
        content = content.replace('<div class="pricing-icon">📱</div>', '<div class="pricing-badge" data-i18n="badge_common">Most Common</div>\n          <div class="pricing-icon">📱</div>')

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

# 3. Update translations.js
js_path = os.path.join(target_dir, "js", "translations.js")
with open(js_path, "r", encoding="utf-8") as f:
    js_content = f.read()

# Add new keys safely
additions = {
    "en": {
        "our_word": "Our",
        "time_min": "min",
        "time_hours": "hours",
        "in_store": "In-store",
        "badge_common": "Most Common",
        "currency_dzd": "DZD",
        "stat_time": "Min Avg. Repair",
        "trust_time": "Min Avg. Repair Time",
    },
    "fr": {
        "our_word": "Nos",
        "time_min": "min",
        "time_hours": "heures",
        "in_store": "En magasin",
        "badge_common": "Le Plus Courant",
        "currency_dzd": "DZD",
        "stat_time": "Min Temps Moyen",
        "trust_time": "Min Temps Moyen",
    },
    "ar": {
        "our_word": " ",
        "time_min": "دقيقة",
        "time_hours": "ساعات",
        "in_store": "في المتجر",
        "badge_common": "الأكثر شيوعاً",
        "currency_dzd": "د.ج",
        "stat_time": "دقيقة متوسط التـصليح",
        "trust_time": "دقيقة متوسط وقت التصليح",
    }
}

for lang in ["en", "fr", "ar"]:
    for key, val in additions[lang].items():
        # Inject right before the end of the language block
        target_str = f'"{key}": "{val}",\n    '
        # we will just add it after btn_quote for example, or anywhere
        replace_anchor = f'"{lang}": {{\n'
        js_content = js_content.replace(replace_anchor, replace_anchor + '    ' + target_str)

with open(js_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print("Edge cases updated successfully!")
