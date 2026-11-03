#!/bin/bash
# Prints: STATUS CODE URL. Flags parked domains, errors, and removed itch pages.
grep -oE 'https?://[^"]+' "$1" | grep -v 'github.com/' | sort -u | while read -r u; do
  body=$(curl -sL -m 20 -A "Mozilla/5.0 (Macintosh) Chrome/130" -w '\n__CODE__%{http_code}' "$u")
  code=${body##*__CODE__}; b=${body%__CODE__*}
  st=OK
  [[ "$code" != 2* ]] && st=DEAD
  echo "$b" | head -c 3000 | grep -qiE 'location.href="/lander"|ap:"parking"|domain is for sale|buy this domain' && st=PARKED
  echo "$b" | grep -qiE "page not found|this page doesn't exist|no longer available|has been removed|DMCA" && [[ $st == OK ]] && st=SUSPECT
  [[ ${#b} -lt 200 && $st == OK ]] && st=TINY
  echo "$st $code $u"
done
