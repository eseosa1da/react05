#!/bin/bash
path = pwd | cut -d '/' -f 6
echo "Initializing Git"
git init
git remote add origin https://github.com/eseosa1da/react05.git
git checkout -b $path
git add .
git commit -m "initial commit"
git push origin $path
