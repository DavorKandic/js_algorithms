#!/bin/bash

git init
git add .
read -p"Enter commit message: " MSG
git commit -m${MSG}
read -p"Enter URL of GitHub repo: " URL 
git remote add origin ${URL}
git push -u origin master
echo "DONE!"