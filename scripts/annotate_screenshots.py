#!/usr/bin/env python3
"""Crop raw screenshots, blur private text, draw red highlight rectangles,
write final doc images.

Usage:
    python3 scripts/annotate_screenshots.py <spec.json> [--only ID]

Spec: a JSON list of jobs. All coordinates are in RAW image pixels (as
captured), so they can be measured once on the raw file even when the
output is cropped or downscaled.

    [
      {
        "id": "S06",                          # label, for --only and logs
        "src": "raw-screenshots/S06.png",
        "out": "static/img/zw/workspace/zw_west_workspace_import.png",
        "crop": [120, 80, 900, 700],          # optional [x, y, w, h]
        "rects": [[400, 500, 180, 28]],       # optional red boxes [x, y, w, h]
        "blur": [[250, 310, 96, 26]],         # optional boxes to blur, such as a user name
        "max_width": 1200                     # optional downscale target
      }
    ]

Requires Pillow:  pip3 install pillow
"""

import json
import os
import sys

from PIL import Image, ImageDraw, ImageFilter

RED = "#E5342B"
LINE_PX = 3          # rectangle stroke at final output size
PAD_PX = 4           # breathing room around the highlighted element
BLUR_PAD_PX = 2      # raw pixels blurred around each blur box, for anti-aliasing


def blur(img, box):
    x, y, w, h = box
    x0, y0 = max(0, x - BLUR_PAD_PX), max(0, y - BLUR_PAD_PX)
    x1, y1 = min(img.width, x + w + BLUR_PAD_PX), min(img.height, y + h + BLUR_PAD_PX)
    region = img.crop((x0, y0, x1, y1))
    radius = max(5, round((y1 - y0) / 5))
    img.paste(region.filter(ImageFilter.GaussianBlur(radius)), (x0, y0))


def process(job, repo_root):
    src = os.path.join(repo_root, job["src"])
    out = os.path.join(repo_root, job["out"])
    img = Image.open(src).convert("RGB")
    for box in job.get("blur", []):
        blur(img, box)

    ox = oy = 0
    if "crop" in job:
        x, y, w, h = job["crop"]
        img = img.crop((x, y, x + w, y + h))
        ox, oy = x, y

    scale = 1.0
    max_w = job.get("max_width")
    if max_w and img.width > max_w:
        scale = max_w / img.width
        img = img.resize((max_w, round(img.height * scale)), Image.LANCZOS)

    draw = ImageDraw.Draw(img)
    for rx, ry, rw, rh in job.get("rects", []):
        x0 = (rx - ox) * scale - PAD_PX
        y0 = (ry - oy) * scale - PAD_PX
        x1 = (rx - ox + rw) * scale + PAD_PX
        y1 = (ry - oy + rh) * scale + PAD_PX
        draw.rectangle([x0, y0, x1, y1], outline=RED, width=LINE_PX)

    os.makedirs(os.path.dirname(out), exist_ok=True)
    img.save(out, "PNG")
    print(f"{job.get('id', '?'):6} -> {job['out']}  ({img.width}x{img.height})")


def main():
    args = sys.argv[1:]
    if not args:
        sys.exit(__doc__)
    only = None
    if "--only" in args:
        i = args.index("--only")
        only = args[i + 1]
        del args[i : i + 2]

    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    with open(os.path.join(repo_root, args[0])) as f:
        jobs = json.load(f)

    for job in jobs:
        if only and job.get("id") != only:
            continue
        process(job, repo_root)


if __name__ == "__main__":
    main()
