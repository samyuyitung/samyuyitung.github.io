#!/bin/sh

cwd=$(dirname "$BASH_SOURCE")
wd=$(dirname $cwd)

content_file="$wd/content.md"
skeleton_file="$wd/skeleton.html"
outfile="$wd/dist/index.html"

if ! command -v pandoc > /dev/null; then
	echo "Error: This util needs pandoc in order to work"
	exit 1
fi

if [ -f "$outfile" ]; then rm "$outfile"; fi


if ! [ -f "$content_file" ]; then
	echo "Error: $content_file does not exist!"
	exit 1
fi

cp "$skeleton_file" "$outfile"

content="$(pandoc "$content_file" -t html)"
content="$(echo $content | sed -E 's~<a ([^>]*)>~<a \1 target=noopener>~g' )"
content="$(echo $content | sed -E "s/\"/'/g")"
	# | sed -E "s/\"/'/g")"

sed -e "s~{{content}}~$content~g" $skeleton_file > $outfile

cp "${wd}/styles/*" ${wd}/dist
cp -r ${wd}/assets ${wd}/dist

cp ${wd}/CNAME ${wd}/README.md ${wd}/dist
