import os

target_dir = r"c:\Users\issam\Downloads\electric_youssef"
html_files = ["index.html", "services.html", "pricing.html", "about.html", "contact.html"]
js_files = ["js/translations.js"]

all_files = html_files + js_files

replacements = [
    # Remove Nav Links to Pricing
    ('<a href="pricing.html" data-i18n="nav_pricing">Pricing</a>', ""),
    ('<a href="pricing.html" class="active" data-i18n="nav_pricing">Pricing</a>', ""),
    
    # Remove CTA Buttons pointing to Pricing
    ('<a href="pricing.html" class="btn btn-secondary" data-i18n="btn_quote">💰 Get Quote</a>', ""),
    ('<a href="pricing.html" class="btn btn-secondary" data-i18n="services_cta_btn2">💰 View Pricing</a>', ""),

    # Remove quick links in Footer pointing to pricing
    ('<li><a href="pricing.html" data-i18n="nav_pricing">Pricing</a></li>', ""),

    # Update Business Hours Tags
    ('data-i18n="sat_thu">Sat - Thu', 'data-i18n="sat_thu">Mon - Sat'),
    ('9:00 AM - 8:00 PM', '8:00 AM - 12:00 PM <br> 2:00 PM - 8:00 PM'),
    ('data-i18n="fri_closed">Friday: Closed', 'data-i18n="fri_closed">Sunday: Closed'),
]

for filename in html_files:
    filepath = os.path.join(target_dir, filename.replace('/', '\\'))
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

# Update Translations for Days
translations_path = os.path.join(target_dir, "js", "translations.js")
with open(translations_path, "r", encoding="utf-8") as f:
    ts = f.read()

ts_replacements = [
    ('"sat_thu": "Sat - Thu"', '"sat_thu": "Mon - Sat"'),
    ('"fri_closed": "Friday: Closed"', '"fri_closed": "Sunday: Closed"'),
    
    ('"sat_thu": "Samedi - Jeudi"', '"sat_thu": "Lundi - Samedi"'),
    ('"fri_closed": "Vendredi: Fermé"', '"fri_closed": "Dimanche: Fermé"'),
    
    ('"sat_thu": "السبت - الخميس"', '"sat_thu": "الإثنين - السبت"'),
    ('"fri_closed": "الجمعة: مغلق"', '"fri_closed": "الأحد: مغلق"'),
]

for old, new in ts_replacements:
    ts = ts.replace(old, new)

with open(translations_path, "w", encoding="utf-8") as f:
    f.write(ts)

print("Patch 6 completed successfully!")
