#!/bin/sh
# 生成标题用中文展示字体子集（Noto Sans SC，OFL 许可）。
# 只保留 src/ 下实际出现的字符，改了文案后重新运行：
#   scripts/subset-font.sh /path/to/NotoSansSC[wght].ttf
# 源字体：https://github.com/google/fonts/tree/main/ofl/notosanssc
set -e
SRC_FONT="$1"
[ -f "$SRC_FONT" ] || { echo "usage: $0 <NotoSansSC[wght].ttf>"; exit 1; }
cd "$(dirname "$0")/.."
TMP=$(mktemp -d)
find src -name '*.ts' -o -name '*.tsx' | xargs cat | python3 -c "
import sys
chars = {c for c in sys.stdin.read() if ord(c) > 0x2000}
sys.stdout.write(''.join(sorted(chars)))
" > "$TMP/chars.txt"
pyftsubset "$SRC_FONT" --text-file="$TMP/chars.txt" --layout-features='kern,palt,locl' \
  --output-file="$TMP/subset.ttf"
fonttools varLib.instancer "$TMP/subset.ttf" wght=700:900 -o "$TMP/narrow.ttf" -q
pyftsubset "$TMP/narrow.ttf" --unicodes='*' --flavor=woff --layout-features='*' \
  --output-file=src/fonts/NotoSansSC-display.woff
ls -la src/fonts/NotoSansSC-display.woff
wc -m < "$TMP/chars.txt"
rm -rf "$TMP"
