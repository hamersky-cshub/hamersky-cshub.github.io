#!/bin/bash
set -euo pipefail

MATERIALS="${1:-public/materials}"

# 1. teaching-guide/teaching-guide.zip — all files in teaching-guide folder
while IFS= read -r dir; do
  echo "Zipping teaching guide: $dir"
  (cd "$dir" && rm -f "teaching-guide.zip" && zip -r "teaching-guide.zip" . -x "teaching-guide.zip")
done < <(find "$MATERIALS" -type d -name "teaching-guide")

# 2. partN/partN.zip — full part content, including the subtitle .vtt files
#    (videos/subtitles/<locale>/...) as plain folders
while IFS= read -r dir; do
  part=$(basename "$dir")
  echo "Zipping part: $dir"
  (cd "$dir" && rm -f "${part}.zip" && zip -r "${part}.zip" . -x "${part}.zip" -x "*.DS_Store")
done < <(find "$MATERIALS" -mindepth 2 -maxdepth 2 -type d -name "part*")

# 3. module/module.zip — zip files at root (no subfolders)
while IFS= read -r dir; do
  module=$(basename "$dir")
  echo "Zipping module: $dir"
  (cd "$dir" && rm -f "${module}.zip" && find . -mindepth 2 -maxdepth 2 -name "*.zip" -print0 | xargs -0 zip -j "${module}.zip")
done < <(find "$MATERIALS" -mindepth 1 -maxdepth 1 -type d)

echo "Done."
