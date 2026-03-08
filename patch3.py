import os
import re

target_dir = r"c:\Users\issam\Downloads\electric_youssef"

# 1. Update style.css for select options
style_path = os.path.join(target_dir, "css", "style.css")
with open(style_path, "r", encoding="utf-8") as f:
    css = f.read()

option_fix = """
/* Fix select option rendering on some browsers */
select.form-control option {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
}
"""
if "select.form-control option" not in css:
    css += option_fix

with open(style_path, "w", encoding="utf-8") as f:
    f.write(css)


# 2. Fix the placeholder in contact.html & update footer Year
html_files = ["index.html", "services.html", "pricing.html", "about.html", "contact.html"]
for filename in html_files:
    filepath = os.path.join(target_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()
        
    # Revert placeholder back to 05XX XX XX XX
    html = html.replace('placeholder="0690992767"', 'placeholder="05XX XX XX XX"')
    
    # In case there's any hardcoded © 2024 left
    html = html.replace('© 2024', '© 2026')
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)


# 3. Fix translations.js
js_path = os.path.join(target_dir, "js", "translations.js")
with open(js_path, "r", encoding="utf-8") as f:
    js_content = f.read()

js_content = js_content.replace('"form_phone_ph": "0690992767"', '"form_phone_ph": "05XX XX XX XX"')
js_content = js_content.replace('© 2024', '© 2026')

with open(js_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print("Final patch completed successfully!")
