#!/usr/bin/env python3
import re

files_to_fix = [
    'about-modern.html',
    'pricing-modern.html',
    'contact-modern.html'
]

replacements = [
    (r'href="services.html"', 'href="services-modern.html"'),
    (r'href="about.html"', 'href="about-modern.html"'),
    (r'href="pricing.html"', 'href="pricing-modern.html"'),
    (r'href="contact.html"', 'href="contact-modern.html"'),
]

for filename in files_to_fix:
    try:
        with open(filename, 'r') as f:
            content = f.read()
        
        for old, new in replacements:
            content = content.replace(old, new)
        
        with open(filename, 'w') as f:
            f.write(content)
        print(f"✅ Fixed links in {filename}")
    except FileNotFoundError:
        print(f"❌ {filename} not found - skipping")
