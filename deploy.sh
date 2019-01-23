#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git config user.name "clipwww"
git config user.email "clipwww@gmail.com"

# if you are deploying to https://<USERNAME>.github.io
git remote add origin git@github.com:clipwww/clipwww.github.io.git
git push -f origin master

cd -
