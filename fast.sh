#!/bin/bash

git status
sleep 2
git add .
git status
sleep 2

read -p"Enter commit message: " MSG
git commit -m${MSG}
git push