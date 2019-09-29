#!/bin/sh

W=$(cd .. && pwd)
THEMES=$W/docs/themes

# restore original docs themes
rm -rf "$THEMES"
cp -r "$THEMES-cache" "$THEMES"

# cat theme README to the MDX theme docs
declare -a themes=("core" "digital-garden" "jasper" "misk")
for theme in "${themes[@]}"; do
  echo "Updating docs/themes $theme"
  cat $W/@westegg/gatsby-theme-$theme/README.md >> $THEMES/westegg-$theme.mdx
done
