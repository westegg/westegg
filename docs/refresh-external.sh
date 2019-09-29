#!/bin/bash

W=$(cd .. && pwd)
THEMES=$W/docs/themes

# restore original docs themes
rm -rf "$THEMES"
cp -r "$THEMES-cache" "$THEMES"

# cat theme README to the MDX theme docs
declare -a themes=("core" "digital-garden" "jasper" "misk")
for theme in "${themes[@]}"; do
  echo "Updating docs/themes $theme"
  cat "[![npm](https://img.shields.io/npm/v/@westegg/gatsby-theme-$theme.svg?label=@westegg/gatsby-theme-$theme)](https://www.npmjs.com/package/@westegg/gatsby-theme-$theme)" >> $THEMES/westegg-$theme.mdx
  cat $W/@westegg/gatsby-theme-$theme/README.md >> $THEMES/westegg-$theme.mdx
done
