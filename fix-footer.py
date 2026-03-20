#!/usr/bin/env python3
import re

# Read the file
with open('index-modern.html', 'r') as f:
    content = f.read()

# Replace old footer links with modern versions
replacements = [
    (r'href="services.html"', 'href="services-modern.html"'),
    (r'href="about.html"', 'href="about-modern.html"'),
    (r'href="contact.html"', 'href="contact-modern.html"'),
]

for old, new in replacements:
    content = content.replace(old, new)

# Write back
with open('index-modern.html', 'w') as f:
    f.write(content)

print("✅ Footer links updated in index-modern.html")
