#!/bin/sh
set -e
wd=$(dirname "$BASH_SOURCE")
sh ${wd}/build.sh

open ${wd}/../dist/index.html
