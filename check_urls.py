#!/usr/bin/env python3
"""
URL checker for VIC-museum project.
Checks all museum URLs for accessibility and relevance.
"""

import re
import urllib.request
import urllib.error
import urllib.parse
import ssl
import time

# Ignore SSL errors for checking (some sites have cert issues)
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def check_url(url, timeout=10):
    """Check a URL, return (status_code, final_url, title_snippet)"""
    try:
        req = urllib.request.Request(
            url,
            headers={
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                              'AppleWebKit/537.36 (KHTML, like Gecko) '
                              'Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
            }
        )
        with urllib.request.urlopen(req, timeout=timeout, context=ctx) as resp:
            status = resp.status
            final_url = resp.url
            # Read first 4KB for title
            content = resp.read(4096).decode('utf-8', errors='ignore')
            # Extract title
            m = re.search(r'<title[^>]*>([^<]+)</title>', content, re.IGNORECASE)
            title = m.group(1).strip() if m else '(no title)'
            # Check for 404 text in body
            body_404 = any(x in content.lower() for x in [
                'page not found', '404', 'not found', 'error 404',
                'cannot be found', 'does not exist'
            ])
            redirected = (final_url.rstrip('/') != url.rstrip('/'))
            return status, final_url, title, body_404, redirected
    except urllib.error.HTTPError as e:
        return e.code, url, '', False, False
    except urllib.error.URLError as e:
        return 0, url, str(e.reason), False, False
    except Exception as e:
        return -1, url, str(e), False, False


def extract_museums(html_path):
    """Extract museum data from index.html"""
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    museums = []
    for line in content.split('\n'):
        line = line.strip()
        if not line.startswith('{name:'):
            continue
        m_name = re.search(r'\{name:"([^"]+)"', line)
        m_link = re.search(r'link:"([^"]+)"', line)
        m_img  = re.search(r'customImage:"([^"]+)"', line)
        m_region = re.search(r'region:"([^"]+)"', line)
        if m_name and m_link and m_img:
            museums.append({
                'name': m_name.group(1),
                'url': m_link.group(1),
                'image': m_img.group(1),
                'region': m_region.group(1) if m_region else '?'
            })
    return museums


def main():
    museums = extract_museums('index.html')
    print(f"Checking {len(museums)} museum URLs...\n")
    print(f"{'#':>3} {'Region':<6} {'Museum':<40} {'Status':>6}  {'Result'}")
    print("-" * 100)
    
    problems = []
    ok_count = 0
    
    for i, m in enumerate(museums, 1):
        name = m['name']
        url = m['url']
        region = m['region']
        
        status, final_url, title, body_404, redirected = check_url(url)
        
        # Determine result
        if status == 200 and not body_404:
            result = f"OK  | {title[:50]}"
            ok_count += 1
        elif status == 200 and body_404:
            result = f"⚠️  SOFT 404 | title: {title[:40]}"
            problems.append((i, region, name, url, f"Soft 404 - body says page not found"))
        elif status in (301, 302, 303, 307, 308):
            result = f"REDIRECT → {final_url[:50]}"
            ok_count += 1  # redirects that work are OK
        elif status == 404:
            result = f"❌ 404 NOT FOUND"
            problems.append((i, region, name, url, "HTTP 404"))
        elif status == 0:
            result = f"❌ CONNECTION ERROR: {title[:40]}"
            problems.append((i, region, name, url, f"Connection error: {title[:60]}"))
        elif status == -1:
            result = f"❌ ERROR: {title[:50]}"
            problems.append((i, region, name, url, f"Error: {title[:60]}"))
        else:
            result = f"⚠️  HTTP {status}"
            problems.append((i, region, name, url, f"HTTP {status}"))
        
        print(f"{i:>3} {region:<6} {name[:40]:<40} {status:>6}  {result}")
        time.sleep(0.3)  # polite delay
    
    print("\n" + "=" * 100)
    print(f"\nSUMMARY: {ok_count} OK, {len(problems)} problems\n")
    
    if problems:
        print("PROBLEMS FOUND:")
        print("-" * 80)
        for num, region, name, url, reason in problems:
            print(f"  #{num:3d} [{region}] {name}")
            print(f"        URL: {url}")
            print(f"        Issue: {reason}")
            print()
    else:
        print("All URLs are accessible! ✓")


if __name__ == '__main__':
    main()
