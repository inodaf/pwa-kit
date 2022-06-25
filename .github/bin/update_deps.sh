#!/bin/bash

# Update "devDependencies" to their latest version
# and commits the changes.

setup() {
  if which pnpm; then
    git checkout -b "update-dev-deps-`date +%s`"
  else
    echo "Please install 'pnpm' to proceed."
    exit
  fi
}

work() {
  pnpm up --dev --latest
}

commit() {
  git add . && git commit -m "chore(pkg): update dev dependencies"
}

setup && work && commit