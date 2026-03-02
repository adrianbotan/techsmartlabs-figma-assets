#!/usr/bin/env python3
"""
Recolor SVG icons and illustrations to TechSmartLabs brand palette.
Handles both CSS <style> blocks and inline fill/stroke attributes.
"""
import os
import sys
from pathlib import Path

# Source -> Target color mapping (case-insensitive matching via both cases)
COLOR_MAP = {
    # Blue family -> Teal/Green family
    '#98B9EA': '#4D9987',   # light blue -> teal accent
    '#98b9ea': '#4D9987',
    '#436DB5': '#0E352C',   # medium blue -> deep green
    '#436db5': '#0E352C',
    '#DEEAFF': '#E9EBDF',   # very light blue -> warm off-white
    '#deeaff': '#E9EBDF',
    # Lime family -> Green family
    '#C4D36C': '#27ae60',   # lime -> primary green
    '#c4d36c': '#27ae60',
    '#A7B23B': '#185849',   # darker lime -> darkened green
    '#a7b23b': '#185849',
    '#DFEAB0': '#C4D7D3',   # pale yellow-green -> lightest green
    '#dfeab0': '#C4D7D3',
}


def recolor_svg(filepath, color_map, dry_run=False):
    """Replace colors in an SVG file. Returns True if changes were made."""
    content = filepath.read_text(encoding='utf-8')
    original = content

    for source, target in color_map.items():
        content = content.replace(source, target)

    changed = content != original
    if changed and not dry_run:
        filepath.write_text(content, encoding='utf-8')
    return changed


def process_directory(dirpath, color_map, dry_run=False):
    """Process all SVGs in a directory tree."""
    root = Path(dirpath)
    svg_files = sorted(root.rglob('*.svg'))
    changed_count = 0
    total = len(svg_files)

    for svg in svg_files:
        changed = recolor_svg(svg, color_map, dry_run)
        if changed:
            changed_count += 1
            if dry_run:
                print(f"  [DRY-RUN] Would change: {svg.relative_to(root)}")
            else:
                print(f"  [DONE] {svg.relative_to(root)}")

    print(f"\nProcessed {total} SVGs. Changed: {changed_count}. Unchanged: {total - changed_count}.")
    return changed_count


if __name__ == '__main__':
    dry_run = '--dry-run' in sys.argv

    base = Path(__file__).parent
    targets = [
        base / '02-icons-marketing',
        base / '03-illustrations',
    ]

    total_changed = 0
    for target in targets:
        if target.exists():
            print(f"\n{'=' * 60}")
            print(f"Processing: {target.name}")
            print(f"{'=' * 60}")
            total_changed += process_directory(str(target), COLOR_MAP, dry_run)

    print(f"\n{'=' * 60}")
    print(f"TOTAL changed: {total_changed}")
    if dry_run:
        print("(Dry run — no files were modified)")
    print(f"{'=' * 60}")
