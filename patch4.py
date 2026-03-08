import os

target_dir = r"c:\Users\issam\Downloads\electric_youssef"
html_files = ["index.html", "services.html", "pricing.html", "about.html", "contact.html"]
js_files = ["js/main.js", "js/translations.js"]

all_files = html_files + js_files

replacements = [
    ("213XXXXXXXXX", "212771863888"),
    ("213690992767", "212771863888"),
    ("0690992767", "+212 771863888"),
    ("+213 XX XX XX XX", "+212 771863888"),
    ("Algeria", "Morocco"),
    ("Algérie", "Maroc"),
    ("الجزائر", "المغرب"),
]

for filename in all_files:
    filepath = os.path.join(target_dir, filename.replace('/', '\\'))
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Patch 4 completed successfully!")
