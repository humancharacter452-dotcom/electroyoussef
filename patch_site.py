import os
import re

target_dir = r"c:\Users\issam\Downloads\electric_youssef"
html_files = ["index.html", "services.html", "pricing.html", "about.html", "contact.html"]

# 1. Update style.css to fix button color
style_path = os.path.join(target_dir, "css", "style.css")
with open(style_path, "r", encoding="utf-8") as f:
    css = f.read()

btn_fix = """
/* Fix nav button text color */
.nav-links a.btn-primary {
  color: #0a0e17 !important;
}
"""
if "nav-links a.btn-primary" not in css:
    css += btn_fix

with open(style_path, "w", encoding="utf-8") as f:
    f.write(css)

# 2. Update HTML files for phone numbers and maps
html_replacements = [
    # Phone number text placeholders
    (r'\+213 XX XX XX XX', r'0690992767'),
    (r'05XX XX XX XX', r'0690992767'),
    
    # Phone number href placeholders
    (r'\+213XXXXXXXXX', r'213690992767'),
    
    # Map Embed
    (r'https://www.google.com/maps/embed\?pb=[^"]+', r'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3403.4!2d-4.379004!3d33.976822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000!5m2!1sen!2sus'),
    
    # Apple Maps Link
    (r'<div class="contact-info-value" data-i18n="address_val">Main Street, ZERARDA<br>Algeria</div>', 
     r'<div class="contact-info-value"><a href="https://maps.apple.com/?ll=33.976822,-4.379004&q=Aissam%20Lakhyari%E2%80%99s%20Location&t=h" target="_blank" data-i18n="address_val" style="color: var(--neon-blue); text-decoration: underline;">Main Street, ZERARDA<br>Algeria</a></div>')
]

for filename in html_files:
    filepath = os.path.join(target_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    for old, new in html_replacements:
        content = re.sub(old, new, content)
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

# 3. Update translations.js Developer Credits
js_path = os.path.join(target_dir, "js", "translations.js")
with open(js_path, "r", encoding="utf-8") as f:
    js_content = f.read()

js_replacements = [
    (r'"made_in":\s*"Made with ⚡ in ZERARDA"', r'"made_in": "Developed by AISSAM LAKHYARI"'),
    (r'"made_in":\s*"Fait avec ⚡ à ZERARDA"', r'"made_in": "Développé par AISSAM LAKHYARI"'),
    (r'"made_in":\s*"صُنع بـ ⚡ في زراردة"', r'"made_in": "تطوير AISSAM LAKHYARI"'),
    (r'"form_phone_ph":\s*"05XX XX XX XX"', r'"form_phone_ph": "0690992767"')
]

for old, new in js_replacements:
    js_content = re.sub(old, new, js_content)

with open(js_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print("Site patch completed successfully!")
