#!/usr/bin/env python3
"""生成标题用中文展示字体子集（Noto Sans SC，OFL 许可，可变字重 700–900）。

按使用范围切成三档，配合 unicode-range 按需加载：
  core  —— 首页与全站共享组件出现的字符（每页都会用到）
  site  —— 其余页面新增的字符
  legal —— 仅法务页出现的字符

文案改动后重新运行（需要 pip install fonttools brotli）：
  python3 scripts/subset-font.py /path/to/NotoSansSC[wght].ttf
源字体：https://github.com/google/fonts/tree/main/ofl/notosanssc
"""
import glob
import hashlib
import os
import sys
import tempfile

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
os.chdir(ROOT)

CORE_FILES = [
    "src/app/page.tsx",
    "src/app/layout.tsx",
    "src/lib/site-config.ts",
    *glob.glob("src/components/home/*"),
    *glob.glob("src/components/layout/*"),
    *glob.glob("src/components/site/*"),
]


def chars(files):
    out = set()
    for f in files:
        with open(f, encoding="utf-8") as fh:
            out |= {c for c in fh.read() if ord(c) > 0x2000}
    return out


def build(src_font, text, out_path):
    with tempfile.TemporaryDirectory() as tmp:
        step1 = os.path.join(tmp, "subset.ttf")
        opts = subset.Options()
        opts.layout_features = ["kern", "palt", "locl"]
        font = TTFont(src_font)
        sub = subset.Subsetter(opts)
        sub.populate(text="".join(sorted(text)))
        sub.subset(font)
        font.save(step1)
        narrow = instancer.instantiateVariableFont(TTFont(step1), {"wght": (700, 900)})
        narrow.flavor = "woff2"
        narrow.save(out_path)


def unicode_range(text):
    return ",".join(f"U+{ord(c):X}" for c in sorted(text))


def main():
    if len(sys.argv) != 2 or not os.path.isfile(sys.argv[1]):
        sys.exit("usage: subset-font.py <NotoSansSC[wght].ttf>")
    src_font = sys.argv[1]
    all_files = glob.glob("src/**/*.ts", recursive=True) + glob.glob("src/**/*.tsx", recursive=True)
    legal_files = [f for f in all_files if "/legal/" in f]
    core = chars(CORE_FILES)
    site = chars([f for f in all_files if f not in legal_files]) - core
    legal = chars(legal_files) - core - site

    os.makedirs("public/fonts", exist_ok=True)
    faces = []
    for name, text in (("core", core), ("site", site), ("legal", legal)):
        if not text:
            continue
        out = f"public/fonts/ll-display-{name}.woff2"
        build(src_font, text, out)
        with open(out, "rb") as fh:
            ver = hashlib.md5(fh.read()).hexdigest()[:8]
        print(f"{name}: {len(text)} chars, {os.path.getsize(out) // 1024} KB")
        faces.append(
            "@font-face {\n"
            '  font-family: "LL Display SC";\n'
            "  font-style: normal;\n"
            "  font-weight: 700 900;\n"
            "  font-display: swap;\n"
            f'  src: url("/fonts/ll-display-{name}.woff2?v={ver}") format("woff2");\n'
            f"  unicode-range: {unicode_range(text)};\n"
            "}\n"
        )
    with open("src/app/fonts.css", "w", encoding="utf-8") as fh:
        fh.write("/* 由 scripts/subset-font.py 生成，请勿手改 */\n\n" + "\n".join(faces))


if __name__ == "__main__":
    main()
