#!/bin/bash
set -euo pipefail

MATERIALS="${1:-public/materials}"

# 1. subtitles/subtitles.zip — all subtitle language folders
while IFS= read -r dir; do
  echo "Zipping subtitles: $dir"
  (cd "$dir" && rm -f "subtitles.zip" && zip -r "subtitles.zip" . -x "subtitles.zip")
done < <(find "$MATERIALS" -type d -name "subtitles")

# 2. teaching-guide/teaching-guide.zip — all files in teaching-guide folder
while IFS= read -r dir; do
  echo "Zipping teaching guide: $dir"
  (cd "$dir" && rm -f "teaching-guide.zip" && zip -r "teaching-guide.zip" . -x "teaching-guide.zip")
done < <(find "$MATERIALS" -type d -name "teaching-guide")

# 3. partN/partN.zip — full part content; subtitles.zip inside videos/ folder
while IFS= read -r dir; do
  part=$(basename "$dir")
  echo "Zipping part: $dir"
  (
    cd "$dir"
    rm -f "${part}.zip"
    zip -r "${part}.zip" . -x "${part}.zip" -x "videos/subtitles/*"
    if [ -f "videos/subtitles/subtitles.zip" ]; then
      cp "videos/subtitles/subtitles.zip" "videos/subtitles.zip"
      zip "${part}.zip" "videos/subtitles.zip"
      rm "videos/subtitles.zip"
    fi
  )
done < <(find "$MATERIALS" -mindepth 2 -maxdepth 2 -type d -name "part*")

# 4. module/module.zip — zip files at root (no subfolders)
while IFS= read -r dir; do
  module=$(basename "$dir")
  echo "Zipping module: $dir"
  (cd "$dir" && rm -f "${module}.zip" && find . -mindepth 2 -maxdepth 2 -name "*.zip" -print0 | xargs -0 zip -j "${module}.zip")
done < <(find "$MATERIALS" -mindepth 1 -maxdepth 1 -type d)

echo "Done."
