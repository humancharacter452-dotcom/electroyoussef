import os

target_dir = r"c:\Users\issam\Downloads\electric_youssef"
html_files = ["index.html", "services.html", "pricing.html", "about.html", "contact.html"]
js_files = ["js/main.js", "js/translations.js"]

all_files = html_files + js_files

replacements = [
    # Brand Name English/French
    ("Electric Youssef", "Electro Youssef"),
    ("electricyoussef@gmail.com", "electroyoussef2025@gmail.com"),
    
    # Brand Name Arabic
    ("إليكتريك يوسف", "إليكترو يوسف"),
    
    # Button Href Update (Targeting btn_call)
    ('href="tel:+212 771863888" class="btn btn-secondary" data-i18n="btn_call"', 'href="mailto:electroyoussef2025@gmail.com" class="btn btn-secondary" data-i18n="btn_email"'),
    ('href="tel:+212 771863888" class="btn btn-secondary" data-i18n="btn_call"', 'href="mailto:electroyoussef2025@gmail.com" class="btn btn-secondary" data-i18n="btn_email"'),
    
    # Also update the data-i18n attribute in HTML files dynamically just in case there are formatting variations
    ('data-i18n="btn_call">📞 Call Now', 'data-i18n="btn_email">✉️ Email Us'),
    ('data-i18n="btn_call">📞 Appeler', 'data-i18n="btn_email">✉️ Email'),
    ('data-i18n="btn_call">📞 اتصل الآن', 'data-i18n="btn_email">✉️ بريد إلكتروني'),
]

for filename in all_files:
    filepath = os.path.join(target_dir, filename.replace('/', '\\'))
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

# Update the translation dictionary explicitly for the new keys
translations_path = os.path.join(target_dir, "js", "translations.js")
with open(translations_path, "r", encoding="utf-8") as f:
    ts = f.read()

ts = ts.replace('"btn_call": "📞 Call Now"', '"btn_email": "✉️ Email Us"')
ts = ts.replace('"btn_call": "📞 Appeler"', '"btn_email": "✉️ Envoyer un Email"')
ts = ts.replace('"btn_call": "📞 اتصل الآن"', '"btn_email": "✉️ أرسل إيميل"')

# Also remove the old btn_call from being rendered if we already replaced it in JS content during first pass
# Actually, the first pass replaced "Electric" with "Electro", so "btn_call" is fine.
with open(translations_path, "w", encoding="utf-8") as f:
    f.write(ts)

print("Patch 5 completed successfully!")
