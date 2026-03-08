import os

target_dir = r"c:\Users\issam\Downloads\electric_youssef"

# 1. Fix WhatsApp Links
html_files = ["index.html", "services.html", "pricing.html", "about.html", "contact.html"]
for filename in html_files:
    filepath = os.path.join(target_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Replace the exact string
    content = content.replace("213XXXXXXXXX", "213690992767")
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

# 2. Fix JS active state on btn
js_path = os.path.join(target_dir, "js", "main.js")
with open(js_path, "r", encoding="utf-8") as f:
    js_content = f.read()

js_content = js_content.replace(
    "navLinks?.querySelectorAll('a').forEach(link => {",
    "navLinks?.querySelectorAll('a:not(.btn)').forEach(link => {"
)

with open(js_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print("Patch 2 completed successfully!")
